import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { Outlet } from "react-router-dom";

export default function SignInLayout(params) {
    return (
        <Container>
                <Outlet />
        </Container>
    );
}
