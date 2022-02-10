import React, { Component } from "react";
import Inbox from "../Pages/Inbox/Inbox";
import {
    BrowserRouter,
    Routes,
    Route,
    useRoutes,
    Navigate,
} from "react-router-dom";
import LayoutComponent from "../Layout/Dashboard/Layout";
import Outward from "../Pages/Outward/Outward";
import Login from "../Pages/Login/login";
import SignInLayout from "../Layout/SignInLayout";

export default function Router() {
    // return (
    // <BrowserRouter>
    //         <LayoutComponent>
    //             <Routes>
    //                 <Route path="/" element={<Login />}></Route>
    //                 <Route path="/inbox" element={<Inbox />}> /</Route>
    //                 <Route path="outward" element={<Outward />}></Route>
    //             </Routes>
    //         </LayoutComponent>
    //     </BrowserRouter>);
    // FIXME: menambah router untuk passing id akun yang login
    let element = useRoutes([
        {
            path: "/dashboard",
            element: <LayoutComponent />,
            children: [
                { element: <Navigate to="/dashboard/inbox" replace /> },
                { path: "inbox", element: <Inbox /> },
                { path: "outward", element: <Outward /> },
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
