import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import OutwardForm from "../Forms/OutwardForm";


const Modal = (props) => {
    const { open, onClose } = props;
    return (
        <Dialog
            open={open}
            fullWidth={true}
            maxWidth="md"
            onClose={onClose}
            scroll="paper"
        >
            <DialogTitle sx={{ m: 0, p: 2, bgcolor: "#EDEEEE" }}>
                Buat Nota
            </DialogTitle>
            <OutwardForm />
        </Dialog>
    );
};

export default Modal;
