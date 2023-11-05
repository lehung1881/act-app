import React, { useEffect, useState } from "react";
import Enum from "@/common/enumration.js";
import "./Popup.css";

const Popup = ({
    width,
    height,
    title,
    children,
    type = "center",
    radius = "4px",
    customHeader,
    close = () => {},
}) => {
    const handleKeydown = (event) => {
        const keyCode = event.keyCode;
        switch (keyCode) {
            case Enum.KeyCode.Esc:
                close();
                break;
        }
    };
    //Lắng nghe các sự kiện phím tắt
    useEffect(() => {
        window.addEventListener("keydown", handleKeydown);
        return () => {
            window.removeEventListener("keydown", handleKeydown);
        };
    }, []);
    return (
        <div
            className={`flex fixed fixed-full popup-overlay ${
                type == "right" ? "popup-right" : "popup-center"
            } z-[1000]`}
        >
            <div
                className={`popup`}
                style={{
                    width: type == "full" ? "100%" : width,
                    height: type == "center" ? height : "100%",
                    borderRadius:
                        type == "center"
                            ? radius
                            : type == "right"
                            ? `${radius} 0px 0px ${radius}`
                            : "",
                }}
            >
                <header
                    className={`h-[60px] w-full flex items-center px-4 pb-4 relative`}
                >
                    <div className="flex">
                        <div className="title-popup">{title}</div>
                        <div className="custom-header">{customHeader}</div>
                    </div>
                    <div className="flex gap-x-[6px] absolute right-2 top-2">
                        <div className="ic ic-24 ic-help"></div>
                        <div
                            className="ic ic-24 ic-close"
                            onClick={close}
                        ></div>
                    </div>
                </header>
                {/* Slot hiển thị phần nội dung bên trong các form tự custom */}
                <div className="popup-content pl-4 pr-4">{children}</div>
            </div>
        </div>
    );
};

export default Popup;
