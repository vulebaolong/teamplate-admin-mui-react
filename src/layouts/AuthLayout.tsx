import { Button, Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { SET_MODE } from "../store/slices/setting/setting.slice";

export default function AuthLayout() {
   const { mode } = useAppSelector((state) => state.setting);
   const dispatch = useAppDispatch();
   return (
      <Stack
         sx={{
            width: `100vw`,
            height: `100vh`,
            alignItems: `center`,
            justifyContent: `center`,
            position: `relative`,
         }}
      >
         <Outlet />
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
