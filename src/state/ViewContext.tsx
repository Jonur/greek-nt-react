import React, { createContext, useState } from 'react';

import { NationalTeam, Sport, ViewContext } from 'src/types';

// eslint-disable-next-line no-type-assertion/no-type-assertion
export const ViewCtx = createContext<ViewContext>({} as ViewContext);

export const ViewProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [sport, setSport] = useState<Sport>(Sport.BASKETBALL);
  const [nationalTeam, setNationalTeam] = useState<NationalTeam>(NationalTeam.MENS);

  return (
    <ViewCtx.Provider
      value={{
        sport,
        setSport,
        nationalTeam,
        setNationalTeam,
      }}
    >
      {children}
    </ViewCtx.Provider>
  );
};
