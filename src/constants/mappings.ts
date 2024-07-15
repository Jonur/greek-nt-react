import { NationalTeam, Sport } from 'src/types';

export const SPORT_ICON_MAP: Record<Sport, string> = {
  [Sport.BASKETBALL]: 'basketball',
  [Sport.FOOTBALL]: 'football',
  [Sport.WATER_POLO]: 'polo',
};

export const TEAM_IDS: Record<string, number> = {
  [`${Sport.BASKETBALL}-${NationalTeam.MENS}`]: 6128,
  [`${Sport.FOOTBALL}-${NationalTeam.MENS}`]: 4710,
  [`${Sport.WATER_POLO}-${NationalTeam.MENS}`]: 24492,
  [`${Sport.BASKETBALL}-${NationalTeam.WOMENS}`]: 35343,
  [`${Sport.FOOTBALL}-${NationalTeam.WOMENS}`]: 35316,
  [`${Sport.WATER_POLO}-${NationalTeam.WOMENS}`]: 24481,
};
