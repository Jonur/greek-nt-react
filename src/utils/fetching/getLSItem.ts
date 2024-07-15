import { ObjectTyped } from 'object-typed';

import { NationalTeam, Sport } from 'src/types';

const itemIsSport = (item: string): item is Sport => ObjectTyped.keys(Sport).includes(item as Sport);
const itemIsNationalTeam = (item: string): item is NationalTeam =>
  ObjectTyped.keys(NationalTeam).includes(item as NationalTeam);

const getLSItem = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);

  if (item && (itemIsSport(item) || itemIsNationalTeam(item))) {
    return item as T;
  }

  return null;
};

export default getLSItem;
