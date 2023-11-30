import { lazyLoad } from "@utils/lazyLoad";

const Login = lazyLoad(() => import("@pages/Login"), "default");
const Register = lazyLoad(() => import("@pages/Register"), "default");
const ForgotPassword = lazyLoad(
  () => import("@pages/ForgotPassword"),
  "default"
);
const ResetPassword = lazyLoad(() => import("@pages/ResetPassword"), "default");

export const publicRoutes = [
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/register",
    element: Register,
  },
  {
    path: "/forgot-password",
    element: ForgotPassword,
  },
  {
    path: "/reset-password/:token",
    element: ResetPassword,
  },
];
