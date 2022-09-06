import { TextProps } from "@interfaces/text";
import { Typography, TypographyProps } from "@mui/material";
import { LARGE_FONT_SIZE, XLARGE_FONT_SIZE } from "@utils/constants/font";
const XLargeText = ({
  children,
  color,
  bold,
  ...otherProps
}: TextProps & TypographyProps) => {
  return (
    <Typography
      variant="h1"
      fontWeight={bold ? "bold" : "normal"}
      fontSize={{
        mobile: LARGE_FONT_SIZE,
        laptop: XLARGE_FONT_SIZE,
      }}
      {...otherProps}
    >
      {children}
    </Typography>
  );
};

export default XLargeText;
