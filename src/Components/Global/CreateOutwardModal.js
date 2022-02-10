import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import OutwardForm from "../Forms/OutwardForm";
const Modal = (props) => {
    const { open, onClose } = props;

    return (
        <Dialog
            open={open}
            fullWidth={true}
            maxWidth="md"
            onClose={onClose}
            sx={{ p: 2 }}
        >
            <DialogTitle sx={{ m: 0, p: 2 }}>Surat Keluar Baru</DialogTitle>
            <DialogContent dividers>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <OutwardForm />
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

export default Modal;
