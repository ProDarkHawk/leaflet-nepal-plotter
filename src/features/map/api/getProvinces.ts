import { ProvinceObject } from "@features/map/interfaces";
import Axios from "@lib/axios";
import { useQuery } from "react-query";

interface ProvincesObj {
  provinces: ProvinceObject[];
}

const fetchProvinces = (): Promise<ProvincesObj> =>
  Axios.get("/province-details.json");

export const useProvinces = () => {
  return useQuery(["provinces"], fetchProvinces);
};
