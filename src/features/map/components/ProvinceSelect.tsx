import { NormalText } from "@components/text";
import { useProvinceGeoJson } from "@features/map/api/getProvinceGeoJson";
import { useProvinces } from "@features/map/api/getProvinces";
import { LayerObject, ProvinceObject } from "@features/map/interfaces";
import { useAppDispatch, useAppSelector } from "@hooks/store";
import { setPlottedLayers } from "@redux/actions";
import { useEffect, useState } from "react";
import ReactSelect, { MultiValue } from "react-select";
let selectedProvinces: MultiValue<ProvinceObject> = [];
const colors = [
  "#967E76",
  "#D7C0AE",
  "#EEE3CB",
  "#B7C4CF",
  "#CDF0EA",
  "#ECC5FB",
  "#E80F88",
];
const provinceNames = [
  "Province 1",
  "Province 2",
  "Bagmati",
  "Gandaki",
  "Lumbini",
  "Karnali",
  "Sudurpashchim",
];
export default function ProvinceSelect() {
  const [defaultProvinceId, setDefaultProvinceId] = useState(0);
  const { data } = useProvinces();
  const {
    data: provinceData,
    refetch,
    isFetched,
  } = useProvinceGeoJson(defaultProvinceId);
  const { plottedLayers } = useAppSelector((state) => state.map);

  const dispatch = useAppDispatch();
  const provinceList = data?.provinces.map((province) => {
    return {
      ...province,
      label: province.name,
      value: province.id,
    };
  });

  useEffect(() => {
    if (defaultProvinceId) {
      refetch();
      if (isFetched && provinceData && selectedProvinces.length > 0) {
        const newProvinceLayer = {
          name: provinceNames[defaultProvinceId - 1],
          color: colors[defaultProvinceId],
          fill: true,
          fillColor: colors[defaultProvinceId],
          type: "FeatureCollection",
          features: [provinceData],
        } as LayerObject;

        const newLayers = [...plottedLayers, newProvinceLayer];

        dispatch(setPlottedLayers(newLayers));
      }
    }
  }, [provinceData, defaultProvinceId]);

  const handleProvinceChange = (provinces: MultiValue<ProvinceObject>) => {
    selectedProvinces = provinces;
    provinces.forEach((province) => {
      setDefaultProvinceId(province.id);
    });
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
