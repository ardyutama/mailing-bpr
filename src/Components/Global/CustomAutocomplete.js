import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function CustomAutocomplete(params) {
    const { label,id,size,data,autoComplete,getOption,...other} = params;
    // console.log(autoComplete);
    return (
        <Autocomplete
            disablePortal
            sx={{ width: 300 }}
            id={id}
            inputValue={data}
            options={autoComplete}
            getOptionLabel={(option) => {
                if (getOption === "employee") return option.first_name;
                else if (getOption === "type_mail")
                return option.type_name;
                else if (getOption === "sifatSurat") return option.name;
            }}
            // getOptionLabel={option}
            renderInput={(params) => (
                <TextField {...params} label={label} size="small" />
            )}
            {...other}
        />
    );
}


