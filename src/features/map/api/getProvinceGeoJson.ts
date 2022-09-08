import Axios from "@lib/axios";
import type { GeoJsonObject } from "geojson";
import { useQuery } from "react-query";

const fetchProvinceGeoJson = (provinceId: number): Promise<GeoJsonObject> =>
  Axios.get(`/Province${provinceId}/Province-${provinceId}.geojson`);

// export const useProvincesGeoJson = (provinces: MultiValue<ProvinceObject>) => {
//   const results = useQueries(
//     provinces.map((province) => ({
//       queryKey: ["province", province.id],
//       queryFn: () => fetchProvincesGeoJson(province.id),
//       enabled: false,
//     }))
//   );

//   const refetchAll = useCallback(() => {
//     results.forEach((result) => result.refetch());
//   }, [results]);

//   return {
//     results,
//     refetchAll,
//   };
// };

export const useProvinceGeoJson = (provinceId: number) => {
  return useQuery(
    ["province", provinceId],
    () => fetchProvinceGeoJson(provinceId),
    {
      enabled: false,
    }
  );
};
