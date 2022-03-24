import React from "react";
import {  Box, DialogContent } from "@mui/material";


export default function DetailForm(params) {
    const {data} = params;
    // const [value, setValue] = React.useState(null);
    // console.log(data);
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
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2,width:"50%" }}>
                    <div>
                        <p>No. Nota</p>
                        <h4>{data.no_nota}</h4>
                    </div>
                    <div>
                        <p>Tanggal</p>
                        <h4>{data.tgl_nota}</h4>
                    </div>
                    <div>
                        <p>Tujuan</p>
                        <h4>{data.users_receiver.divisions.divisions_name}</h4>
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
                            {data.users_creator.first_name} {" "}
                            {data.users_creator.last_name}
                        </h4>
                        <p>{data.created_at}</p>
                    </div>
                </Box>
            </DialogContent>
        </>
    );
}
