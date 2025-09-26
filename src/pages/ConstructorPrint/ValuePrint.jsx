import React from "react";
import { useNavigate } from "react-router";
import usePrintStore from "../../app/state/usePrintStore";

export default function ValuePrint() {
    const navigate = useNavigate();
    const { setPrintOptions } = usePrintStore();

    const handleSelectOption = (quantity, price) => {
        setPrintOptions({ quantity, price }); 
        navigate("/chooseImg");
    };

    return (
        <div>
            <div className="bg-[#F7F7F7] pt-10 flex flex-col items-center gap-5">
                <div className="w-full flex flex-col items-center justify-center mb-10">
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
                    <h1 className='text-[30px] font-medium mt-10'>Выберите вкусы</h1>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-5 rounded-md cursor-pointer mb-5">
                    <div onClick={() => handleSelectOption(9, 950)} className="flex flex-col items-center bg-white w-[270px] p-2">
                        <div>
                            <img src="/Print/p.1.svg" alt="" />
                        </div>
                        <div className="flex flex-col items-center text-center mt-5 gap-10 mb-5">
                            <h1 className="w-[235px] h-[19px] font-medium">Набор из 9 макарон с индивидуальным дизайном</h1>
                            <p className="text-red-500 font-medium">950 руб.</p>
                        </div>
                    </div>
                    <div onClick={() => handleSelectOption(16, 1500)} className="flex flex-col items-center bg-white w-[270px] p-2">
                        <div>
                            <img src="/Print/p.1.svg" alt="" />
                        </div>
                        <div className="flex flex-col items-center text-center mt-5 gap-10 mb-5">
                            <h1 className="w-[235px] h-[19px] font-medium">Набор из 16 макарон с индивидуальным дизайном</h1>
                            <p className="text-red-500 font-medium">1500 руб.</p>
                        </div>
                    </div>
                    <div onClick={() => handleSelectOption(22, 2500)} className="flex flex-col items-center bg-white w-[270px] p-2">
                        <div>
                            <img src="/Print/p.1.svg" alt="" />
                        </div>
                        <div className="flex flex-col items-center text-center mt-5 gap-10 mb-5">
                            <h1 className="w-[235px] h-[19px] font-medium">Набор в форме сердца из 22 макарон</h1>
                            <p className="text-red-500 font-medium">2500 руб.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}