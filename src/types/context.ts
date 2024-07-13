import { TeamEvent } from './data';
import { FetchingStatus, NationalTeam, Sport } from './enums';

export type ViewContext = {
  sport: Sport;
  setSport: (sport: Sport) => void;
  nationalTeam: NationalTeam;
  setNationalTeam: (nationalTeam: NationalTeam) => void;
};

export type DataContext = {
  teamEvents: TeamEvent[];
  status: FetchingStatus;
};
