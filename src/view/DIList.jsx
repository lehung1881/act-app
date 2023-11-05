import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "@/assets/DI/di.scss";

const DIList = () => {
    const listDI = [
        {
            title: "Đối tượng",
            listSub: [
                {
                    subTitle: "Khách hàng",
                    path: "./DICustomer",
                },
                {
                    subTitle: "Nhà cung cấp",
                    path: "./DIVendor",
                },
                {
                    subTitle: "Nhân viên",
                    path: "./DIEmployee",
                },
            ],
        },
        {
            title: "Vật tư hàng hóa",
            listSub: [
                {
                    subTitle: "Vật tư hàng hóa",
                    path: "./DIInventoryItem",
                },
                {
                    subTitle: "Kho",
                    path: "./DIStock",
                },
                {
                    subTitle: "Nhóm vật tư, hàng hóa, dịch vụ",
                    path: "./DIInventoryItemGroup",
                },
                {
                    subTitle: "Đơn vị tính",
                    path: "./DIUnit",
                },
            ],
        },
        {
            title: "Tài khoản",
            listSub: [
                {
                    subTitle: "Hệ thống tài khoản",
                    path: "",
                },
                {
                    subTitle: "Tài khoản kết chuyển",
                    path: "",
                },
                {
                    subTitle: "Tài khoản ngầm định",
                    path: "",
                },
            ],
        },
        
    ];
    return (
        <div className="w-full flex flex-col">
            <div className="py-3 header-di">
                <div className="title-di">Danh mục</div>
            </div>
            <div className="bg-white h-[calc(100vh-120px)]">
                <div className="flex p-[32px] flex-wrap gap-y-5">
                    {listDI.map((item) => (
                        <div key={item.title} className="w-1/3">
                            <div className="text-[14px] font-bold mb-2">
                                {item.title}
                            </div>
                            {item.listSub.map((subItem) => (
                                <Link
                                    key={subItem.subTitle}
                                    to={subItem.path}
                                    className="block text-[13px] text-[#0075c0] mb-2"
                                >
                                    {subItem.subTitle}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DIList;
