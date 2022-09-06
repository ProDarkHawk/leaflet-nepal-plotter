declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    lmobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const breakpoints = {
  values: {
    mobile: 0,
    lmobile: 425,
    tablet: 768,
    laptop: 1024,
    desktop: 1440,
  },
};

export default breakpoints;
