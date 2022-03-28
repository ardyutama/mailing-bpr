import * as React from 'react';
import { ListItemButton,ListItemIcon,ListItemText } from "@mui/material";


const NavSection = ({icon,title,...others}) => {
    return (
        <>
            <ListItemButton {...others}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={title} />
            </ListItemButton>
        </>
    );
}

export default NavSection;
