import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EstUs() {
    const navigate = useNavigate();
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const isOptionSelected = selectedOption !== null;

    return (
        <div className="bg-[#F7F7F7] w-full h-full flex flex-col items-center">
            <div className="flex flex-col items-center text-center mt-10 mb-20">
                <h1 className="text-[40px] font-medium">Оцените нас</h1>
                <p className="text-gray-500">С какой вероятностью вы порекомендуете нас друзьям?</p>
            </div>
           
            <div className="hidden lg:flex flex-row justify-center gap-5 mb-10">
               
                <div className="flex flex-col items-center rounded-lg border border-gray-300 w-full">
                    <div className="flex flex-col items-center justify-center bg-[#F7EBE5] w-full h-[40px] rounded-tl-lg rounded-tr-lg">
                        <img className="mb-10" src="/Est/est.1.svg" alt="" />
                    </div>
                    <div className="rounded-bl-lg rounded-br-lg flex flex-row items-center justify-center gap-3 bg-white p-3 w-full">
                        <input
                            type="radio"
                            id="recommend-1"
                            name="recommendation"
                            className="sr-only peer"
                            value="Точно не порекомендую"
                            checked={selectedOption === "Точно не порекомендую"}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="recommend-1" className="w-6 h-6 rounded-full border-2 border-gray-400 cursor-pointer flex items-center justify-center transition-all duration-300 peer-checked:bg-blue-500 peer-checked:border-blue-500">
                            <svg className="w-4 h-4 text-white opacity-0 transition-opacity duration-300 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </label>
                        <h1>Точно <br /> не порекомендую</h1>
                    </div>
                </div>

               
                <div className="flex flex-col items-center rounded-lg border border-gray-300 w-full h-full ">
                    <div className="flex flex-col items-center justify-center bg-[#F7EBE5] w-full h-[40px] rounded-tl-lg rounded-tr-lg">
                        <img className="mb-10" src="/Est/est.2.svg" alt="" />
                    </div>
                    <div className="rounded-bl-lg rounded-br-lg flex flex-row items-center justify-center gap-3 bg-white p-3 w-full">
                        <input
                            type="radio"
                            id="recommend-2"
                            name="recommendation"
                            className="sr-only peer"
                            value="Скорее не порекомендую"
                            checked={selectedOption === "Скорее не порекомендую"}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="recommend-2" className="w-6 h-6 rounded-full border-2 border-gray-400 cursor-pointer flex items-center justify-center transition-all duration-300 peer-checked:bg-blue-500 peer-checked:border-blue-500">
                            <svg className="w-4 h-4 text-white opacity-0 transition-opacity duration-300 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </label>
                        <h1>Скорее <br /> не порекомендую</h1>
                    </div>
                </div>

               
                <div className="flex flex-col items-center rounded-lg border border-gray-300 w-full h-full">
                    <div className="flex flex-col items-center justify-center bg-[#F7EBE5] w-full h-[40px] rounded-tl-lg rounded-tr-lg">
                        <img className="mb-10" src="/Est/est.3.svg" alt="" />
                    </div>
                    <div className="rounded-bl-lg rounded-br-lg flex flex-row items-center justify-center gap-3 bg-white p-3 w-full">
                        <input
                            type="radio"
                            id="recommend-3"
                            name="recommendation"
                            className="sr-only peer"
                            value="Не знаю"
                            checked={selectedOption === "Не знаю"}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="recommend-3" className="w-6 h-6 rounded-full border-2 border-gray-400 cursor-pointer flex items-center justify-center transition-all duration-300 peer-checked:bg-blue-500 peer-checked:border-blue-500">
                            <svg className="w-4 h-4 text-white opacity-0 transition-opacity duration-300 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </label>
                        <div className="w-[140px] h-[50px] flex items-center">
                            <h1>Не знаю</h1>
                        </div>
                    </div>
                </div>

               
                <div className="flex flex-col items-center rounded-lg border border-gray-300 w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.333%-1.25rem)] lg:max-w-[210px]">
                    <div className="flex flex-col items-center justify-center bg-[#F7EBE5] w-full h-[40px] rounded-tl-lg rounded-tr-lg">
                        <img className="mb-10" src="/Est/est.4.svg" alt="" />
                    </div>
                    <div className="rounded-bl-lg rounded-br-lg flex flex-row items-center justify-center gap-3 bg-white p-3 w-full">
                        <input
                            type="radio"
                            id="recommend-4"
                            name="recommendation"
                            className="sr-only peer"
                            value="Скорее порекомендую"
                            checked={selectedOption === "Скорее порекомендую"}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="recommend-4" className="w-6 h-6 rounded-full border-2 border-gray-400 cursor-pointer flex items-center justify-center transition-all duration-300 peer-checked:bg-blue-500 peer-checked:border-blue-500">
                            <svg className="w-4 h-4 text-white opacity-0 transition-opacity duration-300 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </label>
                        <h1>Скорее <br /> порекомендую</h1>
                    </div>
                </div>

               
                <div className="flex flex-col items-center rounded-lg border border-gray-300 w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.333%-1.25rem)] lg:max-w-[210px]">
                    <div className="flex flex-col items-center justify-center bg-[#F7EBE5] w-full h-[40px] rounded-tl-lg rounded-tr-lg">
                        <img className="mb-10" src="/Est/est.5.svg" alt="" />
                    </div>
                    <div className="rounded-bl-lg rounded-br-lg flex flex-row items-center justify-center gap-3 bg-white p-3 w-full">
                        <input
                            type="radio"
                            id="recommend-5"
                            name="recommendation"
                            className="sr-only peer"
                            value="Обязательно порекомендую"
                            checked={selectedOption === "Обязательно порекомендую"}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="recommend-5" className="w-6 h-6 rounded-full border-2 border-gray-400 cursor-pointer flex items-center justify-center transition-all duration-300 peer-checked:bg-blue-500 peer-checked:border-blue-500">
                            <svg className="w-4 h-4 text-white opacity-0 transition-opacity duration-300 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </label>
                        <h1>Обязательно <br /> порекомендую</h1>
                    </div>
                </div>
            </div>

            <div className="lg:hidden flex  flex-wrap  justify-center gap-5 mb-10">
                {/* Опция 1 */}
                <div className="flex flex-col items-center rounded-lg border border-gray-300 w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.333%-1.25rem)] lg:max-w-[210px]">
                    <div className="flex flex-col items-center justify-center bg-[#F7EBE5] w-full h-[40px] rounded-tl-lg rounded-tr-lg">
                        <img className="mb-10" src="/Est/est.1.svg" alt="" />
                    </div>
                    <div className="rounded-bl-lg rounded-br-lg flex flex-row items-center justify-center gap-3 bg-white p-3 w-full">
                        <input
                            type="radio"
                            id="recommend-1"
                            name="recommendation"
                            className="sr-only peer"
                            value="Точно не порекомендую"
                            checked={selectedOption === "Точно не порекомендую"}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="recommend-1" className="w-6 h-6 rounded-full border-2 border-gray-400 cursor-pointer flex items-center justify-center transition-all duration-300 peer-checked:bg-blue-500 peer-checked:border-blue-500">
                            <svg className="w-4 h-4 text-white opacity-0 transition-opacity duration-300 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </label>
                        <h1>Точно <br /> не порекомендую</h1>
                    </div>
                </div>

                {/* Опция 2 */}
                <div className="flex flex-col items-center rounded-lg border border-gray-300 w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.333%-1.25rem)] lg:max-w-[210px]">
                    <div className="flex flex-col items-center justify-center bg-[#F7EBE5] w-full h-[40px] rounded-tl-lg rounded-tr-lg">
                        <img className="mb-10" src="/Est/est.2.svg" alt="" />
                    </div>
                    <div className="rounded-bl-lg rounded-br-lg flex flex-row items-center justify-center gap-3 bg-white p-3 w-full">
                        <input
                            type="radio"
                            id="recommend-2"
                            name="recommendation"
                            className="sr-only peer"
                            value="Скорее не порекомендую"
                            checked={selectedOption === "Скорее не порекомендую"}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="recommend-2" className="w-6 h-6 rounded-full border-2 border-gray-400 cursor-pointer flex items-center justify-center transition-all duration-300 peer-checked:bg-blue-500 peer-checked:border-blue-500">
                            <svg className="w-4 h-4 text-white opacity-0 transition-opacity duration-300 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </label>
                        <h1>Скорее <br /> не порекомендую</h1>
                    </div>
                </div>

                {/* Опция 3 */}
                <div className="flex flex-col items-center rounded-lg border border-gray-300 w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.333%-1.25rem)] lg:max-w-[210px]">
                    <div className="flex flex-col items-center justify-center bg-[#F7EBE5] w-full h-[40px] rounded-tl-lg rounded-tr-lg">
                        <img className="mb-10" src="/Est/est.3.svg" alt="" />
                    </div>
                    <div className="rounded-bl-lg rounded-br-lg flex flex-row items-center justify-center gap-3 bg-white p-3 w-full">
                        <input
                            type="radio"
                            id="recommend-3"
                            name="recommendation"
                            className="sr-only peer"
                            value="Не знаю"
                            checked={selectedOption === "Не знаю"}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="recommend-3" className="w-6 h-6 rounded-full border-2 border-gray-400 cursor-pointer flex items-center justify-center transition-all duration-300 peer-checked:bg-blue-500 peer-checked:border-blue-500">
                            <svg className="w-4 h-4 text-white opacity-0 transition-opacity duration-300 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </label>
                        <div className="w-[140px] h-[50px] flex items-center">
                            <h1>Не знаю</h1>
                        </div>
                    </div>
                </div>

                {/* Опция 4 */}
                <div className="flex flex-col items-center rounded-lg border border-gray-300 w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.333%-1.25rem)] lg:max-w-[210px]">
                    <div className="flex flex-col items-center justify-center bg-[#F7EBE5] w-full h-[40px] rounded-tl-lg rounded-tr-lg">
                        <img className="mb-10" src="/Est/est.4.svg" alt="" />
                    </div>
                    <div className="rounded-bl-lg rounded-br-lg flex flex-row items-center justify-center gap-3 bg-white p-3 w-full">
                        <input
                            type="radio"
                            id="recommend-4"
                            name="recommendation"
                            className="sr-only peer"
                            value="Скорее порекомендую"
                            checked={selectedOption === "Скорее порекомендую"}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="recommend-4" className="w-6 h-6 rounded-full border-2 border-gray-400 cursor-pointer flex items-center justify-center transition-all duration-300 peer-checked:bg-blue-500 peer-checked:border-blue-500">
                            <svg className="w-4 h-4 text-white opacity-0 transition-opacity duration-300 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </label>
                        <h1>Скорее <br /> порекомендую</h1>
                    </div>
                </div>

                {/* Опция 5 */}
                <div className="flex flex-col items-center rounded-lg border border-gray-300 w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.333%-1.25rem)] lg:max-w-[210px]">
                    <div className="flex flex-col items-center justify-center bg-[#F7EBE5] w-full h-[40px] rounded-tl-lg rounded-tr-lg">
                        <img className="mb-10" src="/Est/est.5.svg" alt="" />
                    </div>
                    <div className="rounded-bl-lg rounded-br-lg flex flex-row items-center justify-center gap-3 bg-white p-3 w-full">
                        <input
                            type="radio"
                            id="recommend-5"
                            name="recommendation"
                            className="sr-only peer"
                            value="Обязательно порекомендую"
                            checked={selectedOption === "Обязательно порекомендую"}
                            onChange={handleOptionChange}
                        />
                        <label htmlFor="recommend-5" className="w-6 h-6 rounded-full border-2 border-gray-400 cursor-pointer flex items-center justify-center transition-all duration-300 peer-checked:bg-blue-500 peer-checked:border-blue-500">
                            <svg className="w-4 h-4 text-white opacity-0 transition-opacity duration-300 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </label>
                        <h1>Обязательно <br /> порекомендую</h1>
                    </div>
                </div>
            </div>
            <div className='mb-10'>
                <button
                    onClick={() => navigate("/estUsTwo")}
                    className={`rounded-lg font-medium py-3 px-10 transition-colors duration-200 ease-in-out w-full max-w-sm ${isOptionSelected ? 'bg-[#E7426A] hover:bg-red-600 cursor-pointer text-white' : 'bg-gray-400 cursor-not-allowed'}`}
                    disabled={!isOptionSelected}>Оформить заказ
                </button>
            </div>
        </div>
    );
}