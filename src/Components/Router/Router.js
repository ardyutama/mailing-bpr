import React, { Component } from 'react';
import Inbox from '../Pages/Inbox/Inbox';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import LayoutComponent from "../Layout/Layout"
import Outward from "../Pages/Outward/Outward";

export default function Router(params) {
    return(
        <BrowserRouter>
          <LayoutComponent>
          <Routes>
            <Route path="/" element={<Inbox />}> /</Route>
            <Route path="outward" element={<Outward />}></Route>
          </Routes>
        </LayoutComponent>
        </BrowserRouter>
    );
};
