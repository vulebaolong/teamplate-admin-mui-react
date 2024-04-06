import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Provider as ProviderRedux } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { store } from "../../store/store";
import "../../style/animation.css";
import "../../style/style.css";
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
