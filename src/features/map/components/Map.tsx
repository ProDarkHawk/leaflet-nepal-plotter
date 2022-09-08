import "@assets/styles/map.scss";
import {
  FullscreenControl,
  GeoLocationControl,
} from "@features/map/components/control";
import { GeoLocationMarker } from "@features/map/components/markers";
import { initialMapZoom, intitalMapCenter } from "@features/map/data";
import { EControlPositionOptions } from "@features/map/interfaces";

import {
  LayersControl,
  MapContainer,
  ScaleControl,
  TileLayer,
  ZoomControl,
} from "react-leaflet";

export default function Map() {
  return (
    <MapContainer
      attributionControl={false}
      zoomControl={false}
      className="map-container"
      center={intitalMapCenter}
      zoom={initialMapZoom}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LayersControl position="topright">
        <LayersControl.Overlay checked name="Current Location">
          <GeoLocationMarker />
        </LayersControl.Overlay>
        {/* {plottedLayers.map((layer, index) => (
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
        ))} */}
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
