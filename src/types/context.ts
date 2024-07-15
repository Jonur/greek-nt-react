import React from 'react';

import { TeamEvent } from './data';
import { FetchingStatus, NationalTeam, Sport } from './enums';

export type StoredPrivateClubs = Record<Sport, number[]>;

export type ViewContext = {
  sport: Sport;
  setSport: (sport: Sport) => void;
  nationalTeam: NationalTeam;
  setNationalTeam: (nationalTeam: NationalTeam) => void;
  menuOpen: boolean;
  setMenuOpen: (menuOpen: boolean) => void;
  privateClubs: StoredPrivateClubs;
  setPrivateClubs: React.Dispatch<React.SetStateAction<StoredPrivateClubs>>;
};

export type DataContext = {
  teamEvents: TeamEvent[];
  status: FetchingStatus;
};
