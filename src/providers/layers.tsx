import { useNepalGeoJson } from "@features/map/api/getNepalGeoJson";
import { LayerObject } from "@features/map/interfaces";
import { IWrapper } from "@interfaces/wrapper";
import { createContext, useEffect, useState } from "react";

interface LayersContextState {
  layers: LayerObject[];
  selectedLayers: LayerObject[];
  setSelectedLayers: (layers: LayerObject[]) => void;
  resetSelectedLayers: () => void;
  plottedLayers: LayerObject[];
  setPlottedLayers: () => void;
  resetPlottedLayers: () => void;
}

export const LayersContext = createContext<LayersContextState>({
  layers: [],
  selectedLayers: [],
  setSelectedLayers: () => {},
  resetSelectedLayers: () => {},
  plottedLayers: [],
  setPlottedLayers: () => {},
  resetPlottedLayers: () => {},
});

export const LayersProvider = ({ children }: IWrapper) => {
  const [selectedLayers, setSelectedLayers] = useState<LayerObject[]>([]);
  const [plottedLayers, setPlottedLayers] = useState<LayerObject[]>([]);
  const { data, isLoading } = useNepalGeoJson();
  useEffect(() => {
    if (data && !isLoading) {
      const layerObject: LayerObject = {
        name: "Nepal Boundary",
        type: "FeatureCollection",
        features: [data],
      };
      setPlottedLayers([layerObject]);
    }
  }, [data, isLoading]);
  return (
    <LayersContext.Provider
      value={{
        layers: [],
        selectedLayers: selectedLayers,
        setSelectedLayers: (layers: LayerObject[]) => {
          setSelectedLayers(layers);
        },
        resetSelectedLayers: () => {
          setSelectedLayers([]);
        },
        plottedLayers: plottedLayers,
        setPlottedLayers: () => {
          setPlottedLayers(selectedLayers);
        },
        resetPlottedLayers: () => {
          setPlottedLayers([]);
        },
      }}
    >
      {children}
    </LayersContext.Provider>
  );
};
