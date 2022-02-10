import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";
import { Avatar, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import CustomAutocomplete from "../Global/CustomAutocomplete";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import UserInput from "../UserInput";

export default function DetailForm(params) {
    const [value, setValue] = React.useState(null);
    return (
        <>
            <Box
                component="form"
                sx={{
                    width: "50%",
                    flexDirection: "column",
                    gap: 2,
                    display: "flex",
                }}
            >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Tanggal Hari ini"
                        disabled
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                sx={{ width: "50%" }}
                                size="small"
                            />
                        )}
                    />
                </LocalizationProvider>
                <UserInput id="sender" label="Dari" disabled></UserInput>
                <UserInput id="terima" label="Kepada"></UserInput>
                <Typography sx={{ fontSize: 20, fontWeight: "medium" }}>
                    Informasi Surat
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Perihal"
                    variant="outlined"
                />
                <CustomAutocomplete label="Tipe Surat" id="tipeSurat" />
                <CustomAutocomplete label="Sifat Surat" id="sifatSurat" />
                <label htmlFor="document">Upload Dokumen Anda</label>
                <input
                    accept="image/*"
                    id="document"
                    multiple
                    type="file"
                    sx={{ display: "none" }}
                />
            </Box>
            <Box
                sx={{
                    width: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <Typography sx={{ fontSize: 20, fontWeight: "medium" }}>
                    Informasi Approval
                </Typography>
                <CustomAutocomplete id="approval" label="Diapprove oleh" />
            </Box>
        </>
    );
}
