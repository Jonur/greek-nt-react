import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

import { TEAM_SOFASCORE_IDS } from 'src/constants';
import { useViewCtx } from 'src/hooks';
import { ApiTeamData, DataContext, FetchingStatus, TeamEvent } from 'src/types';
import { games } from 'src/utils';

// eslint-disable-next-line no-type-assertion/no-type-assertion
export const DataCtx = createContext<DataContext>({} as DataContext);

export const DataProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { sport, nationalTeam } = useViewCtx();

  const [status, setStatus] = useState<FetchingStatus>(FetchingStatus.LOADING);
  const [teamEvents, setTeamEvents] = useState<TeamEvent[]>([]);

  useEffect(() => {
    const teamId = TEAM_SOFASCORE_IDS[`${sport}-${nationalTeam}`];

    const fetchData = (page = 0) => {
      setStatus(FetchingStatus.LOADING);

      axios
        .get(`https://www.sofascore.com/api/v1/team/${teamId}/events/next/${page}`)
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
    };

    void fetchData();
  }, [nationalTeam, sport]);

  return <DataCtx.Provider value={{ teamEvents, status }}>{children}</DataCtx.Provider>;
};
