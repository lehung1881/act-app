import React from "react";
import { Routes, Route } from "react-router-dom";
import DIList from "../view/DIList";
import DIStockList from "../view/DI/DIStockList";
import DIInventoryItemList from "../view/DI/DIInventoryItemList";

const Content = () => {
    return (
        <div className="app-content flex-1 px-5">
            <Routes>
                <Route path="/app/DI" element={<DIList />} />
                <Route path="/app/DI/DIStock" element={<DIStockList />} />
                <Route path="/app/DI/DIInventoryItem" element={<DIInventoryItemList />} />
            </Routes>
        </div>
    );
};

export default Content;
