import { Box, BoxProps } from "@mui/material";
const FlexBox = ({ children, ...otherProps }: BoxProps) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      {...otherProps}
    >
      {children}
    </Box>
  );
};

export default FlexBox;
