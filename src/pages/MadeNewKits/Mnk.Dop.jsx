import React from "react";
import { useMnkStore } from '../../app/state/useMnkStore';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MnkDop() {
    const navigate = useNavigate();


    const {
        selectedKit,
        dop,
        addDopMacaron,
        removeDopMacaron,
        deleteDopMacaron,
    } = useMnkStore();

    const handleAddClick = (macaron) => {
        addDopMacaron(macaron);
    };

    const totalDopPrice = dop.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleRemoveClick = (id) => {
        deleteDopMacaron(id);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenMini, setIsModalOpenMini] = useState(false);


    const flavors = [
        { id: 1, name: 'Открыточка с пожеланием', description: 'Сезонный вкус: молочный шоколад, отборные свежие бананы.', image: '/Mnk/mnk.15.svg', price: 30 },
        { id: 2, name: 'Открыточка с пожеланием 2', description: 'Сезонный вкус: молочный шоколад, отборные свежие бананы.', image: '/Mnk/mnk.15.svg', price: 50 },
        { id: 3, name: 'Лента атласная с пожеланием', description: 'Сезонный вкус: молочный шоколад, отборные свежие бананы.', image: '/Mnk/mnk.15.svg', price: 0 },
        { id: 4, name: 'Набор эклеров 6 шт.', description: 'Тропический и яркий вкус. Отлично подходит для лета.', image: '/Mnk/mnk.15.svg', price: 450 },
    ];

    return (
        <div className="bg-[#F7F7F7] pt-10 pb-10 min-h-screen">

            <div className="mt-5 w-full flex flex-col items-center justify-center mb-10">
                <nav className="flex items-center text-sm text-gray-500 space-x-1">
                    <a href="/" className="hover:underline">Главная</a>
                    <span>{'>'}</span>
                    <a href="/delivery" className="text-gray-500 hover:underline">
                        Собрать набор
                    </a>
                    <span>{'>'}</span>
                    <a href="/delivery" className="text-gray-500 hover:underline">
                        Выбрать количество
                    </a>
                    <span>{'>'}</span>
                    <a href="/delivery" className="text-blue-500 hover:underline">
                        Дополнительно
                    </a>
                </nav>
                <h1 className='text-[30px] font-medium mt-10'>Дополнительно</h1>
            </div>


            <div className="flex flex-col lg:flex-row lg:justify-center gap-8 lg:gap-12 w-full max-w-[1200px] mx-auto">

                <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {flavors.map(flavor => {
                        const itemInDop = dop.find(item => item.id === flavor.id);
                        const quantity = itemInDop ? itemInDop.quantity : 0;
                        return (
                            <div key={flavor.id} className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center">
                                <img src={flavor.image} alt={flavor.name} />
                                <div className="flex items-start text-start flex-col mb-4 mt-5">
                                    <h2 className="text-xl font-medium mb-1">{flavor.name}</h2>
                                    <p className="text-gray-500 text-sm">{flavor.description}</p>
                                </div>
                                <div className="flex justify-around flex-row  items-center  border-t border-gray-300 pt-2 w-full">
                                    <div className="text-red-500 font-semibold">
                                        {flavor.price} руб
                                    </div>
                                    <div className="flex justify-center items-center   ">
                                        <button
                                            className="w-6 h-6 flex items-center justify-center border border-gray-300 text-gray-600 rounded-md hover:bg-gray-200"
                                            onClick={() => removeDopMacaron(flavor.id)}>-</button>
                                        <span className="w-8 h-8 flex items-center justify-center text-lg">{quantity}</span>
                                        <button
                                            className="w-6 h-6 flex items-center justify-center border border-gray-300 text-gray-600 rounded-md hover:bg-gray-200"
                                            onClick={() => handleAddClick(flavor)}>+</button>
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>


                <div className="bg-gray-50 rounded-lg shadow-md p-6 flex-shrink-0 lg:w-80 h-full">
                    <div className="text-lg text-center font-medium mb-4">
                        Набор {selectedKit.totalQuantity} шт.

                        <span className="text-red-500"> {totalDopPrice} руб.</span>

                    </div>
                    <hr className="border-gray-200 mb-4" />
                    <ul className="space-y-3 mb-6">
                        {dop.map(item => (
                            <li key={item.id} className="flex items-center justify-between text-gray-700">
                                <span>{item.name}</span>
                                <div className="flex items-center">
                                    <button
                                        className='w-8 h-7 border border-gray-300 rounded-md'
                                        onClick={() => removeDopMacaron(item.id)}
                                    >-</button>
                                    <span className="w-8 h-8 flex items-center justify-center text-lg">{item.quantity}</span>
                                    <button
                                        className='w-8 h-7 border border-gray-300 rounded-md'
                                        onClick={() => addDopMacaron(item)}
                                    >+</button>
                                    <button
                                        onClick={() => handleRemoveClick(item.id)}
                                        className="ml-5 text-gray-500 font-bold"
                                    >
                                        ×
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className={`cursor-pointer w-full font-medium py-3 rounded-lg transition duration-300 bg-[#E7426A] text-white mb-2`}
                    >
                        ГОТОВО
                    </button>

                </div>
            </div>


            {isModalOpen && (
                <div class="fixed inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center z-50">
                    <div class="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-md w-full relative">

                        <button onClick={() => setIsModalOpen(false)} class="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <h2 class="text-2xl font-medium text-center mb-6">Ваш выбор:</h2>

                        <div class="flex flex-col space-y-4 text-gray-700">
                            <div class="flex justify-between items-start font-medium text-lg">
                                <span>Набор макарон 12 шт.</span>
                                <span class="text-red-500 whitespace-nowrap">700 руб.</span>
                            </div>

                            <ul class="text-base text-gray-600 pl-4 space-y-1">
                                <li>Трюфель 2 шт.</li>
                                <li>Розмарин 3 шт.</li>
                                <li>Ананас 1 шт.</li>
                                <li>Кокос 4 шт.</li>
                            </ul>

                            <div class="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                                <div class="flex justify-between items-center text-base">
                                    <span>Упаковка с цветами</span>
                                    <span class="text-red-500 whitespace-nowrap">50 руб.</span>
                                </div>
                                <div class="flex justify-between items-center text-base">
                                    <span>Открытка с пожеланием</span>
                                    <span class="text-red-500 whitespace-nowrap">30 руб.</span>
                                </div>
                            </div>
                        </div>

                        <div class="flex justify-between items-center mt-6 pt-4 border-t-2 border-gray-200 font-bold text-xl">
                            <span>Итого:</span>
                            <span class="text-red-500">780 руб.</span>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-4 mt-6">
                            <button onClick={() =>{setIsModalOpenMini(true) , setIsModalOpen(false) } } class="flex-1 border-2 border-blue-400 text-blue-500 font-medium py-3 rounded-lg hover:bg-blue-50 transition duration-300">
                                Добавить в корзину
                            </button>
                            <button onClick={() => navigate("/basket")}  class="flex-1 bg-[#E7426A] text-white font-medium py-3 rounded-lg hover:bg-red-600 transition duration-300">
                                Оформить сейчас
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {isModalOpenMini && (
                <div class="fixed inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center z-50">
                    <div class="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-md w-full relative">

                        <button onClick={() => setIsModalOpenMini(false)}class="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition-colors duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                       

                        <h2 class="text-2xl font-bold text-center mb-6">Готово!</h2>

                        

                        <div class="flex flex-col sm:flex-row gap-4 mt-6">
                            <button onClick={() => navigate("/")} class="flex-1 border-2 border-blue-400 text-blue-500 font-medium py-3 rounded-lg hover:bg-blue-50 transition duration-300">
                                 На главную 
                            </button>
                            <button onClick={() => navigate("/basket")} class="flex-1 bg-[#E7426A] text-white font-medium py-3 rounded-lg hover:bg-red-600 transition duration-300">
                               Перейти в корзину
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}