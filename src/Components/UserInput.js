import { Avatar, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import CustomAutocomplete from "./Global/CustomAutocomplete";

export default function UserInput(props) {
    const {id,label,icon, ...other} = props;
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ color: "action.active", mr: 1, my: 0.5 }}>
                {icon}
            </Avatar>
            <CustomAutocomplete id={id} label= {label} {...other} />
        </Box>
    );
}
