import React from "react";


export default function Th() {
    return (
        <div>
            <div className="bg-[#F7F7F7] w-full h-full flex flex-col items-center gap-10 pb-5 pt-5">
                <div className="text-center ">
                    <h1 className="text-[35px] font-medium">Спасибо за высокую оценку</h1>
                </div>
                <div>
                    <img src="/Est/est.7.svg" alt="" />
                </div>
                <div className="flex flex-col iems-center text-center ">
                    <h2 className="w-[526px] h-[68px] text-gray-700">Напишите отзыв, отправьте нам скриншот в директ <span className="text-red-500">@macaronshopru</span>  и получите 3 эклера в подарок!
                        <br /> 
                        На какой площадке хотите оставить отзыв?
                    </h2>
                </div>
                <div>
                    <button className="border border-red-500 text-red-500 px-10 py-3 hover:bg-red-500 hover:text-white duration-300">На главную</button>
                </div>

                {/* <div className="flex flex-row items-center gap-5">
                    <img className="cursor-navigate" src="/Est/est.8.svg" alt="" />
                    <img src="/Est/est.9.svg" alt="" />
                    <img src="/Est/est.10.svg" alt="" />
                </div> */}

            </div>
        </div>
    )
}

