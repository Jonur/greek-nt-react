import { useState } from 'react';

import { BREAKPOINTS } from 'src/constants';
import { Breakpoint, EventType, WindowDimensions } from 'src/types';

import useOnMount from './useOnMount';

type UseWindowDimensionsReturnType = {
  windowDimensions: WindowDimensions;
  onLargeScreen: () => boolean;
};

const useWindowDimensions = (): UseWindowDimensionsReturnType => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () =>
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

  const onLargeScreen = () => windowDimensions.width >= BREAKPOINTS[Breakpoint.LG];

  useOnMount(() => {
    window.addEventListener(EventType.RESIZE, handleResize);

    return () => {
      window.removeEventListener(EventType.RESIZE, handleResize);
    };
  });

  return { windowDimensions, onLargeScreen };
};

export default useWindowDimensions;
