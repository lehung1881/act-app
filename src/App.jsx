import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import SideBar from "./layout/SideBar.jsx";
import Header from "./layout/Header.jsx";
import Content from "./layout/Content.jsx";

const App = () => {
    return (
        <div className="flex h-screen w-screen pt-[48px]">
            <Header></Header>
            <SideBar></SideBar>
            <Content></Content>
        </div>
    );
};

export default App;
