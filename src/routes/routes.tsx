import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import NotFound from "../common/NotFound";
import Page from "../common/Page";
import { ROUTES } from "../constants/routes.contants";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import { AdminRoutes } from "./adminRoutes";
import { AuthRoutes } from "./authRoutes";

const Router = () => {
   const routes: RouteObject[] = [
      {
         path: "",
         element: <Navigate to={ROUTES.AUTH.LOGIN()} replace />,
      },
      {
         path: ROUTES.ADMIN.base,
         element: <MainLayout />,
         children: AdminRoutes,
      },
      {
         path: ROUTES.AUTH.base,
         element: <AuthLayout />,
         children: AuthRoutes,
      },
      {
         path: "*",
         element: (
            <Page title="Not Found">
               <NotFound />
            </Page>
         ),
      },
   ];
   return useRoutes(routes);
};

export default Router;
