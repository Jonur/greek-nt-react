const getLSItem = <T = string>(key: string) => {
  const item = localStorage.getItem(key);

  if (!item) {
    return null;
  }

  return item as T;
};

export default getLSItem;
