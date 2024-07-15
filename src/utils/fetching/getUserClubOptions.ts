import { Sport, StoredPrivateClubs } from 'src/types';

const getIsStoredPrivateClubs = (item: any): item is StoredPrivateClubs =>
  item &&
  typeof item === 'object' &&
  Object.keys(item).every((key) =>
    [`${Sport.BASKETBALL}`, `${Sport.FOOTBALL}`, `${Sport.TENNIS}`, `${Sport.WATER_POLO}`].includes(key)
  );

const getUserClubOptions = (): StoredPrivateClubs => {
  const lsValue = localStorage.getItem('privateClubs');

  if (lsValue && getIsStoredPrivateClubs(JSON.parse(lsValue))) {
    return JSON.parse(lsValue);
  }

  return {
    [Sport.BASKETBALL]: [],
    [Sport.FOOTBALL]: [],
    [Sport.TENNIS]: [],
    [Sport.WATER_POLO]: [],
  };
};

export default getUserClubOptions;
