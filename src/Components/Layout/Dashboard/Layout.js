import * as React from 'react';
import {Outlet} from "react-router-dom";
import { Box,CssBaseline} from '@mui/material';
import Sidebar from '../Sidebar';

const MiniDrawer = (props) => {
  return (
      <div style={{ display: "flex", minHeight: "100%", overflow: "hidden" }}>
        <Sidebar />
          <CssBaseline />
            <Box component="main" sx={{ flexGrow: 1, p: 6, bgcolor: "#EDEEEE" }}>
                <Outlet />
            </Box>
      </div>
  );
}

export default React.memo(MiniDrawer);
