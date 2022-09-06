import { useGeolocation } from "@features/map/hooks";
import { RadioButtonChecked } from "@mui/icons-material";
import { divIcon } from "leaflet";
import { useEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Marker, Popup } from "react-leaflet";
const GeoLocationMarker = () => {
  const { position, locate, stopLocate } = useGeolocation();
  useEffect(() => {
    locate();
    return () => {
      stopLocate();
    };
    // eslint-disable-next-line
  }, []);

  const iconMarkup = renderToStaticMarkup(<RadioButtonChecked />);
  const markerIcon = divIcon({
    html: iconMarkup,
    className: "custom-marker",
  });
  return (
    <Marker position={position} icon={markerIcon}>
      <Popup>You are here!</Popup>
    </Marker>
  );
};

export default GeoLocationMarker;
