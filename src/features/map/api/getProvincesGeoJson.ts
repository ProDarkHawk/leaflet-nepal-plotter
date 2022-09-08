import { ProvinceObject } from "@features/map/interfaces";
import Axios from "@lib/axios";
import type { GeoJsonObject } from "geojson";
import { useCallback } from "react";
import { useQueries } from "react-query";
import { MultiValue } from "react-select";

const fetchProvincesGeoJson = (provinceId: number): Promise<GeoJsonObject> =>
  Axios.get(`/Province${provinceId}/Province-${provinceId}.geojson`);

export const useProvincesGeoJson = (provinces: MultiValue<ProvinceObject>) => {
  const results = useQueries(
    provinces.map((province) => ({
      queryKey: ["province", province.id],
      queryFn: () => fetchProvincesGeoJson(province.id),
      enabled: false,
    }))
  );

  const refetchAll = useCallback(() => {
    results.forEach((result) => result.refetch());
  }, [results]);

  return {
    results,
    refetchAll,
  };
};
