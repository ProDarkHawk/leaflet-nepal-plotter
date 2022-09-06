import {
  DARK_MAIN_COLOR,
  LIGHT_MAIN_COLOR,
  PRIMARY_MAIN_COLOR,
} from "@utils/constants";
import { SECONDARY_MAIN_COLOR } from "./../../utils/constants/color";

declare module "@mui/material/styles" {
  interface Palette {
    dark: Palette["primary"];
    light: Palette["primary"];
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    dark?: PaletteOptions["primary"];
    light?: PaletteOptions["primary"];
  }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    dark: true;
    light: true;
  }
}

// Update the Icon Button's color prop options
declare module "@mui/material/IconButton" {
  interface IconButtonPropsColorOverrides {
    dark: true;
    light: true;
  }
}

const palette = {
  primary: {
    main: PRIMARY_MAIN_COLOR,
    contrastText: LIGHT_MAIN_COLOR,
  },
  secondary: {
    main: SECONDARY_MAIN_COLOR,
    contrastText: LIGHT_MAIN_COLOR,
  },
  dark: {
    main: DARK_MAIN_COLOR,
    contrastText: LIGHT_MAIN_COLOR,
  },
  light: {
    main: LIGHT_MAIN_COLOR,
    contrastText: DARK_MAIN_COLOR,
  },
  contrastThreshold: 3,
  tonalOffset: 0.1,
};
export default palette;
