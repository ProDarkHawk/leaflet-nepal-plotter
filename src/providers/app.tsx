import { CustomTheme } from "@assets/theme";
import { FallbackLoader } from "@components/loader";
import { ErrorFallback } from "@features/error/components";
import { IWrapper } from "@interfaces/wrapper";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { store } from "@redux/store";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError(error, query) {
      console.log(error);
    },
  }),
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
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </Provider>
        </ThemeProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
