import { Provider as ProviderRedux } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ReactNode, useMemo } from "react";
import { store, useAppSelector } from "../../store/store";
import { CssBaseline, createTheme, useMediaQuery } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../../style/style.css";
import "../../style/animation.css";
import ThemeProvider from "./ThemeProvider";

export default function Provider({ children }: { children: ReactNode }) {
   return (
      <ProviderRedux store={store}>
         <BrowserRouter>
            <HelmetProvider>
               <ThemeProvider>
                  {children}
                  <CssBaseline />
                  <ToastContainer
                     position="bottom-right"
                     autoClose={5000}
                     hideProgressBar
                     newestOnTop={false}
                     closeOnClick
                     rtl={false}
                     pauseOnFocusLoss
                     draggable={false}
                     pauseOnHover
                  />
               </ThemeProvider>
            </HelmetProvider>
         </BrowserRouter>
      </ProviderRedux>
   );
}
