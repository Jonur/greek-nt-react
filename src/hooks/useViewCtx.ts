import { useContext } from 'react';

import { ViewCtx } from 'src/state';
import { ViewContext } from 'src/types';

const useViewCtx = (): ViewContext => {
  const context = useContext(ViewCtx);

  if (context === undefined) {
    throw new Error('useViewCtx must be used within a ViewCtx Provider');
  }

  return context;
};

export default useViewCtx;
