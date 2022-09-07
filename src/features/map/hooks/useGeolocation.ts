import { useMapContext } from "@features/map/hooks";
import { useState } from "react";
import { useMap } from "react-leaflet";
export default function useGeolocation() {
  const { center } = useMapContext();
  const [locating, setLocating] = useState<boolean>(false);
  const [position, setPosition] = useState(center);
  const [geoLocationGranted, setGeoLocationGranted] = useState(false);

  navigator.permissions.query({ name: "geolocation" }).then((result) => {
    if (result.state === "granted") {
      setGeoLocationGranted(true);
    }
  });

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

  return { position, locate, locating, stopLocate, geoLocationGranted };
}
