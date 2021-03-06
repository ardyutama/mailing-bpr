import React, { useContext, useEffect, useState } from "react";
import { Backdrop, Box, Button, CircularProgress, DialogActions } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ContextUser } from "../../context/ContextUser";
import { CREATE_OUTWARD,CREATE_APPROVER } from "../../constant/url";
import axios from "axios";
import useFetchAllUser from "../../hooks/useFetchAllUsers"
import DialogContent from "@mui/material/DialogContent";
import CustomTextField from "../TextField/CustomTextField";
import CustomAutocomplete from "../AutoComplete/CustomAutocomplete";
import useFetchOutward from "../../hooks/useFetchOutwards";

export default function DetailForm({onClose}) {
    const { user } = useContext(ContextUser);
    const { format } = require("date-fns");
    const date = format(new Date(), "yyyy-MM-dd");
    const [perihal, setPerihal] = useState("");
    const [receiver, setReceiver] = useState("");
    const [approverOne,setApproverOne] = useState("");
    const [approverTwo, setApproverTwo] = useState("");
    const [approverThree, setApproverThree] = useState("");
    const [kodeDepartement, setKodeDepartement] = useState("");
    const [loading,setLoading] = useState(false);
    const approver = [approverOne,approverTwo,approverThree];
    const creator = user.id;
    const {outwards} = useFetchOutward(user.division_id);
    let totalNomer = outwards.length;
    const nomerNota = totalNomer + 1;
    const employee = useFetchAllUser();
    const submitForm = () => {
        submitNota();
        // submitApprover();
        // onClose();
        // setOpen(false);
    }
    const submitNota = async () => {
        setLoading(true);
        await axios
            .post(CREATE_OUTWARD, {
                tgl_nota: date,
                perihal: perihal,
                no_nota: nomerNota + kodeDepartement,
                creator_id: creator,
                receiver_id: receiver,
            })
            .then((res) => {
                console.log(res);
                submitApprover(res.data.data.id);
            });
    };
    const submitApprover = async (id) => {
        setTimeout(()=> {
            approver.map((approver) => {
                return axios
                    .post(CREATE_APPROVER, {
                        user_id: approver,
                        nota_id: id,
                    })
                    .then((res) => {
                        console.log(res);
                        onClose();
                    })
                });
        },5000);
        setLoading(false);
    };

    const handleChange = (event) => {
        console.log(event.target.value);
        setPerihal(event.target.value);
    };
    return (
        <>
            <DialogContent dividers sx={{ px: 4, py: 4 }}>
                <Box component="form">
                    <Box
                        sx={{
                            width: "80%",
                            flexDirection: "column",
                            gap: 2,
                            display: "flex",
                            paddingBottom: 6,
                        }}
                    >
                        <Typography variant="h5">Data Nota</Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: 7,
                            }}
                        >
                            <CustomAutocomplete
                                id="receiver"
                                label="Penerima"
                                onChange={(event, newValue) => {
                                    console.log(newValue);
                                    setReceiver(newValue.id);
                                }}
                                options={employee}
                                getOptionLabel={(option) => {
                                    return (
                                        option.first_name +
                                        " " +
                                        option.last_name +
                                        " - " +
                                        option.roles_name +
                                        " " +
                                        option.divisions_name
                                    );
                                }}
                            />
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 2,
                                    alignItems: "center",
                                }}
                            >
                                <CustomTextField
                                    id="nomerNota"
                                    label="Nomer"
                                    value={nomerNota}
                                />
                                <h4 style={{ paddingTop: 24 }}>/</h4>
                                <CustomTextField
                                    id="Kode Departement"
                                    label="Kode Departement"
                                    value={kodeDepartement}
                                    onChange={(event) => {
                                        setKodeDepartement(event.target.value);
                                    }}
                                />
                            </Box>
                        </Box>
                        <label shrink="true" htmlFor="document">
                            Upload Dokumen Anda
                        </label>
                        <input
                            accept="image/*"
                            id="document"
                            multiple
                            type="file"
                            sx={{ display: "none" }}
                        />

                        <CustomTextField
                            label="Perihal"
                            id="perihal"
                            value={perihal}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: "50%",
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <Typography sx={{ fontSize: 20, fontWeight: "medium" }}>
                            Approver
                        </Typography>
                        <CustomAutocomplete
                            id="approverOne"
                            label="Approver Pertama"
                            onChange={(event, newValue) => {
                                console.log(newValue.id);
                                setApproverOne(newValue.id);
                            }}
                            options={employee}
                            getOptionLabel={(option) => {
                                return (
                                    option.first_name +
                                    " " +
                                    option.last_name +
                                    " - " +
                                    option.roles_name +
                                    " " +
                                    option.divisions_name
                                );
                            }}
                        />
                        <CustomAutocomplete
                            id="approverTwo"
                            label="Approver Kedua"
                            onChange={(event, newValue) => {
                                console.log(newValue.id);
                                setApproverTwo(newValue.id);
                            }}
                            options={employee}
                            getOptionLabel={(option) => {
                                return (
                                    option.first_name +
                                    " " +
                                    option.last_name +
                                    " - " +
                                    option.roles_name +
                                    " " +
                                    option.divisions_name
                                );
                            }}
                        />
                        <CustomAutocomplete
                            id="approverThree"
                            label="Approver Ketiga"
                            onChange={(event, newValue) => {
                                console.log(newValue.id);
                                setApproverThree(newValue.id);
                            }}
                            options={employee}
                            getOptionLabel={(option) => {
                                return (
                                    option.first_name +
                                    " " +
                                    option.last_name +
                                    " - " +
                                    option.roles_name +
                                    " " +
                                    option.divisions_name
                                );
                            }}
                        />
                    </Box>
                </Box>
                <Backdrop 
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={loading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </DialogContent>
            <DialogActions sx={{ m: 0, p: 2 }}>
                <Button autoFocus type="submit" onClick={submitForm}>
                    Kirim Untuk Mengajukan
                </Button>
            </DialogActions>
        </>
    );
}
