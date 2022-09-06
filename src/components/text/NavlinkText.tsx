import { TextProps } from "@interfaces/text";
import { Typography, TypographyProps } from "@mui/material";
import { MEDIUM_FONT_SIZE } from "@utils/constants/font";

interface CustomNavlinkTextProps extends TextProps, TypographyProps {
  secondary?: boolean;
}

const NavlinkText = ({
  children,
  color,
  bold,
  secondary,
  ...otherProps
}: CustomNavlinkTextProps) => {
  return (
    <Typography
      pt={0.5}
      pl={1}
      component="span"
      fontWeight={bold ? "bold" : "normal"}
      fontSize={MEDIUM_FONT_SIZE}
      display={{
        mobile: secondary ? "inline" : "none",
        tablet: "inline",
      }}
      {...otherProps}
    >
      {children}
    </Typography>
  );
};

export default NavlinkText;
