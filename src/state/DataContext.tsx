import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

import { FETCHING_DELAY_EFFECT_MS, TEAM_IDS } from 'src/constants';
import { useViewCtx } from 'src/hooks';
import { ApiNearEventsData, ApiTeamData, DataContext, FetchingStatus, GameStatus, TeamEvent } from 'src/types';
import { games, getTeamEvents, getTeamNearEvents, getUserClubOptions } from 'src/utils';

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
        const allNearEventsResults = await Promise.allSettled(
          teamIds.map((teamId) => axios.get(getTeamNearEvents(teamId)))
        );
        const fulfilledResults = allResults.filter((r) => r.status === 'fulfilled');
        const fulfilledNearResults = allNearEventsResults.filter((r) => r.status === 'fulfilled');
        let hasNextPage = false;

        if (fulfilledResults.length > 0 || fulfilledNearResults.length > 0) {
          fulfilledResults.forEach((result) => {
            const response = result.value;
            const newData: ApiTeamData = response.data;
            hasNextPage = newData.hasNextPage;

            const futureEvents = games(newData).filter((event) =>
              [GameStatus.IN_PROGRESS, GameStatus.NOT_STARTED].includes(event.status.type)
            );
            setTeamEvents((prevEvents) => [
              ...prevEvents,
              ...futureEvents.filter((event) => !prevEvents.find((e) => e.id === event.id)),
            ]);
          });

          fulfilledNearResults.forEach((result) => {
            const response = result.value;
            const newData: ApiNearEventsData = response.data;

            const nearEventsData: ApiTeamData = {
              events: [newData.nextEvent, newData.previousEvent].filter(Boolean),
              hasNextPage: false,
            };

            const nearEvents = games(nearEventsData).filter((event) =>
              [GameStatus.IN_PROGRESS, GameStatus.NOT_STARTED].includes(event.status.type)
            );

            setTeamEvents((prevEvents) => [
              ...prevEvents,
              ...nearEvents.filter((event) => !prevEvents.find((e) => e.id === event.id)),
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
