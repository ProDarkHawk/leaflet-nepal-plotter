import { Grid, GridProps } from "@mui/material";
const GridContainer = ({ children, ...otherProps }: GridProps) => {
  return (
    <Grid container {...otherProps}>
      {children}
    </Grid>
  );
};
export default GridContainer;
