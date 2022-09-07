import "@assets/styles/map.scss";
import {
  FullscreenControl,
  GeoLocationControl,
} from "@features/map/components/control";
import { GeoLocationMarker } from "@features/map/components/markers";
import { useLayersContext, useMapContext } from "@features/map/hooks";
import { EControlPositionOptions } from "@features/map/interfaces";
import { PRIMARY_MAIN_COLOR } from "@utils/constants";

import {
  GeoJSON,
  LayersControl,
  MapContainer,
  ScaleControl,
  TileLayer,
  ZoomControl,
} from "react-leaflet";

export default function Map() {
  const { center, zoom } = useMapContext();
  const { plottedLayers } = useLayersContext();

  return (
    <MapContainer
      attributionControl={false}
      zoomControl={false}
      className="map-container"
      center={center}
      zoom={zoom}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LayersControl position="topright">
        <LayersControl.Overlay checked name="Current Location">
          <GeoLocationMarker />
        </LayersControl.Overlay>
        {plottedLayers.map((layer, index) => (
          <LayersControl.Overlay key={index} checked name={layer.name}>
            <GeoJSON
              style={{
                stroke: true,
                color: PRIMARY_MAIN_COLOR,
              }}
              attribution={layer.name}
              data={layer}
            />
          </LayersControl.Overlay>
        ))}
      </LayersControl>
      <ZoomControl position="bottomright" />
      <ScaleControl />
      <FullscreenControl
        prepend
        position={EControlPositionOptions.bottomright}
      />
      <GeoLocationControl position={EControlPositionOptions.bottomright} />
    </MapContainer>
  );
}
