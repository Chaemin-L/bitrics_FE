import { createBrowserRouter, RouteObject } from "react-router-dom";
import GlobalLayout from "@/layouts/global";
import HomePage from "@/pages/home";
import NewsPage from "@/pages/news";
import TermPage from "@/pages/term";

export const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/news",
    element: <NewsPage />,
  },
  {
    path: "/term",
    element: <TermPage />
  }
  // TODO: 이와 같은 형태로 path와 페이지 컴포넌트들을 연결
];

const router = createBrowserRouter([
  { path: "/", element: <GlobalLayout />, children: ROUTES },
]);

export default router;
