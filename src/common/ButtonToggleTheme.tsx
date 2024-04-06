import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import { IconButton } from "@mui/material";
import { SET_MODE } from "../store/slices/setting/setting.slice";
import { useAppDispatch, useAppSelector } from "../store/store";

export default function ButtonToggleTheme() {
   const { mode } = useAppSelector((state) => state.setting);
   const dispatch = useAppDispatch();
   
   return (
      <IconButton
         onClick={() => {
            dispatch(SET_MODE(mode === `light` ? `dark` : `light`));
         }}
      >
         {mode === `dark` ? <DarkModeOutlinedIcon /> : <LightModeIcon />}
      </IconButton>
   );
}
