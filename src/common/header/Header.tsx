import { Box } from "@mui/material";
import { useAppSelector } from "../../store/store";

export default function Header() {
   const { mode } = useAppSelector((state) => state.setting);

   return (
      <Box
         sx={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
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
         Header
      </Box>
   );
}
