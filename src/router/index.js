import React, { Component } from "react";
import Inbox from "../pages/Inbox";
import {
    BrowserRouter,
    Routes,
    Route,
    useRoutes,
    Navigate,
} from "react-router-dom";
import LayoutComponent from "../components/Layout/Dashboard/Layout";
import Outward from "../pages/Outward";
import Login from "../pages/Login";
import Approve from "../pages/Approve";
import SignInLayout from "../components/Layout/SignInLayout";

export default function Router() {

    
    // FIXME: menambah router untuk passing id akun yang login
    let element = useRoutes([
        {
            path: "/dashboard",
            element: <LayoutComponent />,
            children: [
                { element: <Navigate to="/dashboard/inbox" replace /> },
                { path: "inbox", element: <Inbox /> },
                { path: "outward", element: <Outward /> },
                { path: "approve", element: <Approve /> },
            ],
        },
        {
            path: "/",
            element: <SignInLayout />,
            children: [{ path: "/", element: <Login /> }],
        },
    ]);
    return element;
}
