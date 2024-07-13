import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

import { TEAM_SOFASCORE_IDS } from 'src/constants';
import { useViewCtx } from 'src/hooks';
import { ApiTeamData, DataContext, FetchingStatus } from 'src/types';

// eslint-disable-next-line no-type-assertion/no-type-assertion
export const DataCtx = createContext<DataContext>({} as DataContext);

export const DataProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { sport, nationalTeam } = useViewCtx();

  const [status, setStatus] = useState<FetchingStatus>(FetchingStatus.LOADING);
  const [gameData, setGameData] = useState<ApiTeamData | null>(null);

  useEffect(() => {
    const teamId = TEAM_SOFASCORE_IDS[`${sport}-${nationalTeam}`];

    axios
      .get(`https://www.sofascore.com/api/v1/team/${teamId}/events/next/0`)
      .then((response) => {
        setGameData(response.data);
        setStatus(FetchingStatus.SUCCESS);
      })
      .catch(() => {
        setStatus(FetchingStatus.FAILURE);
      });
  }, [nationalTeam, sport]);

  return <DataCtx.Provider value={{ gameData, status }}>{children}</DataCtx.Provider>;
};
