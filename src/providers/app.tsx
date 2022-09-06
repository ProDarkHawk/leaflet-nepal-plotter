import { FallbackLoader } from "@components/loader";
import { ErrorFallback } from "@features/error/components";
import { IWrapper } from "@interfaces/wrapper";
import { CustomThemeProvider } from "@providers/theme";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AppProvider = ({ children }: IWrapper) => {
  return (
    <Suspense fallback={<FallbackLoader />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <CustomThemeProvider>
          <ToastContainer />
          <Router>{children}</Router>
        </CustomThemeProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
