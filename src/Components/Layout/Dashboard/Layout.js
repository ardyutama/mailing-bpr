import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import {Link, Outlet} from "react-router-dom";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Button } from '@mui/material';
import Modal from "../../Modal/CreateOutwardModal";
import LogoutIcon from "@mui/icons-material/Logout";
import Cookies from "js-cookie";
import { ContextUser } from "../../../context/ContextUser";
import SidebarConfig from './SidebarConfig';
import NavSection from './NavSection';
import { GoDashboard } from "react-icons/go";
// import { Link } from "react-router-dom";
const RenderContent = () => {
  const [open, setOpen] = React.useState(false);
  const {logout} = React.useContext(ContextUser);
  const handleLogout = () => {
        Cookies.remove('token');
        logout();
  }
  const handleCreateNota = () => {
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
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Mailing BPR
                    </Typography>
                    <Button
                        sx={{
                            py: 2,
                            px: 2,
                            bgcolor: "#0F4C81",
                            borderRadius: 1.5,
                            color: "white",
                            "&:hover": {
                                bgcolor: "#082641",
                            },
                        }}
                        onClick={handleCreateNota}
                    >
                        Create Nota
                    </Button>
                    <Modal open={open} onClose={handleClose}></Modal>
                    <List component="nav">
                        <NavSection
                            icon={<GoDashboard size={24} />}
                            title="Dashboard"
                        />
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
};

const MiniDrawer =() => {
  
  return (
      <div style={{ display: "flex", minHeight: "100%", overflow: "hidden" }}>
          <RenderContent />
          <CssBaseline />
          <Box component="main" sx={{ flexGrow: 1, p: 6, bgcolor: "#EDEEEE" }}>
              <Outlet />
          </Box>
      </div>
  );
}

export default React.memo(MiniDrawer);
