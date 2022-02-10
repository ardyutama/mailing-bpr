import * as React from "react";
import { useAutocomplete } from "@mui/base/AutocompleteUnstyled";
import { styled } from "@mui/material/styles";
import { InputLabel } from "@mui/material";
import InputText from "./InputText";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function CustomAutocomplete(params) {
    const { label,id,size,...other} = params;
    return (
        <Autocomplete
            disablePortal
            sx={{ width: 300 }}
            id={id}
            options={top100Films}
            renderInput={(params) => (
                <TextField {...params} label={label} size="small" />
            )}
            {...other}
        />
    );
}

const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: "Pulp Fiction", year: 1994 },
    {
        label: "The Lord of the Rings: The Return of the King",
        year: 2003,
    },
    { label: "The Good, the Bad and the Ugly", year: 1966 },
    { label: "Fight Club", year: 1999 },
    {
        label: "The Lord of the Rings: The Fellowship of the Ring",
        year: 2001,
    },
];
