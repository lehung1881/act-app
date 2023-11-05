import React, { useState } from "react";
import "./Input.scss";

const Input = ({
    label = "",
    value,
    onChange = () => {},
    placeholder = "",
    height = "26px",
    required,
    disabled = false,
}) => {
    const handleInputChange = (event) => {
        validateInput(event.target.value);
        onChange(event.target.value);
    };

    //validate
    const [isError, setIsError] = useState(false);
    const [showError, setShowError] = useState(false);
    const [textError, setTextError] = useState("");
    const textRequired = "không được để trống.";
    const validateInput = (value) => {
        if (required) {
            if (value == "") {
                setIsError(true);
                setTextError(
                    label.trim()
                        ? `${label} ${textRequired}`
                        : `Trường này ${textRequired}`
                );
            } else {
                setIsError(false);
                setTextError("");
            }
        }
    };

    const handleMouseOver = () => {
        if (isError) {
            setShowError(isError);
        }
    };
    const handleMouseLeave = () => {
        if (showError) {
            setShowError(false);
        }
    };
    return (
        <div className={`flex flex-col h-fit gap-y-1 w-full relative`}>
            {label.trim() != "" && (
                <label className="text-[12px] font-bold leading-3 label-color">
                    {label}{" "}
                    {required && <span className="text-[red]">{" *"}</span>}
                </label>
            )}
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                className={`input-text rounded-sm px-2 w-full label-color font-normal ${
                    disabled ? "input--readonly" : ""
                }`}
                placeholder={placeholder}
                style={{
                    height: height,
                    border: isError ? "1px solid red" : "",
                }}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
                disabled={disabled}
            />
            {showError && isError && (
                <div
                    className="input-error absolute top-[calc(100%+4px)] 
								left-2/4 translate-x-[-50%] bg-[#f06262] 
								text-[12px] font-medium px-1.5 py-0.5 rounded-sm 
								text-white w-max"
                >
                    {textError}
                </div>
            )}
        </div>
    );
};

export default Input;
