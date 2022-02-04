import React from "react";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";

export default function SearchBar(props) {
    return (
        <Box
            component="form"
            noValidate
            className="flex relative items-center p-2 rounded-md bg-gray-200 w-1/2"
        >
            <InputBase className="mt-1 ml-2"></InputBase>
        </Box>
    );
}
