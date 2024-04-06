import { ReactNode, useMemo } from "react";
import { useAppSelector } from "../../store/store";
import { ThemeProvider as ThemeMui, createTheme } from "@mui/material";

export default function ThemeProvider({ children }: { children: ReactNode }) {
   const { mode } = useAppSelector((state) => state.setting);

   const theme = useMemo(
      () =>
         createTheme({
            palette: {
               mode: mode,
               background: {
                  default: mode === `dark` ? `rgb(16, 20, 24)` : `rgb(255, 255, 255)`,
               },
            },
            components: {
               MuiContainer: {
                  defaultProps: {
                     maxWidth: "lg",
                  },
               },
               MuiButton: {
                  styleOverrides: {
                     root: {
                        borderRadius: "10px",
                        textTransform: `none`,
                     },
                  },
               },
               MuiOutlinedInput: {
                  styleOverrides: {
                     root: {
                        borderRadius: "10px",
                     },
                  },
               },
               MuiTextField: {
                  styleOverrides: {
                     root: {
                        height: `80px`,
                     },
                  },
               },
               MuiPaper: {
                  styleOverrides: {
                     root: {
                        backgroundImage: `none`,
                        background:
                           mode === `dark` ? `rgba(16, 20, 24, 0.8)` : `rgba(255,255,255,0.8)`,

                        backdropFilter: `blur(8px)`,
                     },
                  },
               },
               MuiListItemButton: {
                  styleOverrides: {
                     root: {
                        // paddingLeft: `30px`,
                        // paddingRight: `30px`,
                     },
                  },
               },
            },
         }),
      [mode]
   );

   return <ThemeMui theme={theme}>{children}</ThemeMui>;
}
