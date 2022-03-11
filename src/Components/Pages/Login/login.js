import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { LOGIN_API} from "../../constant/url";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { fontSize } from "@mui/system";
export default function Login(params) {
    const navigate = useNavigate();
    const [NIP, setNIP] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = async () => {
        let inOneHours = new Date(new Date().getTime() + 60 * 60 * 1000);
        await axios
            .post(LOGIN_API, {
                NIP: NIP,
                password: password,
            })
            .then((res) => {
                console.log(res);
                let token = res.data.token;
                let id = res.data.data.id;
                Cookies.set("token", token, { expires: inOneHours });
                Cookies.set("id",id)
                // saveEmployee(id);
                navigate("/dashboard/inbox");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // TODO: MEMBUAT PAGE LOGIN
    return (
        <Box sx={{ minHeight: "100vh", margin: "auto", display: "flex" }}>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "1",
                }}
            >
                <Card sx={{ maxWidth: 1000 }}>
                    <Box sx={{ display: "flex" }}>
                        <img
                            src="/static/illustrations/email.jpg"
                            alt="login"
                            style={{ width: 400 }}
                        />
                        <Box
                            sx={{
                                m: 4,
                                width: 400,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <Typography
                                sx={{ fontSize: 36, fontWeight: "bold" }}
                                gutterBottom
                            >
                                Mailing BPR
                            </Typography>
                            <Typography
                                sx={{ fontSize: 16, fontWeight: "bold" }}
                                gutterBottom
                            >
                                Sign In
                            </Typography>
                            <Stack spacing={2} sx={{ width: 3/4 }}>
                                <TextField
                                    id="username"
                                    variant="outlined"
                                    label="NIP"
                                    value={NIP}
                                    onChange={(e) => {
                                        setNIP(e.target.value);
                                    }}
                                />
                                <TextField
                                    id="Password"
                                    variant="outlined"
                                    label="Password"
                                    type="password"
                                    value={password}
                                    autoComplete="current-password"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            <Button
                                variant="contained"
                                sx={{ mt: 2, w: 1/2 }}
                                type="submit"
                                onClick={handleLogin}
                            >
                                Sign in
                            </Button>
                            </Stack>
                        </Box>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
}
