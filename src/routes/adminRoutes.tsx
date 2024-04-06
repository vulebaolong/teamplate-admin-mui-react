import NotFound from "../common/NotFound";
import Page from "../common/Page";
import { ROUTES } from "../constants/routes.contants";
import Dashboard from "../pages/dashboard/Dashboard";

export const AdminRoutes = [
   {
      path: ROUTES.ADMIN.HOME(true),
      element: (
         <Page title="Dashboard">
            <Dashboard />
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
