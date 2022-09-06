import { TextProps } from "@interfaces/text";
import { Typography, TypographyProps } from "@mui/material";
const ErrorText = ({
  children,
  color,
  bold,
  ...other
}: TextProps & TypographyProps) => {
  return (
    <Typography
      component={"span"}
      color={"error"}
      fontSize="0.75rem"
      {...other}
    >
      {children}
    </Typography>
  );
};

export default ErrorText;
