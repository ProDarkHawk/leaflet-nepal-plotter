import { CommonRoutes } from "@routes/CommonRoutes";
import { useRoutes } from "react-router-dom";

export const AppRoutes = () => {
  const element = useRoutes([...CommonRoutes]);

  return <>{element}</>;
};
