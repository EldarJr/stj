import React, { useEffect } from "react";
import { useBasketStore } from "../app/state/useBasketStore";

export default function Basket() {
    const basket = useBasketStore((state) => state.basket);
    const removeFromBasket = useBasketStore((state) => state.removeFromBasket);
    const increaseQuantity = useBasketStore((state) => state.increaseQuantity);
    const decreaseQuantity = useBasketStore((state) => state.decreaseQuantity);

    const totalCost = useBasketStore((state) => state.getTotal());
    const totalItemsInBasket = useBasketStore((state) => state.getTotalItems());

    const discount = 0;
    const deliveryCost = 400;
    const finalTotal = totalCost - discount + deliveryCost;

    return (
        <div className="flex flex-col items-center justify-center bg-[#F7F7F7] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center mt-5 mb-8">
                <nav className="flex items-center text-sm text-gray-500 space-x-1 mb-3">
                    <a href="/" className="hover:underline">Главная</a>
                    <span>{'>'}</span>
                    <a href="/delivery" className="text-blue-500 hover:underline">
                        Корзина
                    </a>
                </nav>

                <div className="flex flex-col items-center text-center">
                    <h1 className="text-[30px] font-medium">Ваша корзина</h1>
                    <p className="text-gray-500">{totalItemsInBasket} товара / {totalCost} руб.</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-10 w-full max-w-7xl">

                <div className="flex flex-col items-center flex-grow">
                    <div className="w-full mb-5 mt-5 bg-white rounded-lg p-3 sm:p-5 shadow-sm">
                        {basket.length === 0 ? (
                            <p className="text-xl text-gray-600 text-center py-10">Ваша корзина пуста</p>
                        ) : (
                            <div className="flex flex-col gap-4">
                                {basket.map((item) => (
                                    <div key={item.id} className="relative hidden  lg:flex md:flex flex-col sm:flex-row items-center justify-between border border-gray-200 rounded-md p-3 sm:p-5">
                                        <button onClick={() => removeFromBasket(item.id)} className="absolute top-2 right-2 text-sm text-white">
                                            <img src="/Basket/b.2.svg" alt="Удалить товар" />
                                        </button>
                                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center mb-2 sm:mb-0 text-center sm:text-left">
                                            <img src={item.img} alt={item.name} width={80} height={80} className="rounded-md flex-shrink-0" />
                                            <h2 className="font-medium text-lg">{item.name}</h2>
                                        </div>
                                        <div className="flex items-center gap-2 mx-0 sm:mx-4 mb-2 sm:mb-0 flex-shrink-0">
                                            <button onClick={() => decreaseQuantity(item.id)} className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 text-lg" >-</button>
                                            <span className="text-xl px-2">{item.quantity}</span>
                                            <button onClick={() => increaseQuantity(item.id)} className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 text-lg">+</button>
                                        </div>
                                        <div className="flex flex-row gap-2 text-lg whitespace-nowrap flex-shrink-0 mb-2 sm:mb-0">
                                            Цена:
                                            <span className="text-red-500 font-semibold">{item.price} руб.</span>
                                        </div>
                                    </div>
                                ))}

                                {basket.map((item) => (
                                    <div key={item.id} className="lg:hidden md:hidden  relative flex flex-col p-3 border border-gray-200 rounded-md">
                                        {/* Верхний ряд: изображение, название и кнопка удаления */}
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex items-center gap-3">
                                                <img src={item.img} alt={item.name} width={80} height={80} className="rounded-md flex-shrink-0" />
                                                <h2 className="font-medium text-lg">{item.name}</h2>
                                            </div>
                                            <button onClick={() => removeFromBasket(item.id)} className="text-gray-400 hover:text-gray-600 transition-colors">
                                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>

                                        {/* Нижний ряд: кнопки +/- и цена */}
                                        <div className="flex justify-between items-center pt-3 border-t border-gray-100"> {/* Добавил верхнюю границу для разделения */}
                                            <div className="flex items-center">
                                                <button onClick={() => decreaseQuantity(item.id)} className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 text-lg" >-</button>
                                                <span className="text-xl px-2">{item.quantity}</span>
                                                <button onClick={() => increaseQuantity(item.id)} className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 text-lg">+</button>
                                            </div>
                                            <div className="flex flex-row gap-2 text-lg whitespace-nowrap">
                                                Цена:
                                                <span className="text-red-500 font-semibold">{item.price} руб.</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}



                                <div className="text-[15px] text-gray-500 font-semibold px-0 sm:px-5 py-3 mt-3 pt-3 text-right hidden lg:block">
                                    Общая стоимость Вашей покупки без учета доставки составит: <span className="text-red-500">{totalCost} руб</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="w-full mb-5">
                        <img src="/Basket/b.1.svg" alt="Рекламный баннер" className="w-full h-auto rounded-lg shadow-sm" />
                    </div>

                    <div className="flex flex-col items-center bg-white rounded-lg w-full p-3 sm:p-5 shadow-sm">
                        <h2 className="text-xl font-medium mb-4 text-center">Добавить в заказ</h2>
                        <div className="hidden lg:flex md:flex  flex-col gap-4 w-full">
                            <div className="flex flex-col sm:flex-row items-center justify-between border-b border-[#EDEDF0] pb-3 last:border-b-0 last:pb-0">
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center mb-2 sm:mb-0 text-center sm:text-left">
                                    <img src="/Basket/b.3.svg" alt="Набор эклеров" width={80} height={80} className="rounded-md flex-shrink-0" />
                                    <h2 className="font-medium text-lg">Набор эклеров</h2>
                                </div>
                                <div className="flex items-center gap-2 mx-0 sm:mx-4 mb-2 sm:mb-0 flex-shrink-0">
                                    <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 text-lg" >-</button>
                                    <span className="text-xl px-2">0</span>
                                    <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 text-lg">+</button>
                                </div>
                                <div className="flex flex-row gap-2 text-lg whitespace-nowrap flex-shrink-0 mb-2 sm:mb-0">
                                    Цена:
                                    <span className="text-red-500 font-semibold">400 руб.</span>
                                </div>

                            </div>
                            <div className="flex flex-col sm:flex-row items-center justify-between border-b border-[#EDEDF0] pb-3 last:border-b-0 last:pb-0">
                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center mb-2 sm:mb-0 text-center sm:text-left">
                                    <img src="/Basket/b.4.svg" alt="Набор трубочек со сгущёнкой" width={80} height={80} className="rounded-md flex-shrink-0" />
                                    <h2 className="font-medium text-lg">Набор трубочек со сгущёнкой</h2>
                                </div>
                                <div className="flex items-center gap-2 mx-0 sm:mx-4 mb-2 sm:mb-0 flex-shrink-0">
                                    <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 text-lg" >-</button>
                                    <span className="text-xl px-2">0</span>
                                    <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 text-lg">+</button>
                                </div>
                                <div className="flex flex-row gap-2 text-lg whitespace-nowrap flex-shrink-0 mb-2 sm:mb-0">
                                    Цена:
                                    <span className="text-red-500 font-semibold">400 руб.</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:hidden md:hidden flex flex-col gap-4 w-full">
                            <div className="lg:hidden md:hidden  relative flex flex-col p-3 border border-gray-200 rounded-md">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-3">
                                        <img src="/Basket/b.3.svg" alt="" width={80} height={80} className="rounded-md flex-shrink-0" />
                                        <h2 className="font-medium text-lg">Набор эклеров</h2>
                                    </div>
                                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                                    <div className="flex items-center">
                                        <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 text-lg" >-</button>
                                        <span className="text-xl px-2">0</span>
                                        <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 text-lg">+</button>
                                    </div>
                                    <div className="flex flex-row gap-2 text-lg whitespace-nowrap">
                                        Цена:
                                        <span className="text-red-500 font-semibold">400 руб.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:hidden md:hidden  relative flex flex-col p-3 border border-gray-200 rounded-md">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-3">
                                        <img src="/Basket/b.4.svg" alt="" width={80} height={80} className="rounded-md flex-shrink-0" />
                                        <h2 className="font-medium text-lg">Набор трубочек со сгущёнкой</h2>
                                    </div>
                                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                                    <div className="flex items-center">
                                        <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 text-lg" >-</button>
                                        <span className="text-xl px-2">0</span>
                                        <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md hover:bg-gray-100 text-lg">+</button>
                                    </div>
                                    <div className="flex flex-row gap-2 text-lg whitespace-nowrap">
                                        Цена:
                                        <span className="text-red-500 font-semibold">400 руб.</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="bg-white mt-10 rounded-lg flex flex-col sm:flex-col items-start w-full px-5 py-3 gap-3 lg:hidden flex shadow-sm">
                        <span className="text-gray-700">Промокод:</span>
                        <div className="flex border border-gray-300 w-full rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-200 flex-grow">
                            <input
                                type="text"
                                placeholder="Введите промокод"
                                className="p-3 text-gray-700 placeholder-gray-400 focus:outline-none flex-grow"
                            />
                            <button
                                className="bg-[#E7426A] cursor-pointer hover:bg-red-600 text-white font-medium py-3 px-3 transition-colors duration-200 ease-in-out"
                            >Применить</button>
                        </div>
                    </div>

                    <div className="w-full mt-10 p-3 sm:p-5 bg-white rounded-lg shadow-sm">
                        <div className="text-center mb-6">
                            <h1 className="text-[30px] font-medium">Доставка</h1>
                            <p className="text-gray-600">Укажите контактные данные и выберите способ доставки</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-5 mb-5 w-full">
                            <div className="flex flex-col gap-2 flex-1">
                                <h1 className="font-medium">Ваше имя*</h1>
                                <input className="bg-gray-50 py-3 px-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full" type="text" placeholder="Укажите имя" />
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <h1 className="font-medium">Ваш телефон*</h1>
                                <input className="bg-gray-50 py-3 px-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 w-full" type="text" placeholder="+7 (___) ___-__-__" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 mb-5 w-full">
                            <h1 className="font-medium">Способ доставки:</h1>
                            <div className="flex flex-col sm:flex-row items-center gap-5 w-full">
                                <div className="flex flex-row items-center bg-white w-full sm:w-1/2 rounded-lg p-5 gap-5 border border-gray-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                                    <div>
                                        <img src="/Basket/b.5.svg" alt="Курьерская доставка" className="w-10 h-10" />
                                    </div>
                                    <div>
                                        <h1 className="font-medium">Курьерская доставка</h1>
                                        <p className="text-red-500">400 руб.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center bg-white w-full sm:w-1/2 rounded-lg p-5 gap-5 border border-gray-200 shadow-sm cursor-pointer hover:shadow-md transition-shadow">
                                    <div>
                                        <img src="/Basket/b.6.svg" alt="Самовывоз" className="w-10 h-10" />
                                    </div>
                                    <div>
                                        <h1 className="font-medium">Самовывоз</h1>
                                        <p className="text-red-500">Бесплатно.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5 w-full">
                            <h1 className="font-medium mb-3">Адрес доставки</h1>
                            <div className="flex items-center bg-gray-50 w-full rounded-lg p-5 border border-gray-200">
                                <p className="text-gray-400">Не нужно заполнять при самовывозе</p>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-5 mb-5 w-full">
                            <div className="flex flex-col gap-2 flex-1">
                                <h1 className="font-medium">Дата получения</h1>
                                <div className="flex justify-between items-center bg-white w-full rounded-lg p-3 gap-5 border border-gray-200 cursor-pointer">
                                    <h1 className="font-medium">22.12.2021</h1>
                                    <img src="/Basket/b.7.svg" alt="Выбрать дату" className="w-5 h-5" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <h1 className="font-medium">Время</h1>
                                <div className="flex justify-between items-center bg-white w-full rounded-lg p-3 gap-5 border border-gray-200 cursor-pointer">
                                    <h1 className="font-medium">12:00 - 16:00</h1>
                                    <img src="/Basket/b.7.svg" alt="Выбрать время" className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-5 w-full">
                            <h1 className="font-medium mb-3">Комментарий к заказу</h1>
                            <div className="flex items-center bg-gray-50 w-full rounded-lg p-5 border border-gray-200 min-h-[100px] text-gray-400">
                                Здесь Вы можете написать пожелания, относительно анонимной доставки, текста открытки и другое.
                            </div>
                        </div>
                        <div className="mt-6 mb-5 pb-5 border-b border-gray-300 w-full">
                            <h2 className="font-medium text-xl mb-4">Метод оплаты</h2>
                            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                                <label className="flex items-center cursor-pointer">
                                    <input type="checkbox" name="paymentMethod" value="card" className="hidden peer" />
                                    <div className="w-5 h-5 border border-gray-300 rounded-sm mr-2 peer-checked:bg-pink-500 peer-checked:border-pink-500 flex items-center justify-center transition-all duration-200">
                                        <svg className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Оплата картой онлайн</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input type="checkbox" name="paymentMethod" value="cash" className="hidden peer" checked />
                                    <div className="w-5 h-5 border border-pink-500 bg-pink-500 rounded-sm mr-2 peer-checked:bg-pink-500 peer-checked:border-pink-500 flex items-center justify-center transition-all duration-200">
                                        <svg className="h-4 w-4 text-white opacity-100 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Наличными при получении</span>
                                </label>
                                <label className="flex items-center cursor-pointer">
                                    <input type="checkbox" name="paymentMethod" value="yandex" className="hidden peer" />
                                    <div className="w-5 h-5 border border-gray-300 rounded-sm mr-2 peer-checked:bg-pink-500 peer-checked:border-pink-500 flex items-center justify-center transition-all duration-200">
                                        <svg className="h-4 w-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Яндекс деньги</span>
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col items-center w-full ">
                            <div className="flex flex-row items-center justify-between  gap-5  mb-5 pb-5 border-b border-gray-300 w-full">
                                <h1 className="text-gray-600">Итоговая сумма заказа вместе с доставкой:</h1>
                                <h1 className="text-red-500 text-[20px] font-semibold">{finalTotal} руб.</h1>
                            </div>
                            <button
                                className="bg-[#E7426A] cursor-pointer hover:bg-red-600 text-white rounded-lg font-medium py-3 px-10 transition-colors duration-200 ease-in-out w-full max-w-sm"
                            >Оформить заказ</button>
                            <p className="w-full max-w-sm text-[12px] mt-5 text-center px-2">Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с Договором оферты и разрешаю обработку моих персональных данных в соответствии с Политикой конфиденциальности</p>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex flex-col flex-shrink-0 mt-10 bg-white rounded-lg w-[470px] shadow-sm">
                    {basket.length === 0 ? (
                        <p className="text-xl text-gray-600 text-center py-10">Ваша корзина пуста</p>
                    ) : (
                        <div className="w-full">
                            <div className="bg-white p-5 border-b border-gray-300">
                                <h1 className="text-[20px] font-medium mb-1">Итого:</h1>
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-gray-700">Стоимость товаров</span>
                                    <div className="flex-grow border-b border-dotted mx-2 mt-2"></div>
                                    <span className="text-gray-700 whitespace-nowrap">{totalCost} руб.</span>
                                </div>
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-gray-700">Скидка</span>
                                    <div className="flex-grow border-b border-dotted mx-2 mt-2"></div>
                                    <span className="text-gray-700 whitespace-nowrap">{discount} руб</span>
                                </div>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-gray-700">Доставка</span>
                                    <div className="flex-grow border-b border-dotted mx-2 mt-2"></div>
                                    <span className="text-gray-700 whitespace-nowrap">{deliveryCost} руб.</span>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between px-5 py-3 border-b border-gray-300">
                                <h1 className="text-gray-700 font-bold text-xl">К оплате</h1>
                                <div className="font-semibold text-red-500 text-xl whitespace-nowrap">
                                    {finalTotal} руб.
                                </div>
                            </div>
                            <div className="flex flex-col items-start mt-5 mb-5 px-5">
                                <span className="text-gray-700 mb-2">Промокод:</span>
                                <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-200 w-full">
                                    <input
                                        type="text"
                                        placeholder="Введите промокод"
                                        className="p-3 text-gray-700 placeholder-gray-400 focus:outline-none flex-grow"
                                    />
                                    <button
                                        className="bg-[#E7426A] cursor-pointer hover:bg-red-600 text-white font-medium py-3 px-3 transition-colors duration-200 ease-in-out"
                                    >Применить</button>
                                </div>
                            </div>
                            <div className="flex justify-center items-center mb-5">
                                <button
                                    className="bg-[#E7426A] cursor-pointer hover:bg-red-600 text-white rounded-lg font-medium py-3 px-10 transition-colors duration-200 ease-in-out w-11/12"
                                >Оформить заказ</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}