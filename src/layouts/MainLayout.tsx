import { Button, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../common/header/Header";
import { useAppDispatch, useAppSelector } from "../store/store";
import { SET_MODE } from "../store/slices/setting/setting.slice";
import Nav from "../common/nav/Nav";

export default function MainLayout() {
   const { mode } = useAppSelector((state) => state.setting);
   const dispatch = useAppDispatch();
   return (
      <Stack
         sx={{
            width: `100vw`,
            height: `100vh`,
            position: `relative`,
            flexDirection: `row`,
         }}
      >
         <Nav />
         <Stack
            sx={{
               width: `100%`,
               height: `100%`,
            }}
         >
            <Header />
            <Outlet />
         </Stack>

         <Button
            sx={{
               position: `fixed`,
               bottom: `0`,
               right: `0`,
            }}
            onClick={() => {
               dispatch(SET_MODE(mode === `light` ? `dark` : `light`));
            }}
            variant="contained"
            size="large"
         >
            Toggle mode
         </Button>
      </Stack>
   );
}
