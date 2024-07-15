import { NationalTeam, Sport } from 'src/types';

export const TRANSLATIONS: Record<string, string> = {
  [Sport.BASKETBALL]: 'Basketball',
  [Sport.FOOTBALL]: 'Football',
  [Sport.WATER_POLO]: 'Water polo',
  [Sport.TENNIS]: 'Tennis',
  [NationalTeam.MEN]: 'Men’s',
  [NationalTeam.WOMEN]: 'Women’s',
  error: 'It seems like there are no scheduled events for this category.',
  'settings.title': 'Settings',
  'settings.description': 'Select your favourite clubs to view their schedule.',
  'cta.cancel': 'Cancel',
  'cta.updatePreferences': 'Update preferences',
  'cta.settings': 'Settings',
  'footer.title': 'Jonur',
  'footer.ariaLabel': 'Jonur on Github',
  'gameCard.date': 'Date',
  'gameCard.time': 'Time',
  'gameCard.logo': 'logo',
  'gameCard.gameDetails': 'Game details',
  'app.title': 'Greek national teams’ games',
  3501: 'Olympiacos',
  3508: 'Panathinaikos',
  3502: 'AEK',
  3505: 'Aris',
  3509: 'PAOK',
  3245: 'Olympiacos',
  3248: 'Panathinaikos',
  3250: 'AEK',
  3252: 'Aris',
  3251: 'PAOK',
};
