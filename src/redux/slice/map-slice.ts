import { initialMapZoom, intitalMapCenter } from "@features/map/data";
import { LayerObject } from "@features/map/interfaces";
import { createSlice } from "@reduxjs/toolkit";
import { LatLngTuple } from "leaflet";
interface MapState {
  center: LatLngTuple;
  zoom: number;
  plottedLayers: LayerObject[];
  defaultLayer: LayerObject | null;
}

interface PlottedLayersPayload {
  payload: LayerObject[];
}

interface DefaultLayerPayload {
  payload: LayerObject;
}

const intitalMapState = {
  center: intitalMapCenter,
  zoom: initialMapZoom,
  plottedLayers: [],
  defaultLayer: null,
} as MapState;

export const mapSlice = createSlice({
  name: "map",
  initialState: intitalMapState,
  reducers: {
    setCenter(state, action) {
      state.center = action.payload;
    },
    setZoom(state, action) {
      state.center = action.payload;
    },
    setPlottedLayers(state, { payload }: PlottedLayersPayload) {
      state.plottedLayers = payload;
    },
    resetPlottedLayers(state) {
      state.plottedLayers = [];
    },
    setDefaultLayer(state, { payload }: DefaultLayerPayload) {
      state.defaultLayer = payload;
    },
  },
});
