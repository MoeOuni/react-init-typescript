import { lazyLoad } from "@utils/lazyLoad";

import Root from "@layouts/Root";

const Home = lazyLoad(() => import("@pages/Home"), "default");

export const protectedRoutes = [
  {
    path: "/",
    element: <Root />,
    // Requires <Outlet />
    children: [
      {
        index: true,
        // path: '/home',
        element: Home,
      },
    ],
  },
];
