import { MapContext } from "@providers/map";
import { useContext } from "react";

export default function useMapContext() {
  const { ...props } = useContext(MapContext);
  return { ...props };
}
