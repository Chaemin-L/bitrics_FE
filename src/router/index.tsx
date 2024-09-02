import { createBrowserRouter, RouteObject } from "react-router-dom";
import GlobalLayout from "@/layouts/global";
import HomePage from "@/pages/home";
import NewsPage from "@/pages/news";
// import TermPage from "@/pages/term";

type CustomRouteObject = {
  label?: string;
  show?: boolean; // show in nav
} & RouteObject;

export const ROUTES: CustomRouteObject[] = [
  {
    path: "/",
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
    element: <NewsPage />,
    label: "용어",
    show: true,
  },

  {
    path: "/asset",
    element: <NewsPage />,
    label: "자산",
    show: true,
  },
  {
    path: "/map",
    element: <NewsPage />,
    show: false,
  },
];

const router = createBrowserRouter([
  { path: "/", element: <GlobalLayout />, children: ROUTES },
]);

export default router;
