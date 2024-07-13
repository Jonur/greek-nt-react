import { useContext } from 'react';

import { DataCtx } from 'src/state';
import { DataContext } from 'src/types';

const useDataCtx = (): DataContext => {
  const context = useContext(DataCtx);

  if (context === undefined) {
    throw new Error('useDataCtx must be used within a DataCtx Provider');
  }

  return context;
};

export default useDataCtx;
