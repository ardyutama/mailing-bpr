import { Box, Card, CardMedia, Paper, Typography } from "@mui/material";
import React from "react";
export default function login(params) {
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
                                alignItems: "center",
                            }}
                        >
                            <Typography>Sign In</Typography>
                        </Box>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
}
