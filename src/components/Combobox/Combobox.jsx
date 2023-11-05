import React, { useState } from "react";
import "./Combobox.css";

const Combobox = ({
    label,
    required,
    quickAdd,
    displayField,
    valueFiled,
    onClickQuickAdd,
    disabled = false,
	columns = [],
	store
}) => {
    //Xử lý ấn xổ combo
    const [isShowDropDown, setIsShowDropdown] = useState(false);
    const handleClickDropdown = () => {
        setIsShowDropdown(!isShowDropDown);
    };
    return (
        <div className="flex flex-col gap-y-1 w-full">
            {label.trim() != "" && (
                <label className="text-[12px] font-bold leading-3 label-color">
                    {label}
                    {required && <span className="text-[red]">{" *"}</span>}
                </label>
            )}
            <div
                className={`combo-container flex items-center border-field rounded-sm w-full ${
                    disabled ? "input--readonly" : ""
                }`}
            >
                <div className="flex-1 flex items-center">
                    <input
                        disabled={disabled}
                        type="text"
                        className={`input-combo pl-2 w-full label-color font-normal h-[18px] text-[13px] leading-[18px]`}
                    />
                </div>
                {quickAdd && (
                    <div
                        className="flex-center ic-24 hover-combo border-r border-solid border-[var(--btn-border-color)]"
                        onClick={!disabled ? onClickQuickAdd : undefined}
                    >
                        <div className="ic ic-16 ic-btn-add"></div>
                    </div>
                )}
                <div
                    className={`ic-24 flex-center hover-combo`}
                    onClick={!disabled ? handleClickDropdown : undefined}
                >
                    <div
                        className={`ic ic-16 ic-arrow-dropdown--black arrow-dropdown--${
                            isShowDropDown ? "open" : "close"
                        }`}
                    ></div>
                </div>
            </div>
			{/* Phần xổ ra */}
        </div>
    );
};
export default Combobox;
