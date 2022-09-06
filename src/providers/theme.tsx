import { CustomTheme } from "@assets/theme";
import { IWrapper } from "@interfaces/wrapper";
import { CssBaseline, ThemeProvider } from "@mui/material";

export const CustomThemeProvider = ({ children }: IWrapper) => {
  return (
    <ThemeProvider theme={CustomTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
