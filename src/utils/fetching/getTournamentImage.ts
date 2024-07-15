import { Tournament } from 'src/types';

const getTournamentImage = (tournament: Tournament) =>
  `https://api.sofascore.app/api/v1/unique-tournament/${tournament.uniqueTournamentId}/image/dark`;

export default getTournamentImage;
