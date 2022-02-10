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
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Chip } from "@mui/material";

export default function DetailForm(params) {
    const {data} = params;
    const [value, setValue] = React.useState(null);
    // const checkRole = (data) => {
    //     data
    // }
    return (
        <>
            <Box
                component="form"
                sx={{
                    width: "50%",
                    flexDirection: "column",
                    gap: 2,
                    display: "flex",
                    flexGrow: 1,
                }}
            >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Tanggal Hari ini"
                        disabled
                        value={data.date}
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
                <UserInput
                    id="sender"
                    label="Dari"
                    value={data.target.name}
                    disabled
                ></UserInput>
                <UserInput
                    id="terima"
                    label="Kepada"
                    icon={<AssignmentIcon></AssignmentIcon>}
                    disabled
                ></UserInput>
                <Typography sx={{ fontSize: 20, fontWeight: "medium" }}>
                    Informasi Surat
                </Typography>
                <TextField
                    id="perihal"
                    label="Perihal"
                    value={data.perihal}
                    disabled
                    Rows={4}
                    multiline
                />
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
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    flexGrow: 0,
                }}
            >
                <Typography sx={{ fontSize: 20, fontWeight: "medium" }}>
                    Daftar Approval
                </Typography>
                <Box display="flex" alignItems="center" gap={2}>
                    <Avatar></Avatar>
                    <Box display="flex" flexDirection="column">
                        <Typography sx={{ fontWeight: "bold" }} noWrap>
                            {data.approver.name}
                        </Typography>
                        <Typography>Divisi Sumber Daya Manusia</Typography>
                    </Box>
                    <Chip label="Approver" variant="outlined" />
                </Box>
            </Box>
        </>
    );
}
