import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import {
   Divider,
   List,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Paper,
   Stack,
} from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import { useAppSelector } from "../../store/store";
import Logo from "../logo/Logo";
import ListItemNav from "./ListItemNav";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../../constants/routes.contants";
import { navigate } from "../../helpers/navigate.helpler";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';

const items = [
   {
      title: `user`,
      path: `user`,
      childrens: [
         {
            title: `Fund`,
            path: `admin/user/fund`,
            childrens: [
               {
                  title: `List`,
                  path: `admin/user/fund/list`,
                  childrens: [],
               },
               {
                  title: `Deposit`,
                  path: `admin/user/fund/deposit`,
                  childrens: [],
               },
               {
                  title: `Withdraws`,
                  path: `admin/user/fund/withdraws`,
                  childrens: [],
               },
               {
                  title: `Logs`,
                  path: `admin/user/fund/logs`,
                  childrens: [],
               },
            ],
         },
         {
            title: `Stacking`,
            path: `admin/user/stacking`,
            childrens: [],
         },
         {
            title: `Vesting`,
            path: `admin/user/vesting`,
            childrens: [],
         },
      ],
   },
   {
      title: `NFT`,
      path: `admin/nft`,
      childrens: [
         {
            title: `Airdrop`,
            path: `admin/nft/airdrop`,
            childrens: [],
         },
         {
            title: `Watches`,
            path: `admin/nft/watches`,
            childrens: [],
         },
         {
            title: `Boxes`,
            path: `admin/nft/boxes`,
            childrens: [],
         },
      ],
   },
   {
      title: `System`,
      path: `admin/system`,
      childrens: [
         // {
         //    title: `Contract`,
         //    childrens: [],
         // },
         // {
         //    title: `Admin`,
         //    childrens: [],
         // },
         // {
         //    title: `Boxes`,
         //    childrens: [],
         // },
      ],
   },
];

export default function Nav() {
   const { mode } = useAppSelector((state) => state.setting);
   const { pathname } = useLocation();
   console.log(pathname);

   return (
      <Paper
         sx={{
            width: `var(--nav-width)`,
            flexShrink: `0`,
            height: `100%`,

            borderStyle: `solid`,
            borderColor: mode === `dark` ? `rgba(204, 229, 255, 0.08)` : `#E5EAF2`,
            borderWidth: `0px thin 0px 0px`,
         }}
         component={`nav`}
      >
         <Stack sx={{ width: `100%`, height: `100%` }}>
            {/* LOGO */}
            <Stack
               sx={{
                  height: `var(--header-height)`,
                  borderStyle: `solid`,
                  borderColor: mode === `dark` ? `rgba(204, 229, 255, 0.08)` : `#E5EAF2`,
                  borderWidth: `0px 0px thin`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  flexShrink: `0`,
               }}
            >
               <Logo
                  sx={{
                     width: `80px`,
                     filter: `drop-shadow(0px 3px 7px rgba(${
                        mode === `dark` ? "255,255,255" : "0,0,0"
                     }, 0.5))`,
                  }}
               />
            </Stack>

            {/* LIST NAV */}
            <List sx={{ overflowY: `auto` }}>
               <ListItemButton
                  selected={pathname.slice(1) === ROUTES.ADMIN.HOME()}
                  onClick={() => {
                     navigate(ROUTES.ADMIN.HOME());
                  }}
               >
                  <ListItemIcon>
                     <GridViewRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary={`Dashboard`} />
               </ListItemButton>
               {items.map((item, index) => {
                  return (
                     <Fragment key={index}>
                        <ListItemNav item={item} pl={2} />
                     </Fragment>
                  );
               })}
            </List>

            {/* FOOTER NAV */}
            <List sx={{ mt: `auto`, flexShrink: `0` }}>
               <Divider />
               <ListItemButton>
                  <ListItemIcon>
                     <LogoutRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
               </ListItemButton>
            </List>
         </Stack>
      </Paper>
   );
}
