import { RouteObject, useRoutes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import { AuthRoutes } from "./authRoutes";
import { UserRoutes } from "./userRoutes";

const Router = () => {
   const routes: RouteObject[] = [
      {
         path: "*",
         element: <MainLayout />,
         children: UserRoutes,
      },
      {
         path: "auth",
         element: <AuthLayout />,
         children: AuthRoutes,
      },
   ];
   return useRoutes(routes);
};

export default Router;
