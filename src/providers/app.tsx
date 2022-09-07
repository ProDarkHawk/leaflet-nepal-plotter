import { FallbackLoader } from "@components/loader";
import { ErrorFallback } from "@features/error/components";
import { IWrapper } from "@interfaces/wrapper";
import { LayersProvider } from "@providers/layers";
import { MapContextProvider } from "@providers/map";
import { CustomThemeProvider } from "@providers/theme";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";
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
        <CustomThemeProvider>
          <ToastContainer />
          <QueryClientProvider client={queryClient}>
            <MapContextProvider>
              <LayersProvider>
                <Router>{children}</Router>
              </LayersProvider>
            </MapContextProvider>
          </QueryClientProvider>
        </CustomThemeProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
