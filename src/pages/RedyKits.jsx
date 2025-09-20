import React from "react";
import ReadyKitsRow from "../shared/ready-made-kits";
import { useNavigate } from "react-router";

export default function RedyKits() {
    const navigate = useNavigate()
    return (
        <div className="mt-10 mb-10 flex flex-col items-center">
            <div className="mb-10">

                <h1 className="text-[30px]">Готовые наборы</h1>
            </div>
            <div className="flex flex-col items-center">
                <ReadyKitsRow />
                <button onClick={() => navigate("/dessertCatalog")} className="cursor-pointer mt-20 text-black bg-[#F7F7F7] border px-5 py-3 border-[#4E9DD3] ">Показать ещё</button>
            </div>
        </div>
    )
}

RedyKits