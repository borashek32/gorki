import { createHashRouter } from "react-router-dom";
import { PublicRoutes, publicRouters } from "./publicRoutes";

export const router = createHashRouter([
  {
    element: <PublicRoutes />,
    children: publicRouters,
  }
])