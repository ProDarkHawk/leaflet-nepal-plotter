import { TextProps } from "@interfaces/text";
import { Typography, TypographyProps } from "@mui/material";
import { LARGE_FONT_SIZE, MEDIUM_FONT_SIZE } from "@utils/constants/font";
const LargeText = ({
  children,
  color,
  bold,
  ...otherProps
}: TextProps & TypographyProps) => {
  return (
    <Typography
      variant="h2"
      fontWeight={bold ? "bold" : "normal"}
      fontSize={{
        mobile: MEDIUM_FONT_SIZE,
        tablet: LARGE_FONT_SIZE,
      }}
      {...otherProps}
    >
      {children}
    </Typography>
  );
};

export default LargeText;
