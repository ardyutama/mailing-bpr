import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DetailForm from "../Forms/DetailForm";

const DetailModal = (props) => {
    const { open, onClose,data,...other } = props;
    return (
        <Dialog
            open={open}
            fullWidth={true}
            maxWidth="md"
            onClose={onClose}
            scroll="paper"
        >
        <DialogTitle sx={{ m: 0, p: 2, bgcolor: "#EDEEEE" }}>
                Detail Nota
        </DialogTitle>
            <DetailForm data={data}/>
        </Dialog>
    );
};

export default DetailModal;
