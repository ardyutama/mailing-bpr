import React, { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { DetailForm } from "../Forms";
const DetailMail = (props) => {
    const { open, onClose, data, ...other } = props;

    return (
        <Dialog
            open={open}
            fullWidth={true}
            maxWidth="md"
            onClose={onClose}
            sx={{ p: 2 }}

        >
            <DialogTitle sx={{ m: 0, p: 2 }}>Detail Approve</DialogTitle>
            <DialogContent dividers>
                <Box sx={{ display: "flex" }}>
                    <DetailForm data={data}/>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={onClose}>
                    Kirim Untuk Mengajukan
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DetailMail;
