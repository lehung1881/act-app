import React, { useState } from "react";
import {
    Button,
    Input,
    Popup,
    Combobox,
} from "@/components/globalComponent.js";
import BaseDictionaryDetail from "./BaseDictionaryDetail.jsx";
import account_object from "@/model/DI/account_object";
import DIStockAPI from "@/api/DIStockAPI";

class DIStockDetail extends BaseDictionaryDetail {
    initCurrentItem() {
        let me = this;
        me.api = DIStockAPI;
        return new account_object();
    }
    async processBeforeSave() {
        let me = this;
        const data = await me.api.request(
            "https://localhost:7166/api/Departments"
        );
        console.log(`data`, data);
    }
    render() {
        return (
            <Popup
                width="500px"
                title="Kho"
                close={() => this.buttonClick("Close")}
            >
                <div className="flex flex-col">
                    <div className="flex gap-3 mb-2">
                        <div className="w-1/3">
                            <Input label="Mã" required></Input>
                        </div>
                        <div className="w-2/3">
                            <Input label="Tên" required></Input>
                        </div>
                    </div>
                    <div className="flex mb-2 gap-3">
                        <div className="w-1/3">
                            <Combobox label="Tài khoản kho"></Combobox>
                        </div>
                        <div className="w-2/3"></div>
                    </div>
                    <div className="flex">
                        <Input label="Địa chỉ"></Input>
                    </div>
                    <div className="footer py-3 flex items-center justify-between mt-3 popup-line-footer">
                        <div className="btn-popup-left">
                            <Button
                                color="transparent"
                                onClick={() => this.buttonClick("Cancel")}
                            >
                                Hủy
                            </Button>
                        </div>
                        <div className="btn-popup-right flex gap-x-2">
                            <Button
                                color="transparent"
                                onClick={() => this.buttonClick("Save")}
                            >
                                Cất
                            </Button>
                            <Button
                                onClick={() => this.buttonClick("SaveAndAdd")}
                            >
                                Cất và thêm
                            </Button>
                        </div>
                    </div>
                </div>
            </Popup>
        );
    }
}
export default DIStockDetail;
