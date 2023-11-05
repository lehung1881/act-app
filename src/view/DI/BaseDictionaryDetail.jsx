import React, { useState } from "react";

class BaseDictionaryDetail extends React.Component {
    componentDidMount() {
        let me = this;
        me.initStaticData();
    }
	initCurrentItem() {
		throw new Error("DEV: Override lại hàm initCurrentItem().");
	};
	/**
	 * Khởi tạo dữ liệu ban đầu
	 */
    initStaticData() {
        let me = this;
        me.isShowPopup = false;
		me.currentItem = me.initCurrentItem();
    }
	/**
	 * Xử lý các action chung khi ấn vào button
	 * @param {*} action 
	 */
    buttonClick(action) {
        let me = this;
        switch (action) {
            case "SaveAndAdd":
                me.saveAndAdd();
                break;
            case "Save":
                me.save();
            case "Close":
                me.save();
                break;
        }
    }
    /**
     * Cất và thêm
     */
    saveAndAdd() {}
    /**
     * Cất
     */
    save() {
        let me = this;
        me.processBeforeSave();
    }
    /**
     * Xử lý trước khi cất
     */
    processBeforeSave() {}
    render() {
        return <div></div>;
    }
}

export default BaseDictionaryDetail;
