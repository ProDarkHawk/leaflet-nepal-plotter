import Axios from "@lib/axios";
import type { GeoJsonObject } from "geojson";
import { useQuery } from "react-query";

const fetchNepalGeoJson = (): Promise<GeoJsonObject> =>
  Axios.get("/nepal.geojson");

export const useNepalGeoJson = () => {
  return useQuery(["nepal"], fetchNepalGeoJson);
};
