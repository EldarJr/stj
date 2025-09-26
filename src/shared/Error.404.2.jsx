import React from "react";
import { useNavigate } from "react-router";

export default function ErrorTwo() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="bg-[#F7F7F7] w-full h-[500px] flex flex-col justify-center items-center relative">
                <h1 className="font-medium">Извините, страница не найдена</h1>
                <img className="absolute  bottom-45" src=" /Error/erTwo.1.svg" alt="" width={573} height={208}/>
                <img className="absolute  bottom-45 top-35 sm:top-25 md:top-25 lg:top-25 w-[250px] sm:w-[330px] md:w-[330px] lg:w-[330px]" src="/Error/erTwo.2.svg" alt="" />
                <img className="absolute bottom-45 top-30 left-160 "  src="/Error/erTWo.3.svg" alt="" />
                <button c onClick={() => navigate("/")} className=" z-20 cursor-navigate border border-red-500 text-red-500 px-25 py-3 mt-90 hover:bg-red-500 hover:text-white  transition duration-300">Назад</button>
            </div>
        </div>
    )
}