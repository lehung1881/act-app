import React, { useState } from "react";

const RadioGroup = ({ items = [], defaultValue = 1, vertical }) => {
    const [checked, setChecked] = useState(defaultValue);
    return (
        <div
            className={`radio-group ${
                vertical ? "flex flex-col gap-3" : "flex gap-5"
            } `}
        >
            {items.map((item) => (
                <div
                    key={item.value}
                    className="flex items-center relative h-[19px]"
                >
                    <input
                        type="radio"
                        id={item.value}
                        checked={checked == item.value}
                        onChange={() => setChecked(item.value)}
                        className={`w-[28px] h-[20px] z-[1] opacity-0 cursor-pointer`}
                    />
                    <div
                        className={`ic2 ic-20 rounded-[50%] absolute z-0 ${
                            checked == item.value
                                ? "ic2-radio-enable"
                                : "ic2-radio-disable"
                        }`}
                    ></div>
                    <label htmlFor={item.value} className="text-[13px] cursor-pointer">
                        {item.text}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default RadioGroup;
