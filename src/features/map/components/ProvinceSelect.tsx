import { NormalText } from "@components/text";
import { useProvinces } from "@features/map/api/getProvinces";
import { useProvincesGeoJson } from "@features/map/api/getProvincesGeoJson";
import { LayerObject, ProvinceObject } from "@features/map/interfaces";
import { useMemo } from "react";
import ReactSelect, { MultiValue } from "react-select";
let provinces: MultiValue<ProvinceObject> = [];
let provinceLayers: LayerObject[] = [];

export default function ProvinceSelect() {
  const { data } = useProvinces();
  const provinceList = data?.provinces.map((province) => {
    return {
      ...province,
      label: province.name,
      value: province.id,
    };
  });

  const { results, refetchAll } = useProvincesGeoJson(provinces);

  useMemo(() => {
    results.map((result, index) => {
      const newLayer = {
        name: provinces[index].name,
        type: "FeatureCollection",
        features: [result.data],
      } as LayerObject;

      provinceLayers.push(newLayer);
      return result;
    });
  }, [results]);

  const handleProvinceChange = (
    selectedProvinces: MultiValue<ProvinceObject>
  ) => {
    provinces = selectedProvinces;
    refetchAll();
  };

  return (
    <>
      <NormalText bold>Provinces</NormalText>
      <ReactSelect
        className="react-select"
        classNamePrefix={"select"}
        isMulti
        isSearchable
        onChange={(provinces) => handleProvinceChange(provinces)}
        options={provinceList}
        name="provinces"
      />
    </>
  );
}
