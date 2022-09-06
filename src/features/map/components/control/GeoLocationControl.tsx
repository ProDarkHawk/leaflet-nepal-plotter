import { useGeolocation } from "@features/map/hooks";
import { IControlPosition } from "@features/map/interfaces";
import { MyLocation } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { MouseEvent } from "react";
import Control from "react-leaflet-custom-control";
const GeoLocationControl = ({ position }: IControlPosition) => {
  const { locate, locating } = useGeolocation();
  return (
    <Control position={position}>
      <Tooltip title="Locate Me" placement="top">
        <IconButton
          size="small"
          className="leaflet-bar"
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            locate();
          }}
          sx={{
            color: "primary.main",
            backgroundColor: "white",
            ":hover": {
              backgroundColor: "white",
            },
          }}
        >
          <MyLocation className={locating ? "rotating" : ""} />
        </IconButton>
      </Tooltip>
    </Control>
  );
};

export default GeoLocationControl;
