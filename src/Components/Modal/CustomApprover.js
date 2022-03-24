import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DetailApprover from "../Forms/DetailApprover";

const DetailModal = (props) => {
    const { open, onClose, data, title, ...other } = props;
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
            <DetailApprover dataRow={data} />
        </Dialog>
    );
};

export default DetailModal;
