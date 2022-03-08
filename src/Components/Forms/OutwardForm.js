import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import React, { useContext, useEffect, useState } from "react";
import {  Autocomplete, Avatar, Box, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import CustomAutocomplete from "../Global/CustomAutocomplete";
import Typography from "@mui/material/Typography";
import UserInput from "../UserInput";
import { ContextUser } from "../context/ContextUser";
import { CREATE_OUTWARD, SHOW_ALL_EMPLOYEE, SHOW_TYPE_MAIL } from "../constant/url";
import axios from "axios";
import { AccountCircle } from "@mui/icons-material";

export default function DetailForm(params) {
    // const [value, setValue] = React.useState(null);
    const {format} = require('date-fns');
    const [employee, setEmployee] = useState([]);
    const [typeMail, setTypeMail] = useState([]);
    const [date] = useState(format(new Date(), "yyyy-MM-dd"));
    const [perihal, setPerihal] = useState("");
    const [tipeSurat, setTipeSurat] = useState("");
    const [sifatSurat, setSifatSurat] = useState("");
    const [penerimaSurat, setPenerimaSurat] = useState("");
    const [approver, setApprover] = useState("");
    const sifat_surat = [{name : "Terbuka"}, {name: "Tertutup"}, {name: "Rahasia"}];
    const { input } = useContext(ContextUser);
    const [creator] = useState(input.id);
    const [pengirimSurat] = useState(input.id);

    useEffect(()=> {
        const fetchEmployee = async () => {
            await axios.get(SHOW_ALL_EMPLOYEE).then((res) => {
                setEmployee({
                    data: res.data.data.map((key) => {
                        return {
                            id: key.id,
                            first_name: key.first_name,
                            last_name: key.last_name,
                            roles_name: key.roles_name,
                            departement_name: key.departement_name,
                        };
                    }),
                });
            });
        };
        const fetchTypeMail = async () => {
            await axios.get(SHOW_TYPE_MAIL).then((res) => {
                setTypeMail(res.data.data);
            });
        };
        fetchEmployee();
        fetchTypeMail();
    },[])
    console.log(creator);

    const submitForm = async () => {
        await axios.post(CREATE_OUTWARD, {
            tgl_surat_keluar : date,
            perihal : perihal,
            tipe_surat_id : tipeSurat,
            sifat_surat : sifatSurat,
            pengirim_surat: pengirimSurat,
            penerima_surat: penerimaSurat,
            approver: approver,
            creator_id: creator,
        })
        .then((res)=> {
            console.log(res);
        })
    }
    return (
        <>
        <form
            id="form-dialog"
            onSubmit={submitForm}
            style={{
                display: "flex",
                flexGrow: 1,
                justifyContent: "space-between",
                flexDirection:"column"
            }}
        >
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
                        value={date}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                sx={{ width: "50%" }}
                                size="small"
                            />
                        )}
                    />
                </LocalizationProvider>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar sx={{ color: "action.active", mr: 1, my: 0.5 }}>
                        <AccountCircle />
                    </Avatar>
                    <TextField
                        {...params}
                        sx={{ width: 300 }}
                        label="Dari"
                        size="small"
                        id="pengirim"
                        value={
                            input.first_name +
                            " " +
                            input.last_name +
                            " - " +
                            input.roles_name +
                            " " +
                            input.departement_name
                        }
                        disabled
                    />
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar sx={{ color: "action.active", mr: 1, my: 0.5 }}>
                        <AccountCircle />
                    </Avatar>
                    <Autocomplete
                        disablePortal
                        sx={{ width: 300 }}
                        id="terima"
                        onChange={(event, newValue) => {
                            setPenerimaSurat(newValue.id);
                        }}
                        options={employee.data}
                        getOptionLabel={(option) => {
                            return (
                                option.first_name +
                                " " +
                                option.last_name +
                                " - " +
                                option.roles_name +
                                " " +
                                option.departement_name
                            );
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="kepada"
                                size="small"
                            />
                        )}
                    />
                </Box>
                <Typography sx={{ fontSize: 20, fontWeight: "medium" }}>
                    Informasi Surat
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Perihal"
                    variant="outlined"
                    onChange={(event, newValue) => {
                        setPerihal(event.target.value);
                    }}
                />
                <Autocomplete
                    disablePortal
                    sx={{ width: 300 }}
                    id="tipeSurat"
                    options={typeMail}
                    getOptionLabel={(option) => {
                        return option.type_name;
                    }}
                    onChange={(event, newValue) => {
                        setTipeSurat(newValue.id);
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Tipe Surat"
                            size="small"
                        />
                    )}
                />
                {/* <CustomAutocomplete
                    label="Sifat Surat"
                    id="sifat_surat"
                    autoComplete={sifat_surat}
                    getOption="sifatSurat"
                    // value={(newValue) => {
                    //     setSifatSurat(newValue);
                    // }}
                /> */}
                <Autocomplete
                    disablePortal
                    sx={{ width: 300 }}
                    id="sifatSurat"
                    options={sifat_surat}
                    getOptionLabel={(option) => {
                        return option.name;
                    }}
                    onChange={(event, newValue) => {
                        setSifatSurat(newValue.name);
                    }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Sifat Surat"
                            size="small"
                        />
                    )}
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
                    width: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <Typography sx={{ fontSize: 20, fontWeight: "medium" }}>
                    Informasi Approval
                </Typography>
                {/* <CustomAutocomplete
                    id="approval"
                    label="Diapprove oleh"
                    autoComplete={employee.data}
                    getOption="employee"
                /> */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Autocomplete
                        disablePortal
                        sx={{ width: 300 }}
                        id="approval"
                        onChange={(event, newValue) => {
                            setApprover(newValue.id);
                        }}
                        options={employee.data}
                        getOptionLabel={(option) => {
                            return (
                                option.first_name +
                                " " +
                                option.last_name +
                                " - " +
                                option.roles_name +
                                " " +
                                option.departement_name
                            );
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="kepada"
                                size="small"
                            />
                        )}
                    />
                </Box>
            </Box>
            <Button autoFocus type="submit" onClick={submitForm}>
                Kirim Untuk Mengajukan
            </Button>
            </form>
        </>
    );
}
