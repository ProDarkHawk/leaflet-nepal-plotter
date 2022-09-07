import { DefaultLayout } from "@layouts/index";
import { AppProvider } from "@providers/app";
import { lazy } from "react";

const Home = lazy(() => import("@features/map/components/Home"));

function App() {
  return (
    <AppProvider>
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    </AppProvider>
  );
}

export default App;
