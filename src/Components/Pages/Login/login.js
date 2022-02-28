import { Box, Button, Card, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { LOGIN_API } from "../../constant/url";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export default function Login(params) {
    const navigate = useNavigate();
    const [NIP, setNIP] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        let inOneHours = new Date(new Date().getTime() + 60 * 60 * 1000);
        axios
            .post(LOGIN_API, {
                NIP: NIP,
                password: password,
            })
            .then((res) => {
                console.log(res);
                let token = res.data.token;
                let id = res.data.data.employee_id;

                Cookies.set('token', token,{expires: inOneHours})
                Cookies.set("id", id, { expires: inOneHours });
                // history.push('')
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
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            {/* <form onSubmit={handleLogin}> */}
                            {/* <form> */}
                            {/* @csrf <!-- {{ csrf_field() }} --> */}
                            <Stack spacing={4} sx={{ width: "1" }}>
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
                            </Stack>
                            {/* <Link to="/dashboard/inbox"> */}
                            <Button
                                variant="contained"
                                sx={{ mt: 2 }}
                                type="submit"
                                onClick={handleLogin}
                                // to="/dashboard/inbox"
                            >
                                Sign in
                            </Button>
                            {/* </Link> */}
                            {/* </form> */}
                        </Box>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
}
