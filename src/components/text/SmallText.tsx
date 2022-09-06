import { TextProps } from "@interfaces/text";
import { Typography, TypographyProps } from "@mui/material";
import { SMALL_FONT_SIZE } from "@utils/constants/font";
const SmallText = ({
  children,
  color,
  bold,
  ...otherProps
}: TextProps & TypographyProps) => {
  return (
    <Typography
      component={"span"}
      color={color || "light.grey"}
      fontWeight={bold ? "bold" : "normal"}
      fontSize={SMALL_FONT_SIZE}
      {...otherProps}
    >
      {children}
    </Typography>
  );
};

export default SmallText;
