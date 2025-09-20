import React from "react";

export default function TeasteGuarantee() {
    return (
        <div className="flex flex-col items-center">
            <div className="mt-10">
                <nav className="flex items-center text-sm text-gray-500 space-x-1">
                    <a href="/" className="hover:underline">Главная</a>
                    <span>{'>'}</span>
                    <a href="/delivery" className="text-blue-500 hover:underline">
                        Гарантии вкуса и качества
                    </a>
                </nav>
            </div>

            <div className="flex flex-col items-center text-center">
                <h1 className="text-[30px] p-5">Гарантии вкуса и качества</h1>
                <p className="w-[600px] pb-10">При изготовлении пирожных мы используем только натуральные ингредиенты, избегая использования конвер</p>
            </div>
            <div className="flex flex-wrap justify-center lg:flex-row items-center mb-15 gap-5">
                <div className="flex flex-col items-center text-center">
                    <img src="/teaste/t.1.svg" alt="" />
                    <h1 className="w-[270px] h-[50px]">100% <br />миндальная мука</h1>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img src="/teaste/t.2.svg" alt="" />
                    <h1 className="w-[270px] h-[50px]">100% <br />безопасные пищевые красители</h1>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img src="/teaste/t.3.svg" alt="" />
                    <h1 className="w-[270px] h-[50px]">100% <br />фруктовые пюре и натруральные ингредиенты</h1>
                </div>
            </div>
        </div>
    )
}

TeasteGuarantee