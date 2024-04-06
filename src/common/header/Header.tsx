import DragHandleRoundedIcon from "@mui/icons-material/DragHandleRounded";
import { Box, Drawer, IconButton } from "@mui/material";
import { useState } from "react";
import { useIsMobile } from "../../hooks/useResponsive";
import { useAppSelector } from "../../store/store";
import ButtonToggleTheme from "../ButtonToggleTheme";
import Logo from "../logo/Logo";
import Nav from "../nav/Nav";

export default function Header() {
   const { mode } = useAppSelector((state) => state.setting);
   const isMobile = useIsMobile();
   const [open, setOpen] = useState(false);

   const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
   };

   return (
      <>
         <Box
            sx={{
               display: `flex`,
               alignItems: `center`,
               justifyContent: `space-between`,
               padding: `8px 16px`,
               transition: `width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,

               backdropFilter: `blur(8px)`,
               borderStyle: `solid`,
               borderColor: mode === `dark` ? `rgba(204, 229, 255, 0.08)` : `#E5EAF2`,
               borderWidth: `0px 0px thin`,

               background: mode === `dark` ? `rgba(16, 20, 24, 0.8)` : `rgba(255,255,255,0.8)`,

               height: `var(--header-height)`,
               width: `100%`,
            }}
            component={`header`}
         >
            {/* LEFT */}
            {isMobile ? (
               <IconButton
                  sx={{
                     display: `inline-flex`,
                     alignItems: `center`,
                     justifyContent: `center`,
                     boxSizing: `border-box`,
                  }}
                  onClick={toggleDrawer(true)}
               >
                  <DragHandleRoundedIcon />
               </IconButton>
            ) : (
               <Box />
            )}

            {/* CENTER */}
            {isMobile && (
               <Logo
                  sx={{
                     width: `80px`,
                     filter: `drop-shadow(0px 3px 7px rgba(${
                        mode === `dark` ? "255,255,255" : "0,0,0"
                     }, 0.5))`,
                  }}
               />
            )}

            {/* RIGHT */}
            <ButtonToggleTheme />
         </Box>

         <Drawer open={open} onClose={toggleDrawer(false)}>
            <Nav />
         </Drawer>
      </>
   );
}
