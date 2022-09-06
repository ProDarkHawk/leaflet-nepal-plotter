import "@assets/styles/map.scss";
import {
  FullscreenControl,
  GeoLocationControl,
} from "@features/map/components/control";
import { GeoLocationMarker } from "@features/map/components/markers";
import { initialMapState } from "@features/map/data";
import { EControlPositionOptions } from "@features/map/interfaces";
import {
  MapContainer,
  ScaleControl,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
export default function Map() {
  const { center } = initialMapState;
  return (
    <MapContainer
      attributionControl={false}
      zoomControl={false}
      className="map-container"
      center={center}
      zoom={13}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <ZoomControl position="bottomright" />
      <ScaleControl />
      <FullscreenControl
        prepend
        position={EControlPositionOptions.bottomright}
      />
      <GeoLocationControl position={EControlPositionOptions.bottomright} />

      <GeoLocationMarker />
    </MapContainer>
  );
}
