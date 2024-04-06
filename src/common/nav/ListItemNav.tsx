import { ExpandLess, ExpandMore } from "@mui/icons-material";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Fragment, useState } from "react";

type TProps = {
   item: any;
   pl: number;
};

export default function ListItemNav({ item, pl }: TProps) {
   const [open, setOpen] = useState(pl === 4 ? true : false);

   const handleClick = () => {
      setOpen(!open);
   };

   return (
      <>
         <ListItemButton onClick={handleClick} sx={{ pl: pl }}>
            <ListItemIcon>
               <PeopleAltRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={item.title} />
            {item.childrens.length > 0 && <>{!open ? <ExpandLess /> : <ExpandMore />}</>}
         </ListItemButton>
         {item.childrens.length > 0 && (
            <>
               <Collapse in={open} timeout="auto" unmountOnExit>
                  <List>
                     {item.childrens.map((children: any, index: number) => {
                        const pl2 = pl + 2;
                        return (
                           <Fragment key={index}>
                              <ListItemNav item={children} pl={pl2} />
                           </Fragment>
                        );
                     })}
                  </List>
               </Collapse>
            </>
         )}
      </>
   );
}
