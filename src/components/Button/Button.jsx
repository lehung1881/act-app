import React, { useState } from "react";
import "./Button.scss";

const Button = ({
    radius = "4px",
    dropdown,
    dropdownMenu = [],
    color,
    textColor = "white",
    size,
    onClick,
    onClickItem,
    children,
}) => {
    const styleBtn = {
        borderRadius: radius,
        border:
            color == "transparent" ? "1px solid var(--btn-border-color)" : "",
    };

    const customBgBtn = {
        backgroundColor: color ? color : "#2ca01c",
        color: color == "transparent" ? "var(--btn-text-color-black)" : textColor,
        height: size == "large" ? "32px" : size == "medium" ? "30px" : "28px",
    };
    //Click dropdown
    const [isShowDropDown, setIsShowDropdown] = useState(false);
    const onClickDropdown = () => {
        setIsShowDropdown(!isShowDropDown);
    };
    //Click item
    const onClickDropItem = (item) => {
        onClickItem(item);
        setIsShowDropdown(false);
    };
    //Click out side
    return (
        <div className="relative text-[13px] w-fit">
            <div className="flex w-fit overflow-hidden" style={styleBtn}>
                <button
                    className={`btn py-1.5 ${dropdown ? 'pr-3 pl-4' : 'px-4'}`}
                    style={customBgBtn}
                    onClick={onClick}
                >
                    {children}
                </button>
                {/* Phần Button dropdown */}
                {dropdown && (
                    <button
                        className={`btn flex items-center justify-center w-[30px] relative`}
                        style={customBgBtn}
                        onClick={onClickDropdown}
                    >
                        <div
                            className={`line ${
                                color == "transparent"
                                    ? "bg-[var(--btn-border-color)]"
                                    : "bg-white"
                            }`}
                        ></div>
                        <div
                            className={`ic ic-16 mr-1 ${
                                color == "transparent"
                                    ? "ic-arrow-dropdown"
                                    : "ic-arrow-up--white"
                            }`}
                        ></div>
                    </button>
                )}
            </div>
            {isShowDropDown && (
                <div className="dropdownMenu absolute right-0 bg-white py-0.5 w-max rounded-[2px] z-[999]">
                    {dropdownMenu.map((dropItem) => (
                        <div
                            onClick={() => onClickDropItem(dropItem)}
                            key={dropItem.dropItemKey}
                            className="dropdownItem font-normal flex items-center w-full px-2 h-[28px] cursor-pointer text-pr-hover"
                        >
                            {dropItem.dropItemText}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Button;
