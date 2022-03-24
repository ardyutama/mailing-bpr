import React from "react";
import { Box, DialogContent,DialogActions,Button } from "@mui/material";
import axios from "axios";
import { UPDATE_APPROVER } from "../../constant/url";

export default function DetailForm(params) {
    const { dataRow } = params;
    const { format } = require("date-fns");
    const date = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss");
    const data = dataRow.notas;
    const updateApprove = async () => {
        await axios
            .post(UPDATE_APPROVER(dataRow.user_id,dataRow.nota_id), {
                isApproved : 1,
                approved_time : date,
            })
            .then((res) => {
                console.log(res.data);
            });
    }
    const handleApprove = () => {
        updateApprove();
    }
    return (
        <>
            <DialogContent
                dividers
                sx={{
                    px: 4,
                    py: 4,
                    paddingBottom: 20,
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        width: "50%",
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
                        <p>Pembuat</p>
                        <h4>
                            {data.users_creator.first_name}{" "}
                            {data.users_creator.last_name}
                        </h4>
                        <h4>
                            {data.users_creator.roles.name}{" "}
                            {data.users_creator.divisions.name}
                        </h4>
                    </div>
                    <div>
                        <p>Perihal</p>
                        <h4>{data.perihal}</h4>
                    </div>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <div>
                        <p>Created By : </p>
                        <h4>
                            {data.users_creator.first_name}{" "}
                            {data.users_creator.last_name}
                        </h4>
                        <p>{data.created_at}</p>
                    </div>
                </Box>
            </DialogContent>
            <DialogActions sx={{ m: 0, p: 2 }}>
                <Button autoFocus onClick={handleApprove}>Approve</Button>
            </DialogActions>
        </>
    );
}
