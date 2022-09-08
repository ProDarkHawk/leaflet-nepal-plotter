import { FlexBox } from "@components/box";
import { GridContainer, GridItem } from "@components/grid";
import { NormalText } from "@components/text";
import { useAppSelector } from "@hooks/store";
import { Layers } from "@mui/icons-material";
import { Card, IconButton } from "@mui/material";

export default function CountCards() {
  const { plottedLayers } = useAppSelector((state) => state.map);
  const CountCardList = [
    {
      text: "Plotted Layers",
      total: plottedLayers.length,
      icon: <Layers />,
    },
  ];
  return (
    <GridContainer>
      {CountCardList.map(({ text, total, icon }, index) => (
        <GridItem
          px={1}
          py={2}
          mobile={12}
          tablet={12}
          position="relative"
          key={index}
        >
          <IconButton
            sx={{
              position: "absolute",
              left: 30,
              top: -5,
              backgroundColor: "primary.main",
              color: "white",
              zIndex: 1,
            }}
          >
            {icon}
          </IconButton>
          <Card
            elevation={3}
            sx={{
              p: 2,
              py: 4,
              borderRadius: 3,
              position: "relative",
            }}
          >
            <FlexBox>
              <NormalText bold>Total {text}</NormalText>
              <NormalText bold>{total}</NormalText>
            </FlexBox>
          </Card>
        </GridItem>
      ))}
    </GridContainer>
  );
}
