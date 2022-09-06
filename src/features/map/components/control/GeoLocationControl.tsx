import { useGeolocation } from "@features/map/hooks";
import { ICustomControl } from "@features/map/interfaces";
import { LocationSearching, MyLocation } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { MouseEvent } from "react";
import Control from "react-leaflet-custom-control";
const GeoLocationControl = ({ position }: ICustomControl) => {
  const { locate, locating, geoLocationGranted } = useGeolocation();
  return (
    <Control position={position}>
      <Tooltip title="Locate Me" placement="left">
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
          {geoLocationGranted ? (
            <MyLocation />
          ) : (
            <LocationSearching className={locating ? "rotating" : ""} />
          )}
        </IconButton>
      </Tooltip>
    </Control>
  );
};

export default GeoLocationControl;
