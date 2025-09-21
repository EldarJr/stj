import React from "react";

export default function MnkValue() {
    return (
        <div>
            <div className="flex flex-col items-center gap-10 bg-[#F7F7F7] ">
                <div className="mt-5">
                    <nav className="flex items-center text-sm text-gray-500 space-x-1">
                        <a href="/" className="hover:underline">Главная</a>
                        <span>{'>'}</span>
                        <a href="/delivery" className="text-gray-500 hover:underline">
                            Собрать набор
                        </a>
                        <span>{'>'}</span>
                        <a href="/delivery" className="text-blue-500 hover:underline">
                            Выбрать количество
                        </a>
                    </nav>
                </div>

                <div className="flex flex-col items-center gap-15">
                    <div>
                        <h1 className="text-[30px] font-medium">Выберите количество</h1>
                    </div>
                    <div className="flex flex-col items-center gap-10">
                        <div className="flex flex-row items-center gap-10">
                            <div className="flex flex-col items-center bg-white w-[270px] h-full">
                                <div>
                                    <img src="/Mnk/mnk.1.svg" alt="" />
                                </div>
                                <div className="flex flex-col items-center mb-5 gap-1">
                                    <h1 className="font-medium">Набор из 6 макарон</h1>
                                    <h1 className="text-red-500 ">350 руб.</h1>
                                </div>
                            </div>
                            <div className="flex flex-col items-center bg-white w-[270px] h-full">
                                <div>
                                    <img src="/Mnk/mnk.2.svg" alt="" />
                                </div>
                                <div className="flex flex-col items-center mb-5 gap-1">
                                    <h1 className="font-medium">Набор из 12 макарон</h1>
                                    <h1 className="text-red-500 ">700 руб.</h1>
                                </div>
                            </div>
                            <div className="flex flex-col items-center bg-white w-[270px] h-full">
                                <div>
                                    <img src="/Mnk/mnk.3.svg" alt="" />
                                </div>
                                <div className="flex flex-col items-center mb-5 gap-1">
                                    <h1 className="font-medium">Набор из 24 макарон</h1>
                                    <h1 className="text-red-500 ">1400 руб..</h1>
                                </div>
                            </div>
                            <div className="flex flex-col items-center bg-white w-[270px] h-full">
                                <div>
                                    <img src="/Mnk/mnk.4.svg" alt="" />
                                </div>
                                <div className="flex flex-col items-center mb-5 gap-1">
                                    <h1 className="font-medium">Набор из 48 макарон</h1>
                                    <h1 className="text-red-500 ">2800 руб..</h1>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-10">
                            <div className="flex flex-col items-center bg-white w-[270px] h-full">
                                <div>
                                    <img src="/Mnk/mnk.5.svg" alt="" />
                                </div>
                                <div className="flex flex-col items-center mb-5 gap-1">
                                    <h1 className="font-medium">Набор из 40 макарон</h1>
                                    <h1 className="text-red-500 ">3000 руб..</h1>
                                </div>
                            </div>
                            <div className="flex flex-col items-center bg-white w-[270px] h-full">
                                <div>
                                    <img src="/Mnk/mnk.5.svg" alt="" />
                                </div>
                                <div className="flex flex-col items-center mb-5 gap-1">
                                    <h1 className="font-medium">Набор из 70 макарон</h1>
                                    <h1 className="text-red-500 ">5000 руб..</h1>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

MnkValue()