import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

const Modal = (props) => {
    const { open, onClose,title,form} = props;
    return (
        <Dialog
            open={open}
            fullWidth={true}
            maxWidth="md"
            onClose={onClose}
            scroll="paper"
        >
            <DialogTitle sx={{ m: 0, p: 2, bgcolor: "#EDEEEE" }}>
                {title}
            </DialogTitle>
               {form}
        </Dialog>
    );
};

export default Modal;
