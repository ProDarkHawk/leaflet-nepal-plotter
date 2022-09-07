import { IWrapper } from "@interfaces/wrapper";
import { QueryClient, QueryClientProvider } from "react-query";
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

export const ReactQueryProvider = ({ children }: IWrapper) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
