import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

import { FETCHING_DELAY_EFFECT_MS, GAME_STATUS_CODES, TEAM_IDS } from 'src/constants';
import { useViewCtx } from 'src/hooks';
import { ApiTeamData, DataContext, FetchingStatus, GameStatus, TeamEvent } from 'src/types';
import { games, getTeamEvents, getUserClubOptions } from 'src/utils';

// eslint-disable-next-line no-type-assertion/no-type-assertion
export const DataCtx = createContext<DataContext>({} as DataContext);

export const DataProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { sport, nationalTeam, privateClubs } = useViewCtx();

  const [status, setStatus] = useState<FetchingStatus>(FetchingStatus.LOADING);
  const [teamEvents, setTeamEvents] = useState<TeamEvent[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const teamIds = [...TEAM_IDS[`${sport}-${nationalTeam}`], ...getUserClubOptions()[sport]];
    let timeout: NodeJS.Timeout;

    const fetchData = (page = 0) => {
      setStatus(FetchingStatus.LOADING);
      setTeamEvents([]);

      timeout = setTimeout(async () => {
        const allResults = await Promise.allSettled(teamIds.map((teamId) => axios.get(getTeamEvents(teamId, page))));
        const fulfilledResults = allResults.filter((r) => r.status === 'fulfilled');
        let hasNextPage = false;

        if (fulfilledResults.length > 0) {
          fulfilledResults.forEach((result) => {
            const response = result.value;
            const newData: ApiTeamData = response.data;
            hasNextPage = newData.hasNextPage;

            const futureEvents = games(newData).filter(
              (event) => event.status.code === GAME_STATUS_CODES[GameStatus.NOT_STARTED]
            );
            setTeamEvents((prevEvents) => [
              ...prevEvents,
              ...futureEvents.filter((event) => !prevEvents.find((e) => e.id === event.id)),
            ]);
          });

          if (hasNextPage) {
            fetchData(page + 1);
          }
        } else {
          setStatus(FetchingStatus.FAILURE);
          return;
        }

        setTeamEvents((prevEvents) => prevEvents.sort((a, b) => a.startTimestamp - b.startTimestamp));

        setStatus(FetchingStatus.SUCCESS);
      }, FETCHING_DELAY_EFFECT_MS);
    };

    void fetchData();

    return () => {
      clearTimeout(timeout);
    };
  }, [nationalTeam, sport, privateClubs]);

  return <DataCtx.Provider value={{ teamEvents, status }}>{children}</DataCtx.Provider>;
};
