import { PageContainer } from "@components/container";
import { GridContainer, GridItem } from "@components/grid";
import { AvailableLayers, CountCards } from "@features/home/components";
import { Map } from "@features/map/components";
import { DoubleArrow as DoubleArrowIcon } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
export default function Home() {
  const [showLayerOptions, setShowLayerOptions] = useState(true);
  return (
    <>
      <Map />
      <PageContainer
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: {
            mobile: "100%",
            tablet: showLayerOptions ? "40%" : 0,
          },
          zIndex: 999,
        }}
      >
        <Tooltip title="Toggle Layer Options" placement="right">
          <IconButton
            sx={{
              backgroundColor: "primary.main",
              ":hover": {
                backgroundColor: "primary.main",
              },
            }}
            color="light"
            onClick={() => {
              setShowLayerOptions(!showLayerOptions);
            }}
          >
            <DoubleArrowIcon
              sx={{
                transition: "all .5s ease-in-out",
                transform: showLayerOptions ? "rotate(-180deg)" : "rotate(0)",
              }}
            />
          </IconButton>
        </Tooltip>
        <GridContainer
          sx={{
            mt: 1.5,
            transition: "all .7s ease-in-out",
            transform: showLayerOptions
              ? "translateX(0)"
              : "translateX(-1000px)",
          }}
        >
          <GridItem mobile={12} tablet={12}>
            <CountCards />
            <AvailableLayers />
          </GridItem>
        </GridContainer>
      </PageContainer>
    </>
  );
}
