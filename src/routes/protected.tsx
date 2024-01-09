import { lazyLoad } from "@utils/lazyLoad";

import Root from "@layouts/Root";

const RootPage = lazyLoad(() => import("@pages/RootPage"), "default");

export const protectedRoutes = [
  {
    path: "/",
    element: <Root />,
    // Requires <Outlet />
    children: [
      {
        index: true,
        element: RootPage,
      },
    ],
  },
];
