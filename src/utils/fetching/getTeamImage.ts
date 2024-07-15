import { Team } from 'src/types';

const getTeamImage = (team: Team) => `https://api.sofascore.app/api/v1/team/${team.id}/image`;

export default getTeamImage;
