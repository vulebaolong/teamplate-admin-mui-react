import NotFound from "../common/NotFound";
import Page from "../common/Page";
import { ROUTES } from "../constants/routes.contants";
import Login from "../pages/auth/Login";

export const AuthRoutes = [
   {
      path: ROUTES.AUTH.LOGIN(true),
      element: (
         <Page title="Login">
            <Login />
         </Page>
      ),
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
