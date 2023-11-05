import React, { useState } from "react";
import { Button, Input, Popup, Combobox } from "@/components/globalComponent.js";
import BaseDictionaryDetail from "./BaseDictionaryDetail.jsx";
import account_object from "../../model/DI/account_object";
import DIStockAPI from "../../api/DIStockAPI"

class DICustomerDetail extends BaseDictionaryDetail {
    initCurrentItem() {
        let me = this;
        me.api = DIStockAPI;
        return new account_object();
    }
	async processBeforeSave() {
		let me = this;
        const data = await me.api.request('https://localhost:7166/api/Departments');
        console.log(`data`, data);
	}
    render() {
        return (
            <Popup width="900px" title="Thông tin khách hàng">
                <div className="flex flex-col">
                    <div className="flex gap-5 mb-2">
                        <div className="flex w-1/2 gap-3">
                            <div className="w-2/5">
                                <Input label="Mã số thuế"></Input>
                            </div>
                            <div className="w-3/5">
                                <Input label="Mã nhà cung cấp" required></Input>
                            </div>
                        </div>
                        <div className="flex w-1/2 gap-3">
                            <div className="w-2/5">
                                <Input label="Điện thoại"></Input>
                            </div>
                            <div className="w-3/5">
                                <Input label="Website" required></Input>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex w-1/2">
                            <Input label="Tên nhà cung cấp" required></Input>
                        </div>
                        <div className="flex w-1/2">
                            <Combobox
                                label="Nhóm nhà cung cấp"
                                quickAdd
                            ></Combobox>
                        </div>
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

export default DICustomerDetail;
