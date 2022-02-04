import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Modal = (props) => {
    const { children, open, onClose } = props;
    return (
        <Dialog open={open} onClose={onClose} sx={{ p: 2 }}>
            <DialogTitle sx={{ m: 0, p: 2, alignItems: "center" }}>
                Modal
            </DialogTitle>
            <DialogContent dividers>
                <Box sx={{ display: "flex", gap: 2 }}>
                    <Box sx={{ width: "auto" }}>
                        <Typography sx={{fontSize:12,fontWeight:'medium'}}>
                            Tanggal
                        </Typography>
                    </Box>
                    <Box sx={{ width: "auto" }}>tes</Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default Modal;
