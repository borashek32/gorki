import { createBrowserRouter } from "react-router-dom";
import { PublicRoutes, publicRouters } from "./publicRoutes";

export const router = createBrowserRouter([
  {
    element: <PublicRoutes />,
    children: publicRouters,
  }
])