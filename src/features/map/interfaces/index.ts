import type { GeoJSON, GeoJsonObject } from "geojson";

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

export interface LayerObject {
  name: string;
  type: GeoJSON["type"];
  features: GeoJsonObject[];
}

export interface ProvinceObject {
  id: number;
  name: string;
  capital: string;
}
