import { LayersContext } from "@providers/layers";
import { useContext } from "react";

export default function useMapContext() {
  const { ...props } = useContext(LayersContext);
  return { ...props };
}
