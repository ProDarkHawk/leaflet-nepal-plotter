import { IWrapper } from "@interfaces/wrapper";
import { LatLngTuple } from "leaflet";
import { createContext, useState } from "react";

export const initialMapState = {
  center: [27.712, 85.312] as LatLngTuple,
  zoom: 7,
};
interface MapContextProps {
  center: LatLngTuple;
  zoom: number;
  setCenter: (center: LatLngTuple) => void;
  setZoom: (zoom: number) => void;
}

export const MapContext = createContext<MapContextProps>({
  center: initialMapState.center,
  zoom: initialMapState.zoom,
  setCenter: (center: LatLngTuple) => {},
  setZoom: (zoom: number) => {},
});

export const MapContextProvider = ({ children }: IWrapper) => {
  const [mapCenter, setMapCenter] = useState(initialMapState.center);
  const [mapZoom, setMapZoom] = useState(initialMapState.zoom);
  return (
    <MapContext.Provider
      value={{
        center: mapCenter,
        zoom: mapZoom,
        setCenter: (center: LatLngTuple) => {
          setMapCenter(center);
        },
        setZoom: (zoom: number) => {
          setMapZoom(zoom);
        },
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
