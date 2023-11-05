import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const SideBar = () => {
    const size = "expand";
    const sideBarItems = [
        {
            routeId: "dashboard",
            link: "dashboard",
            title: "Tổng quan",
            icon: "ic-sidebar-dashboard",
        },
        {
            routeId: "CA",
            link: "CA",
            title: "Tiền mặt",
            icon: "ic-sidebar-cash",
        },
        {
            routeId: "PU",
            link: "PU",
            title: "Mua hàng",
            icon: "ic-sidebar-pu",
        },
        {
            routeId: "SA",
            link: "SA",
            title: "Bán hàng",
            icon: "ic-sidebar-sale",
        },
        {
            routeId: "FAN",
            link: "FAN",
            title: "Phân tích tài chính",
            icon: "ic-sidebar-finance",
        },
    ];
    return (
        <nav className={`app-sidebar sidebar-${size}`}>
            <div></div>
            {sideBarItems.map((item) => (
                <div key={item.routeId} className="sidebar-item">
                    <NavLink
                        to={`app/${item.link}`}
                        className={({ isActive }) => (isActive ? "sidebar-active" : "")}
                    >
                        <div className="flex h-[38px] px-[14px] items-center gap-2">
                            <div className={`ic ic-24 ${item.icon}`}></div>
                            <div className="text-white text-[13px]">
                                {item.title}
                            </div>
                        </div>
                    </NavLink>
                </div>
            ))}
            <div className="separation-line"></div>
            <div className="sidebar-item">
                <NavLink
                    to="/app/DI"
                    className={({ isActive }) => (isActive ? "sidebar-active" : "")}
                >
                    <div
                        className={"flex h-[38px] px-[14px] items-center gap-2"}
                    >
                        <div className={`ic ic-24 ic-sidebar-category`}></div>
                        <div className="text-white text-[13px]">Danh mục</div>
                    </div>
                </NavLink>
            </div>
            <div className="sidebar-item">
                <NavLink
                    to="/app/OPN"
                    className={({ isActive }) => (isActive ? "sidebar-active" : "")}
                >
                    <div className="flex h-[38px] px-[14px] items-center gap-2">
                        <div className={`ic ic-24 ic-sidebar-opn`}></div>
                        <div className="text-white text-[13px]">
                            Số dư ban đầu
                        </div>
                    </div>
                </NavLink>
            </div>
        </nav>
    );
};
export default SideBar;
