import { createBrowserRouter, RouteObject } from "react-router-dom";
import GlobalLayout from "@/layouts/global";
import HomePage from "@/pages/home";
import NewsPage from "@/pages/news";
import TermPage from "@/pages/term";
import MapPage from "@/pages/map";
import AssetPage from "@/pages/asset";
import Splash from "@/pages/splash";

type CustomRouteObject = {
  label?: string;
  show?: boolean; // show in nav
} & RouteObject;

export const ROUTES: CustomRouteObject[] = [
  {
    path: "/",
    element: <Splash />,
    label: "스플래시",
    show: false,
  },
  {
    path: "/home",
    element: <HomePage />,
    label: "홈",
    show: true,
  },
  {
    path: "/news",
    element: <NewsPage />,
    label: "뉴스",
    show: true,
  },
  {
    path: "/term",
    element: <TermPage />,
    label: "용어",
    show: true,
  },

  {
    path: "/asset",
    element: <AssetPage />,
    label: "자산",
    show: true,
  },
  {
    path: "/map",
    element: <MapPage />,
    show: true,
  },
];

const router = createBrowserRouter([
  { path: "/", element: <GlobalLayout />, children: ROUTES },
]);

export default router;
