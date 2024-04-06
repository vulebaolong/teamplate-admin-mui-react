import { Box, BoxProps, CircularProgress } from "@mui/material";
import { getAccessToken } from "../api/auth"; 
import { ReactNode, forwardRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { getInfomationMID } from "../store/slices/user/user.slice"; 
import { useAppDispatch } from "../store/store"; 
import PleaseLogin from "./PleaseLogin"; 
import { ROUTES } from "../constants/routes.contants";

interface PageProps extends BoxProps {
   children: ReactNode;
   title?: string;
   meta?: ReactNode;
   protect?: boolean;
}

const Page = forwardRef<HTMLDivElement, PageProps>(
   ({ children, title = "", meta, protect = false, ...other }, ref) => {
      const { id } = useParams();
      const location = useLocation();
      const [isLogin, setIsLogin] = useState(false);
      const [isLoading, setIsLoading] = useState(true);
      const dispatch = useAppDispatch();

      useEffect(() => {
         if (protect) {
            setIsLoading(true);
            dispatch(
               getInfomationMID(
                  () => {
                     setIsLogin(true);
                  },
                  () => {
                     setIsLogin(false);
                  },
                  () => {
                     setIsLoading(false);
                  }
               )
            );
         }
      }, [location]);

      const rederContent = () => {
         if (location.pathname.slice(1) === ROUTES.AUTH.LOGIN()) {
            if (getAccessToken()) {
               return <Navigate to={`/${ROUTES.ADMIN.HOME()}`} replace />;
            }
         }

         if (!protect) return children;

         if (isLoading)
            return (
               <Box sx={{ width: "fit-content", margin: "100px auto 0" }}>
                  <CircularProgress size={50} sx={{ color: "var(--color-1)" }} />
               </Box>
            );
         if (isLogin) return children;

         return <PleaseLogin />;
      };

      return (
         <>
            <Helmet>
               <title>{`Green Planet | ${title} ${id ? "- " + id : ""}`}</title>
               {meta}
            </Helmet>

            {/* <Box
               sx={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
               }}
               ref={ref}
               {...other}
            > */}
               {rederContent()}
            {/* </Box> */}
         </>
      );
   }
);

export default Page;
