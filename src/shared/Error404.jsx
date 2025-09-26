import React from "react";
import { useNavigate } from "react-router";

export default function Error() {
    const navigate = useNavigate()
    return (
        <div >
            <div className="bg-[#49387A] w-full h-[550px] flex flex-col items-center justify-center relative">
                <h1 className="text-white font-light ">Извините, страница не найдена</h1>
                <img className=" z-20 mt-10" src="/Error/er.1.svg" alt="" />
                <img className="absolute top-35" src="/Error/er.2.svg" alt="" />
                <img className="absolute" src="/Error/er.3.svg" alt="" />
                <img className="absolute" src="/Error/er.4.svg" alt="" />
                <img className="absolute z-30 w-[150px] sm:w-[200px] md:w-[230px] lg:w-[250px]" src="/Error/er.5.svg" alt="" />
                <button c onClick={() => navigate("/")} className=" z-20 cursor-navigate border border-[#4E9DD3] text-white px-25 py-3 mt-20">Назад</button>
            </div>

        </div>
    )
}