import { ExpandLess, ExpandMore } from "@mui/icons-material";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Fragment, useState } from "react";
import { useLocation } from "react-router-dom";
import { navigate } from "../../helpers/navigate.helpler";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

type TProps = {
   item: any;
   pl: number;
};

export default function ListItemNav({ item, pl }: TProps) {
   const { pathname } = useLocation();
   const [open, setOpen] = useState(pathname.includes(item.path));

   const isButtonHaveToggle = item.childrens.length > 0;

   const handleClick = () => {
      if (isButtonHaveToggle) {
         setOpen(!open);
      }
      if (!isButtonHaveToggle) {
         navigate(item.path);
      }
   };

   return (
      <>
         <ListItemButton
            // selected={pathname.includes(item.path)} // selected button parent to button children
            selected={pathname.slice(1) === item.path} // selected just children
            onClick={handleClick}
            sx={{ pl: pl }}
         >
            <ListItemIcon>
               <PeopleAltRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={item.title} />
            {item.childrens.length > 0 && <>{!open ? <NavigateNextIcon /> : <ExpandMore />}</>}
         </ListItemButton>
         {item.childrens.length > 0 && (
            <Collapse in={open} timeout="auto" unmountOnExit>
               <List>
                  {item.childrens.map((children: any, index: number) => {
                     const plNext = pl + 2;
                     return (
                        <Fragment key={index}>
                           <ListItemNav item={children} pl={plNext} />
                        </Fragment>
                     );
                  })}
               </List>
            </Collapse>
         )}
      </>
   );
}
