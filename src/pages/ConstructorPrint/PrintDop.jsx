import React, { useState } from "react";
import usePrintStore from "../../app/state/usePrintStore";
import { useNavigate } from "react-router";

export default function PrintDop() {
    // Получаем состояние и функции из Zustand
    const { quantity, price, cart, addDopItem, removeDopItem, dopItems } = usePrintStore();
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenMini, setIsModalOpenMini] = useState(false);

    const flavors = [
        { id: 1, name: 'Открыточка с пожеланием', description: 'Сезонный вкус: молочный шоколад, отборные свежие бананы.', image: '/Mnk/mnk.15.svg', price: 30 },
        { id: 2, name: 'Открыточка с пожеланием 2', description: 'Сезонный вкус: молочный шоколад, отборные свежие бананы.', image: '/Mnk/mnk.15.svg', price: 50 },
        { id: 3, name: 'Лента атласная с пожеланием', description: 'Сезонный вкус: молочный шоколад, отборные свежие бананы.', image: '/Mnk/mnk.15.svg', price: 0 },
        { id: 4, name: 'Набор эклеров 6 шт.', description: 'Тропический и яркий вкус. Отлично подходит для лета.', image: '/Mnk/mnk.15.svg', price: 450 },
    ];

    // Вычисляем общую стоимость
    const dopTotal = dopItems.reduce((sum, item) => sum + item.price, 0);
    const finalPrice = price + dopTotal;

    return (
        <div>
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
                        {flavors.map(flavor => (
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
                                    <div className="flex justify-center items-center">
                                        {/* Кнопка "-" больше не нужна, так как мы будем удалять элементы из боковой панели */}
                                        <button
                                            className="w-6 h-6 flex items-center justify-center border border-gray-300 text-gray-600 rounded-md hover:bg-gray-200"
                                            onClick={() => addDopItem(flavor)}>+</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-50 rounded-lg shadow-md p-6 flex-shrink-0 lg:w-80 h-full flex flex-col">
                        <div className="text-lg text-center font-medium mb-4">
                            Набор {quantity} шт.
                            <span className="text-red-500"> {price} руб.</span>
                        </div>
                        <hr className="border-gray-200 mb-4" />
                        <ul className="space-y-3 mb-6 overflow-y-auto flex-grow">
                            {dopItems.map(item => (
                                <li key={item.uniqueId} className="flex justify-between items-center bg-gray-100 p-2 rounded-md">
                                    <div className="flex items-center gap-2">
                                        <img src={item.image} alt={item.name} className="w-8 h-8 rounded-full" />
                                        <span className="text-sm">{item.name}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-red-500 font-medium whitespace-nowrap">{item.price} руб.</span>
                                        <button onClick={() => removeDopItem(item.uniqueId)} className="text-gray-500 hover:text-red-500">
                                            &times;
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-auto">
                            <hr className="border-gray-200 mb-4" />
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-medium">Итого:</span>
                                <span className="text-red-500 font-semibold">{finalPrice} руб.</span>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className={`cursor-pointer w-full font-medium py-3 rounded-lg transition duration-300 bg-[#E7426A] text-white mb-2`}
                            >
                                ГОТОВО
                            </button>
                        </div>
                    </div>
                </div>

                {/* Модальные окна */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-md w-full relative">
                            <button onClick={() => setIsModalOpen(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <h2 className="text-2xl font-medium text-center mb-6">Ваш выбор:</h2>
                            <div className="flex flex-col space-y-4 text-gray-700">
                                <div className="flex justify-between items-start font-medium text-lg">
                                    <span>Набор макарон {quantity} шт.</span>
                                    <span className="text-red-500 whitespace-nowrap">{price} руб.</span>
                                </div>
                                <ul className="text-base text-gray-600 pl-4 space-y-1">
                                    {cart.map((item, index) => (
                                        <li key={item.id}>
                                            {item.name} {item.count} шт. {/* Здесь нужно добавить логику для отображения имени и количества макаронов */}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                                    {dopItems.map(item => (
                                        <div key={item.uniqueId} className="flex justify-between items-center text-base">
                                            <span>{item.name}</span>
                                            <span className="text-red-500 whitespace-nowrap">{item.price} руб.</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex justify-between items-center mt-6 pt-4 border-t-2 border-gray-200 font-bold text-xl">
                                <span>Итого:</span>
                                <span className="text-red-500">{finalPrice} руб.</span>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 mt-6">
                                <button onClick={() => { setIsModalOpenMini(true); setIsModalOpen(false); }} className="flex-1 border-2 border-blue-400 text-blue-500 font-medium py-3 rounded-lg hover:bg-blue-50 transition duration-300">
                                    Добавить в корзину
                                </button>
                                <button onClick={() => navigate("/basket")} className="flex-1 bg-[#E7426A] text-white font-medium py-3 rounded-lg hover:bg-red-600 transition duration-300">
                                    Оформить сейчас
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {isModalOpenMini && (
                    <div className="fixed inset-0 bg-gray-400 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-lg max-w-md w-full relative">
                            <button onClick={() => setIsModalOpenMini(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <h2 className="text-2xl font-bold text-center mb-6">Готово!</h2>
                            <div className="flex flex-col sm:flex-row gap-4 mt-6">
                                <button onClick={() => navigate("/")} className="flex-1 border-2 border-blue-400 text-blue-500 font-medium py-3 rounded-lg hover:bg-blue-50 transition duration-300">
                                    На главную
                                </button>
                                <button onClick={() => navigate("/basket")} className="flex-1 bg-[#E7426A] text-white font-medium py-3 rounded-lg hover:bg-red-600 transition duration-300">
                                    Перейти в корзину
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}