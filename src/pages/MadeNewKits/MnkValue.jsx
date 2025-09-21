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
                    <div>

                    </div>
                </div>

            </div>
        </div>
    )
}

MnkValue()