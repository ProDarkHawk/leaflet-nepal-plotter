import { FlexBox } from "@components/box";
import { GridContainer, GridItem } from "@components/grid";
import { NormalText } from "@components/text";
import { UICheckbox } from "@components/ui";
import { Card } from "@mui/material";
import { useState } from "react";

const Layers = ["Layer1", "Layer2", "Layer3", "Layer4", "Layer5", "Layer6"];

export default function AvailableLayers() {
  const [selectedLayers, setSelectedLayers] = useState<typeof Layers>([]);

  return (
    <Card
      elevation={3}
      sx={{
        mx: 1,
        borderRadius: 3,
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
          }}
        >
          Available Layers
        </NormalText>
      </FlexBox>
      <GridContainer p={2}>
        {Layers.map((Layer, index) => (
          <GridItem mobile={6} key={index}>
            <UICheckbox
              checked={selectedLayers.includes(Layer)}
              item={Layer}
              onSelectItem={() => {
                if (!selectedLayers.includes(Layer)) {
                  setSelectedLayers((prevLayers) => [...prevLayers, Layer]);
                } else {
                  setSelectedLayers(
                    selectedLayers.filter((cat) => Layer !== cat)
                  );
                }
              }}
            />
          </GridItem>
        ))}
      </GridContainer>
    </Card>
  );
}
