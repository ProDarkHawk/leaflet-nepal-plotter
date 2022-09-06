import { useFullscreen } from "@features/map/hooks";
import { ICustomControl } from "@features/map/interfaces";
import { CloseFullscreen, Fullscreen } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { MouseEvent } from "react";
import Control from "react-leaflet-custom-control";
const FullscreenControl = ({ prepend, position }: ICustomControl) => {
  const { isFullscreen, toggleFullscreen } = useFullscreen(
    "leaflet-plotter-container"
  );
  return (
    <Control prepend={prepend} position={position}>
      <Tooltip
        title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        placement="left"
      >
        <IconButton
          disableRipple
          size="small"
          className="leaflet-bar"
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            toggleFullscreen();
          }}
          sx={{
            borderRadius: 1,
            color: "primary.main",
            backgroundColor: "white",
            ":hover": {
              backgroundColor: "white",
            },
          }}
        >
          {isFullscreen ? <CloseFullscreen /> : <Fullscreen />}
        </IconButton>
      </Tooltip>
    </Control>
  );
};

export default FullscreenControl;
