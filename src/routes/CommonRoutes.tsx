import DefaultLayout from "@layouts/DefaultLayout";
import { lazy } from "react";
import { Outlet } from "react-router-dom";

const Home = lazy(() => import("@pages/Home"));
const NotFound = lazy(() => import("@pages/NotFound"));

const CommonRouteApp= () => {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
};

export const CommonRoutes = [
  {
    path: "/",
    element: <CommonRouteApp />,
    children: [
      { path: "/", element: <Home /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];
