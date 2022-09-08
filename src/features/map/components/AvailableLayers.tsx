import { FlexBox } from "@components/box";
import { GridContainer, GridItem } from "@components/grid";
import { NormalText } from "@components/text";
import { LayersControlButtons, ProvinceSelect } from "@features/map/components";
import { Card } from "@mui/material";
export default function AvailableLayers() {
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
        <GridItem tablet={12} laptop={6} p={1}>
          <ProvinceSelect />
        </GridItem>
      </GridContainer>
      <LayersControlButtons />
    </Card>
  );
}
