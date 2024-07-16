import { Locale } from 'src/types';

const getFormattedGameDateData = (
  startTimestamp: number
): {
  date: string;
  time: string;
} => {
  const gameDate = new Date(startTimestamp * 1000);
  const formattedGameDate = new Intl.DateTimeFormat(Locale.EN_GB, {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
    .format(gameDate)
    .split(' ');

  return {
    date: `${formattedGameDate[0]} ${formattedGameDate[1]} ${formattedGameDate[2]}`,
    time: formattedGameDate[4],
  };
};

export default getFormattedGameDateData;
