import React from "react";
import { useNavigate } from "react-router";


export default function DessertCatalog() {
    const navigate = useNavigate()
    return (
        <div className="bg-[#F7F7F7] w-full h-full">

            <div className="flex flex-col items-center pt-10 pb-5">
                <nav className="flex items-center text-sm text-gray-500 space-x-1">
                    <a href="/" className="hover:underline">Главная</a>
                    <span>{'>'}</span>
                    <a href="/delivery" className="text-blue-500 hover:underline">
                        Каталог десертов
                    </a>
                </nav>
                <h1 className="text-[30px] font-medium">Каталог десертов</h1>
            </div>

            <div className="flex flex-col items-center px-4 lg:px-32 ">
                <div className="bg-[#FEB0E1] w-full min-h-[385px] relative overflow-hidden lg:flex lg:flex-row lg:items-center lg:justify-start lg:gap-10">


                    <div className="lg:hidden absolute -left-16 sm:-left-8 top-1/2 -translate-y-1/2 w-[165px] h-[326px] overflow-hidden">
                        <img src="/dessertC/d.1.2.svg" alt="Пирожные макарон" className="w-full h-full object-cover" />
                    </div>


                    <div className="hidden lg:block ">
                        <img src="/dessertC/d.1.svg" alt="Пирожные макарон" className="object-contain" />
                    </div>


                    <div className="text-center mt-20 lg:mt-0 lg:ml-0 lg:pl-0 flex-grow">
                        <h1 className="lg:text-[30px] text-[25px] font-medium">
                            Пирожные макарон
                        </h1>
                        <p className="lg:w-[470px] w-[350px] mx-auto">
                            Самые классные, самые лучшие, свежие, воздушные, хрустящие макарушки. лучшее, что мы умеем делать.
                        </p>
                        <div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-5">
                            <button onClick={() => navigate("/redyKits")} className="cursor-pointer font-medium border px-9 py-3 border-[#4E9DD3]"> Готовые наборы</button>
                            <button onClick={() => navigate("/mnkValue")} className="cursor-pointer font-medium border px-5 py-3 border-[#4E9DD3]">Собрать свой набор</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="hidden lg:flex flex-row items-center justify-center mt-5 pb-10 gap-10">
                <div className="bg-[#FFB84E] w-[369px] h-[341px] flex flex-col items-center justify-center z-10 relative rounded-lg">
                    <img className="z-30" src="/dessertC/d.2.svg" alt="" />
                    <img className="z-20 absolute top-44" src="/dessertC/d.2.1.svg" alt="" />
                    <h1 className="text-white mt-10 z-30">Трубочки со сгущенкой</h1>
                </div>

                <div className="bg-[#FEB0E1] w-[369px] h-[341px] flex flex-col items-center justify-center z-10 relative rounded-lg">
                    <img className="z-30" src="/dessertC/d.3.svg" alt="" height={180} />
                    <img className="z-20 absolute top-44" src="/dessertC/d.3.2.svg" alt="" />
                    <h1 className="text-white mb-5 z-30">Эклеры</h1>
                </div>

                <div className="bg-[#FECE95] w-[369px] h-[341px] flex flex-col items-center justify-center z-10 relative rounded-lg">
                    <img className="z-30" src="/dessertC/d.4.svg" alt="" />
                    <img className="z-20 absolute top-44" src="/dessertC/d.4.3.svg" alt="" />
                    <h1 className="text-white mt-10 z-30">Профитроли</h1>
                </div>
            </div>

           
            <div className="lg:hidden flex flex-col items-center justify-center mt-5 pb-10 gap-10 px-4">
                <div className="flex flex-row gap-5">
                    <div className="bg-[#FFB84E] flex-1 h-[300px] flex flex-col items-center justify-center z-10 relative rounded-lg">
                        <img className="z-30" src="/dessertC/d.2.svg" alt="" />
                        <img className="z-20 absolute top-44" src="/dessertC/d.2.1.svg" alt="" />
                        <h1 className="text-white mt-10 z-30 text-center px-2">Трубочки со сгущенкой</h1>
                    </div>

                    <div className="bg-[#FEB0E1] flex-1 h-[300px] flex flex-col items-center justify-center z-10 relative rounded-lg">
                        <img className="z-30" src="/dessertC/d.3.svg" alt="" height={160} />
                        <img className="z-20 absolute top-44" src="/dessertC/d.3.2.svg" alt="" />
                        <h1 className="text-white mb-5 z-30">Эклеры</h1>
                    </div>
                </div>

                <div className="bg-[#B3D9F3] w-full h-[200px] rounded-lg flex items-center justify-end  relative">
                    <img className="absolute z-20 h-[200px]" src="/dessertC/d.10.svg" alt="" />
                
                    <h1 className="text-[30px] text-white z-30 pr-5">Профитроли</h1>
                </div>
            </div>





            <div className="mt-10 flex flex-col items-center justify-center text-center px-3">

                <div>
                    <h1 className="text-[24px] md:text-[30px]">Хотите попробовать всё сразу?</h1>
                    <p className="text-[15px] mt-3 mb-10">Тогда взгляните на наши комбо-наборы</p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="flex flex-col items-center">
                        <img src="/dessertC/d.5.svg" alt="" className="max-h-[280px]" />
                        <div className="bg-white w-full max-w-[280px]">
                            <div className="flex flex-col text-start pb-6 border-b border-gray-300 p-3">
                                <h1 className="text-[19px]">1 макарон и 1 эклер</h1>
                                <p className="text-gray-500 text-[14px] pb-5">промо-набор</p>
                            </div>
                            <div className="flex flex-row w-full">

                                <div className="flex flex-col justify-center w-1/2 border-r border-gray-300 p-3">
                                    <h2 className="text-gray-500 text-[13px] line-through">160 руб</h2>
                                    <h1 className="text-red-500 font-medium">90 руб</h1>
                                </div>

                                <div className="flex items-center justify-center w-1/2 p-3">
                                    <img src="/dessertC/d.9.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col items-center">
                        <img src="/dessertC/d.6.svg" alt="" className="max-h-[280px]" />
                        <div className="bg-white w-full max-w-[280px]">
                            <div className="flex flex-col text-start pb-6 border-b border-gray-300 p-3">
                                <h1 className="text-[19px]">Всего понемногу</h1>
                                <p className="text-gray-500 text-[14px] break-words">
                                    3 эклера, 4 трубочки, 6 макарун. Вкусы: клубника - базилик
                                </p>
                            </div>
                            <div className="flex flex-row w-full">
                                <div className="flex flex-col justify-center w-1/2 border-r border-gray-300 p-3">
                                    <h2 className="text-gray-500 text-[13px] line-through">160 руб</h2>
                                    <h1 className="text-red-500 font-medium">90 руб</h1>
                                </div>
                                <div className="flex items-center justify-center w-1/2 p-3">
                                    <img src="/dessertC/d.9.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col items-center">
                        <img src="/dessertC/d.7.svg" alt="" className="max-h-[280px]" />
                        <div className="bg-white w-full max-w-[280px]">
                            <div className="flex flex-col text-start pb-6 border-b border-gray-300 p-3">
                                <h1 className="text-[19px]">Ещё побольше</h1>
                                <p className="text-gray-500 text-[14px] break-words">
                                    3 эклера, 4 трубочки, 6 макарун. Вкусы: клубника - базилик
                                </p>
                            </div>
                            <div className="flex flex-row w-full">
                                <div className="flex flex-col justify-center w-1/2 border-r border-gray-300 p-3">
                                    <h2 className="text-gray-500 text-[13px] line-through">160 руб</h2>
                                    <h1 className="text-red-500 font-medium">90 руб</h1>
                                </div>
                                <div className="flex items-center justify-center w-1/2 p-3">
                                    <img src="/dessertC/d.9.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col items-center">
                        <img src="/dessertC/d.8.svg" alt="" className="max-h-[280px]" />
                        <div className="bg-white w-full max-w-[280px]">
                            <div className="flex flex-col text-start pb-6 border-b border-gray-300 p-3">
                                <h1 className="text-[19px]">Ещё побольше</h1>
                                <p className="text-gray-500 text-[14px] break-words">
                                    3 эклера, 4 трубочки, 6 макарун. Вкусы: клубника - базилик
                                </p>
                            </div>
                            <div className="flex flex-row w-full">
                                <div className="flex flex-col justify-center w-1/2 border-r border-gray-300 p-3">
                                    <h2 className="text-gray-500 text-[13px] line-through">160 руб</h2>
                                    <h1 className="text-red-500 font-medium">90 руб</h1>
                                </div>
                                <div className="flex items-center justify-center w-1/2 p-3">
                                    <img src="/dessertC/d.9.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mb-10">
                    <button className="cursor-pointer mt-10 text-black bg-[#F7F7F7] border px-8 py-3 border-[#4E9DD3] ">
                        Все готовые наборы
                    </button>
                </div>
            </div>



        </div>
    )
}

