/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Team, TeamGames } from 'src/types';

const getTeamData = (team: any): Team => ({
  id: team.id,
  name: team.name,
  teamColors: {
    primary: team.teamColors.primary,
    secondary: team.teamColors.secondary,
    text: team.teamColors.text,
  },
});

const games = (data: any): TeamGames['events'] =>
  data.events.map((event: any) => ({
    id: event.id,
    startTimestamp: event.startTimestamp,
    status: event.status,
    tournament: {
      id: event.tournament.id,
      uniqueTournamentId: event.tournament.uniqueTournament?.id || 0,
      name: event.tournament.name,
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
