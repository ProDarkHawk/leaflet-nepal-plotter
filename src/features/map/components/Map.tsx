import "@assets/styles/map.scss";
import { useNepalGeoJson } from "@features/map/api/getNepalGeoJson";
import {
  FullscreenControl,
  GeoLocationControl,
} from "@features/map/components/control";
import { GeoLocationMarker } from "@features/map/components/markers";
import { EControlPositionOptions, LayerObject } from "@features/map/interfaces";
import { useAppDispatch, useAppSelector } from "@hooks/store";
import { setDefaultLayer, setPlottedLayers } from "@redux/actions";
import { PRIMARY_MAIN_COLOR } from "@utils/constants";
import { useEffect } from "react";
import {
  GeoJSON,
  LayersControl,
  MapContainer,
  ScaleControl,
  TileLayer,
  ZoomControl,
} from "react-leaflet";

export default function Map() {
  const { center, zoom, plottedLayers } = useAppSelector((state) => state.map);
  const { data, isLoading } = useNepalGeoJson();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data && !isLoading) {
      const newLayer = {
        name: "Nepal Boundary",
        fill: false,
        type: "FeatureCollection",
        features: [data],
      } as LayerObject;
      dispatch(setDefaultLayer(newLayer));
      dispatch(setPlottedLayers([newLayer]));
    }
  }, [data, isLoading, dispatch]);

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
              style={
                layer.fill
                  ? {
                      stroke: true,
                      color: layer.color,
                      fill: layer.fill,
                      fillColor: layer.fillColor,
                      fillOpacity: 1,
                    }
                  : {
                      stroke: true,
                      color: PRIMARY_MAIN_COLOR,
                    }
              }
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
