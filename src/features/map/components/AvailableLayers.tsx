import { FlexBox } from "@components/box";
import { GridContainer, GridItem } from "@components/grid";
import { NormalText } from "@components/text";
import { UIButton } from "@components/ui";
import { useProvinces } from "@features/map/api/getProvinces";
import { useLayersContext } from "@features/map/hooks";
import { Card, CardActions } from "@mui/material";
import ReactSelect from "react-select";
export default function AvailableLayers() {
  const {
    selectedLayers,
    resetSelectedLayers,
    setPlottedLayers,
    resetPlottedLayers,
  } = useLayersContext();

  const { data } = useProvinces();
  const provinces = data?.provinces.map((province) => {
    return {
      ...province,
      label: province.name,
      value: province.id,
    };
  });
  return (
    <Card
      elevation={3}
      sx={{
        mx: 1,
        borderRadius: 3,
        overflow: "visible",
      }}
    >
      <FlexBox>
        <NormalText
          bold
          sx={{
            color: "white",
            maxWidth: "max-content",
            p: 1,
            backgroundColor: "primary.main",
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
        >
          Available Layers
        </NormalText>
      </FlexBox>
      <GridContainer p={2}>
        <GridItem p={1}>
          <NormalText bold>Provinces</NormalText>
          <ReactSelect
            className="react-select"
            classNamePrefix={"select"}
            isMulti
            options={provinces}
            name="provinces"
          />
        </GridItem>
      </GridContainer>
      <CardActions>
        <FlexBox
          justifyContent={"end"}
          sx={{
            p: 2,
            width: "100%",
          }}
        >
          <UIButton
            onClick={() => {
              setPlottedLayers();
            }}
            disabled={!selectedLayers.length}
            variant="contained"
          >
            Add To Map
          </UIButton>
          <UIButton
            sx={{
              ml: 1,
            }}
            color="error"
            onClick={() => {
              if (selectedLayers.length) {
                resetSelectedLayers();
                resetPlottedLayers();
              }
            }}
            disabled={!selectedLayers.length}
            variant="contained"
          >
            Reset Map
          </UIButton>
        </FlexBox>
      </CardActions>
    </Card>
  );
}
