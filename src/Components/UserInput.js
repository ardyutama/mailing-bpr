import { Autocomplete, Avatar, Box, TextField } from "@mui/material";
// import TextField from "@mui/material/TextField";
import CustomAutocomplete from "./Global/CustomAutocomplete";

export default function UserInput(props) {
    const { id, label, icon, data, autoComplete, option,getOption, ...other } = props;
    // console.log(autoComplete);
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ color: "action.active", mr: 1, my: 0.5 }}>
                {icon}
            </Avatar>
            {/* <CustomAutocomplete
                id={id}
                label={label}
                data={data}
                autoComplete={autoComplete}
                option={option}
                {...other}
            /> */}
            <Autocomplete
                disablePortal
                sx={{ width: 300 }}
                id={id}
                // value={autoComplete.first_name}
                options={autoComplete}
                getOptionLabel =
                {(option) => {
                    if(getOption === "employee") 
                        return option.first_name + " " + option.last_name + " - " + option.roles_name + " " +  option.departement_name
                    else
                        return option.type_name
                }}
                renderInput={(params) => (
                    <TextField {...params} label={label} size="small" />
                )}
                {...other}
            />
        </Box>
    );
}
