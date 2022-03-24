import { Autocomplete } from "@mui/material";
import CustomTextField from "../TextField/CustomTextField";

export default function CustomAutocomplete({id,label,...other}) {
    return(
    <Autocomplete
        freeSolo
        sx={{ width: "100%" }}
        id={id}
        {...other}
        renderInput={(params) => (
            <div ref={params.InputProps.ref}>
                <CustomTextField id={id} label={label} inputProps={{ ...params.inputProps }} />
            </div>
        )}
    />
    )
};
