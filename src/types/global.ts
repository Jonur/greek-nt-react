export type WindowDimensions = {
  width: number;
  height: number;
};

export type ScrollEvent = React.UIEvent<HTMLDivElement> & {
  target: {
    scrollLeft: number;
    scrollWidth: number;
    offsetLeft: number;
    clientWidth: number;
    offsetWidth: number;
  };
};
