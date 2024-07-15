import { GameStatus } from 'src/types';

export const AXIOS_RETRY_COUNT = 3;

export const AXIOS_RETRY_DELAY_MS = 2000;

export const FETCHING_DELAY_EFFECT_MS = 1000;

export const GAME_STATUS_CODES: Record<GameStatus, number> = {
  [GameStatus.NOT_STARTED]: 0,
  [GameStatus.FINISHED]: 100,
  [GameStatus.CANCELLED]: 70,
};
