import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

import { FETCHING_DELAY_EFFECT_MS, TEAM_IDS } from 'src/constants';
import { useViewCtx } from 'src/hooks';
import { ApiTeamData, DataContext, FetchingStatus, TeamEvent } from 'src/types';
import { games, getTeamEvents } from 'src/utils';

// eslint-disable-next-line no-type-assertion/no-type-assertion
export const DataCtx = createContext<DataContext>({} as DataContext);

export const DataProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { sport, nationalTeam } = useViewCtx();

  const [status, setStatus] = useState<FetchingStatus>(FetchingStatus.LOADING);
  const [teamEvents, setTeamEvents] = useState<TeamEvent[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const teamId = TEAM_IDS[`${sport}-${nationalTeam}`];
    let timeout: NodeJS.Timeout;

    const fetchData = (page = 0) => {
      setStatus(FetchingStatus.LOADING);
      setTeamEvents([]);

      timeout = setTimeout(() => {
        axios
          .get(getTeamEvents(teamId, page))
          .then((response) => {
            const newData: ApiTeamData = response.data;
            const hasNextPage = newData.hasNextPage;

            setTeamEvents((prevEvents) => [...prevEvents, ...games(newData)]);

            if (hasNextPage) {
              void fetchData(page + 1);
            }
          })
          .catch(() => {
            setStatus(FetchingStatus.FAILURE);
          })
          .finally(() => {
            setStatus(FetchingStatus.SUCCESS);
          });
      }, FETCHING_DELAY_EFFECT_MS);
    };

    void fetchData();

    return () => {
      clearTimeout(timeout);
    };
  }, [nationalTeam, sport]);

  return <DataCtx.Provider value={{ teamEvents, status }}>{children}</DataCtx.Provider>;
};
