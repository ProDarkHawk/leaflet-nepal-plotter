import { useGeolocation } from "@features/map/hooks";
import { useEffect } from "react";
import { Circle, FeatureGroup, Marker, Popup } from "react-leaflet";
const GeoLocationMarker = () => {
  const { position, locate, stopLocate } = useGeolocation();
  useEffect(() => {
    locate();
    return () => {
      stopLocate();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <FeatureGroup>
      <Marker position={position}>
        <Popup>You are here at [{position.toString()}]</Popup>
      </Marker>
      <Circle
        radius={5000}
        center={position}
        pathOptions={{
          stroke: false,
        }}
      />
    </FeatureGroup>
  );
};

export default GeoLocationMarker;
