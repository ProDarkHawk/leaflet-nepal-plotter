import { useFullscreen } from "@features/map/hooks";
import { IControlPosition } from "@features/map/interfaces";
import { CloseFullscreen, Fullscreen } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import Control from "react-leaflet-custom-control";

const FullscreenControl = ({ position }: IControlPosition) => {
  const { isFullscreen, toggleFullscreen } = useFullscreen(
    "leaflet-plotter-container"
  );
  return (
    <Control position={position}>
      <Tooltip
        title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        placement="top"
      >
        <IconButton
          disableRipple
          size="small"
          className="leaflet-bar"
          onClick={toggleFullscreen}
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
