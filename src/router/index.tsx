import { createBrowserRouter, RouteObject } from "react-router-dom";
import GlobalLayout from "@/layouts/global";
import LandingPage from "@/pages/Landing";

export const ROUTES: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />,
  },
  // TODO: 이와 같은 형태로 path와 페이지 컴포넌트들을 연결
];

const router = createBrowserRouter([
  { path: "/", element: <GlobalLayout />, children: ROUTES },
]);

export default router;
