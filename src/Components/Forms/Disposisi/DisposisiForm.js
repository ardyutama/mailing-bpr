import React, { useContext, useState } from "react";
import { Box, Button, DialogActions, DialogContent } from "@mui/material";
import CustomTextField from "../../TextField/CustomTextField";
import useFetchDisposition from "../../../hooks/useFetchDisposition";
import axios from "axios";
import {
    CREATE_DISPOSITION_REGISTER,
    CREATE_DISPOSITION,
} from "../../../constant/url";
import { ContextUser } from "../../../context/ContextUser";
import useFetchAllUser from "../../../hooks/useFetchAllUsers";
import CustomAutocomplete from "../../AutoComplete/CustomAutocomplete";
import ShowDisposisi from "./ShowDisposisi";
export default function DetailForm(params) {
    const { format } = require("date-fns");
    const date = format(new Date(), "yyyy-MM-dd");
    const [comment, setComment] = useState("");
    const { data } = params;
    const { user } = useContext(ContextUser);
    const dataFetch = useFetchDisposition(data.id);
    const employee = useFetchAllUser();
    const [disposisiTo, setDisposisiTo] = useState("");
    const [loading,setLoading] = useState(false); 
    const submitRegister = () => {
        setLoading(true);
        const postForm = async () => {
            await axios
                .post(CREATE_DISPOSITION_REGISTER, {
                    tgl_register: date,
                    creator_id: user.id,
                    nota_id: data.id,
                })
                .then((res) => {
                    console.log(res.data);
                    setLoading(false);
                });
        };
        postForm();
    };

    const submitDisposisi = () => {
        const postForm = async () => {
            await axios
                .post(CREATE_DISPOSITION, {
                    tgl_disposisi: date,
                    register_id: dataFetch[0].id,
                    creator_id: user.id,
                    disposisiTo_id: disposisiTo,
                    comment: comment,
                })
                .then((res) => {
                    console.log(res.data);
                });
        };
        postForm();
    };
    const ButtonRegister = () => {
        return (
         <Box sx={{ textAlign: "center" }}>
             <p>Disposisi belum terdaftar</p>
             <Button type="submit" onClick={submitRegister} loading={loading}>
                 Register Disposisi
             </Button>
         </Box>
        );
    }
    return (
        <>
            <DialogContent dividers>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingBottom: 2,
                    }}
                >
                    <Box sx={{ width: "50%" }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                            }}
                        >
                            <div>
                                <p>No. Nota</p>
                                <h4>{data.no_nota}</h4>
                            </div>
                            <div>
                                <p>Tanggal</p>
                                <h4>{data.tgl_nota}</h4>
                            </div>
                            <div>
                                <p>Dari</p>
                                <h4>
                                    {
                                        data.users_receiver.divisions
                                            .divisions_name
                                    }
                                </h4>
                            </div>
                            <div>
                                <p>Perihal</p>
                                <h4>{data.perihal}</h4>
                            </div>
                        </Box>
                    </Box>
                    <Box sx={{ width: "30%" }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 2,
                            }}
                        >
                            <h4>Informasi Disposisi</h4>
                            {dataFetch?.length ? (
                                <>
                                    {dataFetch[0].disposition_mails?.length ? (
                                        <ShowDisposisi dataFetch={dataFetch[0]} />
                                    ) : (
                                        <h5>
                                            Ini Disposisi Pertama! <br></br>{" "}
                                            Silahkan Isi Arahan Anda
                                        </h5>
                                    )}
                                    <CustomTextField
                                        id="comment"
                                        label="Isi Disposisi"
                                        value={comment}
                                        onChange={(event) => {
                                            // console.log(event.target.value);
                                            setComment(event.target.value);
                                        }}
                                    />
                                    <CustomAutocomplete
                                        id="receiver"
                                        label="Penerima"
                                        onChange={(event, newValue) => {
                                            console.log(newValue);
                                            setDisposisiTo(newValue.id);
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
                                </>
                            ) : (
                                <ButtonRegister />
                            )}
                        </Box>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions sx={{ m: 0, p: 2 }}>
                {dataFetch.length > 0 ? (
                    <Button autoFocus>Info Disposisi</Button>
                ) : (
                    ""
                )}
                <Button autoFocus onClick={submitDisposisi}>
                    Kirim Disposisi
                </Button>
                {/* <DisposisiModal open={open} onClose={handleClose} /> */}
            </DialogActions>
        </>
    );
}
