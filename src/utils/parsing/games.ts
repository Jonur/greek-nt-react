import { ApiTeam, ApiTeamData, ApiTournament, Team, TeamEvent } from 'src/types';

const getTeamData = (team: ApiTeam): Team => ({
  id: team.id,
  name: team.name,
  teamColors: {
    primary: team.teamColors.primary,
    secondary: team.teamColors.secondary,
    text: team.teamColors.text,
  },
});

const getTournamentName = (tournament: ApiTournament) =>
  tournament.isGroup ? tournament.uniqueTournament.name : tournament.name;

const games = (data: ApiTeamData): TeamEvent[] =>
  data.events.map((event) => ({
    id: event.id,
    startTimestamp: event.startTimestamp,
    status: event.status,
    tournament: {
      id: event.tournament.id,
      uniqueTournamentId: event.tournament.uniqueTournament.id,
      name: getTournamentName(event.tournament),
      groupName: event.tournament.groupName,
      category: {
        id: event.tournament.category.id,
        name: event.tournament.category.name,
        sport: {
          name: event.tournament.category.sport.name,
        },
      },
    },
    awayTeam: getTeamData(event.awayTeam),
    homeTeam: getTeamData(event.homeTeam),
  }));

export default games;
