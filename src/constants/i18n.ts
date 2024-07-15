import { NationalTeam, Sport } from 'src/types';

export const TRANSLATIONS: Record<string, string> = {
  [Sport.BASKETBALL]: 'Basketball',
  [Sport.FOOTBALL]: 'Football',
  [Sport.WATER_POLO]: 'Water polo',
  [Sport.TENNIS]: 'Tennis',
  [NationalTeam.MEN]: 'Men’s',
  [NationalTeam.WOMEN]: 'Women’s',
  error: 'It seems like there are no scheduled events for this category.',
};
