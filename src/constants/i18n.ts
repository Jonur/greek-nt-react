import { NationalTeam, Sport } from 'src/types';

export const TRANSLATIONS: Record<string, string> = {
  [Sport.BASKETBALL]: 'Basketball',
  [Sport.FOOTBALL]: 'Football',
  [Sport.WATER_POLO]: 'Water polo',
  [Sport.TENNIS]: 'Tennis',
  [NationalTeam.MENS]: 'Men’s',
  [NationalTeam.WOMENS]: 'Women’s',
  error: 'It seems like there are no scheduled events for this category. Bear with us as we work on it!',
};
