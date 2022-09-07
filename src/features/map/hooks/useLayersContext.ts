import { LayersContext } from "@providers/layers";
import { useContext } from "react";

export default function useLayerContext() {
  const { ...props } = useContext(LayersContext);
  return { ...props };
}
