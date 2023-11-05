/**
 * Danh sách kho
 */
import React from "react";
import { Link } from "react-router-dom";
import BaseDictionary from "./BaseDictionary";
import {
    Button,
    Input,
    Popup,
    Combobox,
} from "@/components/globalComponent.js";
import "@/assets/DI/di.scss";

class DIStockList extends BaseDictionary {
    render() {
        return (
            <div className="w-full flex flex-col">
                <div className="pt-3 pb-2 header-di">
                    <div className="title-di">Kho</div>
                    <Link to="../app/DI" className="flex items-center mt-2">
                        <div className="ic ic-16 ic-chevron-left--primary"></div>
                        <div className="text-[13px] text-[#0075c0]">Tất cả danh mục</div>
                    </Link>
                </div>
                <div className="bg-white h-[calc(100vh-146px)]">
                    <div className="flex px-3 py-2 justify-between">
                        <div className="w-1/6">
                            <Input placeholder="Tìm theo mã kho, tên kho"></Input>
                        </div>
                        <div className="flex items-center gap-x-3">
                            <div className="ic ic-24 ic-refresh"></div>
                            <div className="ic ic-24 ic-excel__nav"></div>
                            <Button radius="20px" dropdown dropdownMenu={[
                                {
                                    dropItemKey: "ImportExcel",
                                    dropItemText: "Nhập từ Excel"
                                }
                            ]}>Thêm</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DIStockList;
