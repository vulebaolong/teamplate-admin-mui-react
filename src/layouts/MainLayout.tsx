import { Box, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../common/header/Header";
import Nav from "../common/nav/Nav";
import { useIsMobile } from "../hooks/useResponsive";

export default function MainLayout() {
   const isMobile = useIsMobile();

   return (
      <Stack
         sx={{
            width: `100vw`,
            height: `100vh`,
            position: `relative`,
            flexDirection: `row`,
         }}
      >
         {!isMobile && <Nav />}
         <Stack
            sx={{
               width: `100%`,
               height: `100%`,
            }}
         >
            <Header />
            <Box
               sx={{
                  flex: `1`,
                  padding: `20px`,
                  overflowY: `auto`,
               }}
            >
               <Outlet />
            </Box>
         </Stack>

        
      </Stack>
   );
}
