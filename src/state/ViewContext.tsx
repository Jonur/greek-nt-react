import React, { createContext, useEffect, useState } from 'react';

import { NationalTeam, Sport, StoredPrivateClubs, ViewContext } from 'src/types';
import { getLSItem } from 'src/utils';

// eslint-disable-next-line no-type-assertion/no-type-assertion
export const ViewCtx = createContext<ViewContext>({} as ViewContext);

export const ViewProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [sport, setSport] = useState<Sport>(getLSItem<Sport>('sport') || Sport.BASKETBALL);
  const [nationalTeam, setNationalTeam] = useState<NationalTeam>(
    getLSItem<NationalTeam>('nationalTeam') || NationalTeam.MEN
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [privateClubs, setPrivateClubs] = useState<StoredPrivateClubs>({
    [Sport.BASKETBALL]: [],
    [Sport.FOOTBALL]: [],
    [Sport.TENNIS]: [],
    [Sport.WATER_POLO]: [],
  });

  useEffect(() => {
    localStorage.setItem('sport', sport);
    localStorage.setItem('nationalTeam', nationalTeam);
  }, [nationalTeam, sport]);

  return (
    <ViewCtx.Provider
      value={{
        sport,
        setSport,
        nationalTeam,
        setNationalTeam,
        menuOpen,
        setMenuOpen,
        privateClubs,
        setPrivateClubs,
      }}
    >
      {children}
    </ViewCtx.Provider>
  );
};
