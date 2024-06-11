import { Blog } from '../../features/blog/Blog';
import { Landing } from '../../features/landing/Landing';
import { Outlet, RouteObject } from "react-router-dom"
import { AppLayout } from '../layouts/AppLayout';

export const publicRouters: RouteObject[] = ([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/blog",
    element: <Blog />
  },
])

export const PublicRoutes = () => {
  
  return <AppLayout><Outlet /></AppLayout>
}