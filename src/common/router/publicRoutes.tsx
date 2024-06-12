import { Blog } from '../../features/blog/Blog';
import { Landing } from '../../features/landing/Landing';
import { Outlet, RouteObject } from "react-router-dom"
import { AppLayout } from '../layouts/AppLayout';
import { Map } from '../../features/map/Map';
import { Album } from '../../features/landing/gallery/album/Album';

export const publicRouters: RouteObject[] = ([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/address",
    element: <Map />
  },
  {
    path: "/albums/:id",
    element: <Album />
  },
])

export const PublicRoutes = () => {
  
  return <AppLayout><Outlet /></AppLayout>
}