import { lazyLoad } from "@utils/lazyLoad";

const NotFoundPage = lazyLoad(() => import("@pages/NotFoundPage"), "default");

export const publicRoutes = [
  {
    path: "*",
    element: NotFoundPage,
  },
];
