import { CustomTheme } from "@assets/theme";
import { FallbackLoader } from "@components/loader";
import { ErrorFallback } from "@features/error/components";
import { IWrapper } from "@interfaces/wrapper";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      useErrorBoundary: true,
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});
export const AppProvider = ({ children }: IWrapper) => {
  return (
    <Suspense fallback={<FallbackLoader />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThemeProvider theme={CustomTheme}>
          <CssBaseline />
          <ToastContainer />
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
