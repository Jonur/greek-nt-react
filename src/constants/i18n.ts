import { NationalTeam, Sport } from 'src/types';

export const TRANSLATIONS: Record<string, string> = {
  [Sport.BASKETBALL]: 'Basketball',
  [Sport.FOOTBALL]: 'Football',
  [Sport.WATER_POLO]: 'Water polo',
  [NationalTeam.MENS]: 'Men’s',
  [NationalTeam.WOMENS]: 'Women’s',
  error: 'Oops! Something went wrong! Please bear with us, while we’re trying to sort it out.',
};
