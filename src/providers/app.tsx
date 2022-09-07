import { FallbackLoader } from "@components/loader";
import { ErrorFallback } from "@features/error/components";
import { IWrapper } from "@interfaces/wrapper";
import { LayersProvider } from "@providers/layers";
import { MapContextProvider } from "@providers/map";
import { ReactQueryProvider } from "@providers/react-query";
import { CustomThemeProvider } from "@providers/theme";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AppProvider = ({ children }: IWrapper) => {
  return (
    <Suspense fallback={<FallbackLoader />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <CustomThemeProvider>
          <ToastContainer />
          <ReactQueryProvider>
            <MapContextProvider>
              <LayersProvider>{children}</LayersProvider>
            </MapContextProvider>
          </ReactQueryProvider>
        </CustomThemeProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
