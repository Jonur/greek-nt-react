import { ApiTeamData } from './api';
import { FetchingStatus, NationalTeam, Sport } from './enums';

export type ViewContext = {
  sport: Sport;
  setSport: (sport: Sport) => void;
  nationalTeam: NationalTeam;
  setNationalTeam: (nationalTeam: NationalTeam) => void;
};

export type DataContext = {
  gameData: ApiTeamData | null;
  status: FetchingStatus;
};
