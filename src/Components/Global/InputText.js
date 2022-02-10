import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
        borderRadius: 8,
        position: "relative",
        backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
        border: "1px solid #ced4da",
        fontSize: 16,
        width: "auto",
        padding: "10px 12px",
        transition: theme.transitions.create([
            "border-color",
            "background-color",
            "box-shadow",
        ]),
        "&:focus": {
            boxShadow: `${alpha(
                theme.palette.primary.main,
                0.25
            )} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));

export default function InputText(props) {
    const { label,id } = props;
    return (
        <Box>
            <InputLabel shrink htmlFor="bootstrap-input">
                {label}
            </InputLabel>
            <BootstrapInput id={id} />
        </Box>
    );
}
