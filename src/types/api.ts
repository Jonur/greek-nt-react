import { GameStatus } from './enums';

type Sport = {
  name: string;
  slug: string;
  id: number;
};

type Country = {
  alpha2?: string;
  alpha3?: string;
  name?: string;
};

type Category = {
  name: string;
  slug: string;
  sport: Sport;
  id: number;
  country?: Country;
  flag: string;
};

type UniqueTournament = {
  name: string;
  slug: string;
  primaryColorHex: string;
  secondaryColorHex: string;
  category: Category;
  userCount: number;
  id: number;
  country?: Country;
  crowdsourcingEnabled: boolean;
  hasPerformanceGraphFeature: boolean;
  hasEventPlayerStatistics: boolean;
  displayInverseHomeAwayTeams: boolean;
};

export type ApiTournament = {
  name: string;
  slug: string;
  category: Category;
  uniqueTournament: UniqueTournament;
  priority: number;
  isGroup: boolean;
  groupName: string;
  isLive: boolean;
  id: number;
};

type Season = {
  name: string;
  year: string;
  editor: boolean;
  id: number;
};

type RoundInfo = {
  round: number;
};

type Status = {
  code: number;
  description: string;
  type: GameStatus;
};

type TeamColors = {
  primary: string;
  secondary: string;
  text: string;
};

type FieldTranslations = {
  nameTranslation: Record<string, string>;
  shortNameTranslation: Record<string, string>;
};

export type ApiTeam = {
  name: string;
  slug: string;
  shortName: string;
  gender: string;
  sport: Sport;
  userCount: number;
  nameCode: string;
  disabled: boolean;
  national: boolean;
  type: number;
  id: number;
  country: Country;
  subTeams: any[];
  teamColors: TeamColors;
  fieldTranslations: FieldTranslations;
};

type Periods = {
  current: string;
  period1: string;
  period2: string;
  period3: string;
  period4: string;
  overtime: string;
};

type Changes = {
  changeTimestamp: number;
};

export type ApiTeamEvent = {
  tournament: ApiTournament;
  season: Season;
  roundInfo: RoundInfo;
  customId: string;
  status: Status;
  homeTeam: ApiTeam;
  awayTeam: ApiTeam;
  homeScore: Record<string, any>;
  awayScore: Record<string, any>;
  time: Record<string, any>;
  changes: Changes;
  hasGlobalHighlights: boolean;
  crowdsourcingDataDisplayEnabled: boolean;
  id: number;
  periods: Periods;
  startTimestamp: number;
  slug: string;
  finalResultOnly: boolean;
  feedLocked: boolean;
  isEditor: boolean;
  crowdsourcingEnabled: boolean;
};

export type ApiTeamData = {
  events: ApiTeamEvent[];
  hasNextPage: boolean;
};

export type ApiNearEventsData = {
  previousEvent: ApiTeamEvent;
  nextEvent: ApiTeamEvent;
};
