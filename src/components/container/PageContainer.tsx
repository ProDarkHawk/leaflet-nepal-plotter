import { Box, BoxProps } from "@mui/material";
import { MEDIUM_PADDING, SMALL_PADDING } from "@utils/constants";
const PageContainer = ({ children, ...otherProps }: BoxProps) => {
  return (
    <Box
      paddingX={{
        mobile: SMALL_PADDING,
        laptop: MEDIUM_PADDING,
      }}
      paddingY={4}
      component={"main"}
      {...otherProps}
    >
      {children}
    </Box>
  );
};

export default PageContainer;
