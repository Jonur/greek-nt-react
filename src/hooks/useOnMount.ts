import { EffectCallback, useEffect } from 'react';

// eslint-disable-next-line react-hooks/exhaustive-deps
const useOnMount = (callback: EffectCallback) => useEffect(callback, []);

export default useOnMount;
