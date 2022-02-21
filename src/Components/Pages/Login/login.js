import {
    Box,
    Button,
    Card,
    CardMedia,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
// import Users_data from "../../_mocks_/users.json";
import axios from "axios";

export default function Login(params) {
    // const [value, setValue] = useState({
    //     name: "",
    //     password: "",
    // });
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [Users, setUsers] = useState([]);
    const handleLogin = () => {
        console.log(username,password);
        axios
            .post(
                // "https://my.api.mockaroo.com/users.json?key=e6230540&__method=POST"
                "http://127.0.0.1:3001/login",
                {
                    username: username,
                    password: password,
                }
            )
            .then((res) => {
                console.log(res);
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
                            <form onSubmit={handleLogin}>
                                <Stack spacing={4} sx={{ width: "1" }}>
                                    <TextField
                                        id="username"
                                        variant="outlined"
                                        label="Username"
                                        value={username}
                                        onChange={(e) => {
                                            setUsername(e.target.value);
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
                                <Button
                                    variant="contained"
                                    sx={{ mt: 2 }}
                                    type="submit"
                                    onClick={handleLogin}
                                    to = "/dashboard/inbox"
                                >
                                    Sign in
                                </Button>
                            </form>
                        </Box>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
}
