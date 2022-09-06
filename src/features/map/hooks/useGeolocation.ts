import { initialMapState } from "@features/map/data";
import { LatLngTuple } from "leaflet";
import { useState } from "react";
import { useMap } from "react-leaflet";
export default function useGeolocation() {
  const [locating, setLocating] = useState<boolean>(false);
  const [position, setPosition] = useState<LatLngTuple>(initialMapState.center);

  const map = useMap();
  const locate = (): void => {
    setLocating(true);
    map.locate().on("locationfound", function (e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
      map.flyTo(e.latlng, map.getZoom());
      setLocating(false);
    });

    map.locate().on("locationerror", function () {
      setLocating(false);
    });
  };

  const stopLocate = () => {
    map.stopLocate();
  };

  return { position, locate, locating, stopLocate };
}