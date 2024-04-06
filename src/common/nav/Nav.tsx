import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import {
   Divider,
   List,
   ListItemButton,
   ListItemIcon,
   ListItemText,
   Paper,
   Stack,
} from "@mui/material";
import { useAppSelector } from "../../store/store";
import Logo from "../logo/Logo";
import ListItemNav from "./ListItemNav";
import { Fragment } from "react/jsx-runtime";

const items = [
   {
      title: `user`,
      childrens: [
         {
            title: `Fund`,
            childrens: [
               {
                  title: `List`,
                  childrens: [],
               },
               {
                  title: `Deposit`,
                  childrens: [],
               },
               {
                  title: `Withdraws`,
                  childrens: [],
               },
               {
                  title: `Logs`,
                  childrens: [],
               },
            ],
         },
         {
            title: `Stacking`,
            childrens: [],
         },
         {
            title: `Vesting`,
            childrens: [],
         },
      ],
   },
   {
      title: `NFT`,
      childrens: [
         {
            title: `Airdrop`,
            childrens: [],
         },
         {
            title: `Watches`,
            childrens: [],
         },
         {
            title: `Boxes`,
            childrens: [],
         },
      ],
   },
   {
      title: `System`,
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

   // const renderListNav = (item: any, pl: number) => {
   //    return (
   //       <>
   //          <ListItemButton onClick={handleClick} sx={{ pl: pl }}>
   //             <ListItemIcon>
   //                <PeopleAltRoundedIcon />
   //             </ListItemIcon>
   //             <ListItemText primary={item.title} />
   //             {item.childrens.length > 0 && <>{open ? <ExpandLess /> : <ExpandMore />}</>}
   //          </ListItemButton>
   //          {item.childrens.length > 0 && (
   //             <>
   //                <Collapse in={open} timeout="auto" unmountOnExit>
   //                   <List>
   //                      {item.childrens.map((children: any, index: number) => {
   //                         const pl2 = pl + 4;
   //                         return <Fragment key={index}>{renderListNav(children, pl2)}</Fragment>;
   //                      })}
   //                   </List>
   //                </Collapse>
   //             </>
   //          )}
   //       </>
   //    );
   // };

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
                  }}
               />
            </Stack>
            <List sx={{ overflowY: `auto` }}>
               {items.map((item, index) => {
                  return (
                     <Fragment key={index}>
                        <ListItemNav item={item} pl={2} />
                     </Fragment>
                  );
               })}
            </List>
            <List sx={{ mt: `auto`, flexShrink: `0` }}>
               <Divider />
               <ListItemButton>
                  <ListItemIcon>
                     <PeopleAltRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Trash" />
               </ListItemButton>
            </List>
         </Stack>
      </Paper>
   );
}
