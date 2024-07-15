import { TeamEvent } from 'src/types';

const getGameExternalLink = (game: TeamEvent) =>
  `https://www.sofascore.com/${game.slug}/${game.customId}#id:${game.id}`;

export default getGameExternalLink;
