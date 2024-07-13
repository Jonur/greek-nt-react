export type Team = {
  id: number;
  name: string;
  teamColors: { primary: string; secondary: string; text: string };
};

export type Tournament = {
  id: number;
  uniqueTournamentId: number;
  name: string;
  groupName: string;
  category: {
    id: number;
    name: string;
    sport: { name: string };
  };
};

export type TeamEvent = {
  id: number;
  customId: string;
  slug: string;
  startTimestamp: number;
  status: {
    code: number;
    description: string;
    type: string;
  };
  tournament: Tournament;
  awayTeam: Team;
  homeTeam: Team;
};

export type TeamGames = {
  events: TeamEvent[];
  hasNextPage: boolean;
};
