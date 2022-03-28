import * as React from "react";
import { Link} from "react-router-dom";
import { Box, List, Typography } from "@mui/material";
import Modal from "../../Modal";
import LogoutIcon from "@mui/icons-material/Logout";
import Cookies from "js-cookie";
import { ContextUser } from "../../../context/ContextUser";
import SidebarConfig from "./SidebarConfig"
import NavSection from "./NavSection";
import Button from "../../Button";
import OutwardForm from "../../Forms/OutwardForm";
import { GrMailOption } from "react-icons/gr";

export default function Sidebar(params) {
    const { user } = React.useContext(ContextUser);
    const [open, setOpen] = React.useState(false);
    const { logout } = React.useContext(ContextUser);

    const handleLogout = () => {
        Cookies.remove("token");
        logout();
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Box>
            <Box
                sx={{
                    px: 3,
                    py: 5,
                    height: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                    <Box
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                            Mailing BPR
                        </Typography>
                        <GrMailOption size={24} color="blue" />
                    </Box>
                    <Button onClick={handleOpen} title="Create Nota" />
                    <Modal
                        open={open}
                        onClose={handleClose}
                        form={<OutwardForm onClose={handleClose} />}
                        title="Buat Nota"
                    ></Modal>
                    <List component="nav">
                        {SidebarConfig.map((value) => (
                            <NavSection
                                icon={value.icon}
                                title={value.title}
                                to={value.path}
                                component={Link}
                            />
                        ))}
                    </List>
                </Box>
                <Box>
                    <h4 style={{ paddingBottom: 8, paddingLeft: 16 }}>
                        Hello, <br></br>
                        {user.first_name} {user.last_name}
                    </h4>
                    <NavSection
                        component={Link}
                        to="/"
                        onClick={handleLogout}
                        icon={<LogoutIcon />}
                        title="Logout"
                    />
                </Box>
            </Box>
        </Box>
    );
}
