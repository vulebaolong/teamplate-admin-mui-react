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
                  defaultProps: {
                     disableElevation: true,
                  },
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
                        "transition": `none`,
                        "borderRadius": `6px`,
                        "&.Mui-selected": {
                           "backgroundColor": `${mode === `dark` ? `rgb(31, 38, 46)` : `#EBF5FF`}`,
                           "color": `${mode === `dark` ? `rgb(102, 178, 255)` : `#006BD6`}`,
                           "&:hover": {
                              backgroundColor: `${
                                 mode === `dark` ? `rgb(47, 58, 70)` : `rgba(204, 229, 255, 0.8)`
                              }`,
                              color: `${mode === `dark` ? `rgb(153, 204, 255)` : `#0061C2`}`,
                           },
                        },
                     },
                  },
               },
               MuiIconButton: {
                  defaultProps: {
                     disableTouchRipple: true,
                  },
                  styleOverrides: {
                     root: {
                        color: `rgb(102, 178, 255)`,
                        borderRadius: `12px`,
                        border: `1px solid ${mode === `dark` ? `rgb(31, 38, 46)` : `#DAE2ED`}`,
                        boxShadow: `${
                           mode === `dark`
                              ? `rgb(16, 20, 24) 0px 1px 1px inset, rgb(11, 13, 14) 0px 1px 0.5px`
                              : `inset 0 1px 2px #F3F6F9,0 1px 0.5px rgba(229, 234, 242, 0.6)`
                        }`,
                     },
                  },
               },
               MuiSvgIcon: {
                  styleOverrides: {
                     root: {
                        fontSize: `18px`,
                     },
                  },
               },
            },
         }),
      [mode]
   );

   return <ThemeMui theme={theme}>{children}</ThemeMui>;
}
