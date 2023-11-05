/**
 * Danh sách hàng hóa, dịch vụ
 */
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import BaseDictionary from "./BaseDictionary";
import "@/assets/DI/di.scss";

class DIInventoryItemList extends BaseDictionary {
    render() {
        return (
            <div className="w-full flex flex-col">
                <div className="pt-3 pb-2 header-di">
                    <div className="title-di">Danh sách hàng hóa, dịch vụ</div>
                    <Link to="../app/DI" className="flex items-center mt-2">
                        <div className="ic ic-16 ic-chevron-left--primary"></div>
                        <div className="text-[13px] text-[#0075c0]">Tất cả danh mục</div>
                    </Link>
                </div>
                <div className="bg-white h-[calc(100vh-146px)]">
                    
                </div>
            </div>
        );
    }
}

export default DIInventoryItemList;
