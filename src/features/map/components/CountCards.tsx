import { FlexBox } from "@components/box";
import { GridContainer, GridItem } from "@components/grid";
import { NormalText } from "@components/text";
import { UIButton } from "@components/ui";
import { Layers } from "@mui/icons-material";
import { Card } from "@mui/material";

export default function CountCards() {
  const CountCardList = [
    {
      text: "Layers",
      total: 0,
      icon: <Layers />,
    },
    {
      text: "Plotted Layers",
      total: 0,
      icon: <Layers />,
    },
  ];
  return (
    <GridContainer>
      {CountCardList.map(({ text, total, icon }, index) => (
        <GridItem px={1} py={2} position="relative" key={index}>
          <UIButton
            as="icon"
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
          </UIButton>
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
