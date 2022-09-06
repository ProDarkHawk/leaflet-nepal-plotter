export enum EControlPositionOptions {
  bottomright = "bottomright",
  bottomleft = "bottomleft",
  topleft = "topleft",
  topright = "topright",
}

export interface ICustomControl {
  prepend?: boolean;
  position: EControlPositionOptions;
}
