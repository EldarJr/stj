import React from "react";

export default function ForMerried() {
    return (
        <div>
            <div className="bg-[#F7F7F7] flex flex-col items-center h-full">
                <div className="mt-5">
                    <nav className="flex items-center text-sm text-gray-500 space-x-1">
                        <a href="/" className="hover:underline">Главная</a>
                        <span>{'>'}</span>
                        <a href="/delivery" className="text-blue-500 hover:underline">
                            Предложение для свадеб
                        </a>
                    </nav>
                </div>

                <div class="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-40 mt-10">

                    <div class="relative w-[300px] h-[500px] lg:order-none">
                        <img class="absolute" src="/Merry/m.1.svg" alt="" />
                        <img class="absolute top-50 left-70" src="/Merry/m.2.svg" alt="" />
                        <img class="absolute top-40 right-60" src="/Merry/m.3.svg" alt="" />
                        <img class="absolute top-20 left-60" src="/Merry/m.4.svg" alt="" />
                        <img class="absolute top-30 left-30" src="/Merry/m.pink.svg" alt="" />
                        <img class="absolute top-60 left-30" src="/Merry/m.pink.svg" alt="" />
                    </div>

                    <div class="flex flex-col items-center order-first lg:order-none">
                        <div class="text-center">
                            <h1 class="text-[40px]">Свадебное предложение</h1>
                            <p class="w-full lg:w-[500px]">
                                Наши макаронсы и трубочки продаются в крупнейших кондитерских и кофейных сетях Санкт-Петербурга. Присоединяйтесь!
                            </p>
                        </div>
                        <div class="flex flex-row items-center justify-center gap-5 w-full mt-5">
                            <button class="border border-blue-500 py-3 px-8">Презентация</button>
                            <button class="border border-blue-500 py-3 px-8">Презентация</button>
                        </div>
                        <div class="hidden lg:flex flex-col items-center">
                            <p class="w-full text-gray-600 text-[15px] p-3 lg:w-[670px]">
                                Рыба-текст предложения <br />
                                Приятно, граждане, наблюдать, как действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.
                            </p>
                        </div>
                    </div>

                    <div class="lg:hidden flex flex-col items-center mt-5">
                        <p class="w-full text-gray-600 text-[15px] p-3 md:w-[670px]">
                            Рыба-текст предложения <br />
                            Приятно, граждане, наблюдать, как действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.
                        </p>
                    </div>


                </div>


                <div class="flex flex-col items-center gap-10 mt-20">
                    <div>
                        <h1 class="text-[30px] font-medium">Наборы для свадьбы</h1>
                    </div>

                    <div class="flex flex-col items-center gap-10">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            <div class="bg-white flex flex-col items-center rounded-md shadow-md  w-[370px]">
                                <div>
                                    <img src="/Merry/m.6.svg" alt="" />
                                </div>
                                <div class="flex flex-col items-start p-4">
                                    <h1 class="font-semibold">Набор из 9 макарон</h1>
                                    <p class="w-full md:w-[327px] text-gray-500 mt-2">С праздничной печатью и пожеланиями для молодожёнов</p>
                                </div>
                                <div class="w-full flex flex-row items-center border-t border-gray-300 justify-between">
                                    <div class="border-r border-gray-300 pr-5 pt-3 pl-5 pb-3">
                                        <h1 class="text-red-500 font-medium">600 руб</h1>
                                    </div>
                                    <div class="pr-6 pt-3 pb-3">
                                        <img src="/Merry/m.5.svg" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div class="bg-white flex flex-col items-center rounded-md shadow-md  w-[370px]">
                                <div>
                                    <img src="/Merry/m.7.svg" alt="" />
                                </div>
                                <div class="flex flex-col items-start p-4">
                                    <h1 class="font-semibold">Набор из 9 макарон</h1>
                                    <p class="w-full md:w-[327px] text-gray-500 mt-2">С праздничной печатью и пожеланиями для молодожёнов</p>
                                </div>
                                <div class="w-full flex flex-row items-center border-t border-gray-300 justify-between">
                                    <div class="border-r border-gray-300 pr-5 pt-3 pl-5 pb-3">
                                        <h1 class="text-red-500 font-medium">600 руб</h1>
                                    </div>
                                    <div class="pr-6 pt-3 pb-3">
                                        <img src="/Merry/m.5.svg" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div class="bg-white flex flex-col items-center rounded-md shadow-md  w-[370px]">
                                <div>
                                    <img src="/Merry/m.8.svg" alt="" />
                                </div>
                                <div class="flex flex-col items-start p-4">
                                    <h1 class="font-semibold">Набор из 9 макарон</h1>
                                    <p class="w-full md:w-[327px] text-gray-500 mt-2">С праздничной печатью и пожеланиями для молодожёнов</p>
                                </div>
                                <div class="w-full flex flex-row items-center border-t border-gray-300 justify-between">
                                    <div class="border-r border-gray-300 pr-5 pt-3 pl-5 pb-3">
                                        <h1 class="text-red-500 font-medium">600 руб</h1>
                                    </div>
                                    <div class="pr-6 pt-3 pb-3">
                                        <img src="/Merry/m.5.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            <div class="bg-white flex flex-col items-center rounded-md shadow-md  w-[370px]">
                                <div>
                                    <img src="/Merry/m.9.svg" alt="" />
                                </div>
                                <div class="flex flex-col items-start p-4">
                                    <h1 class="font-semibold">Набор из 9 макарон</h1>
                                    <p class="w-full md:w-[327px] text-gray-500 mt-2">С праздничной печатью и пожеланиями для молодожёнов</p>
                                </div>
                                <div class="w-full flex flex-row items-center border-t border-gray-300 justify-between">
                                    <div class="border-r border-gray-300 pr-5 pt-3 pl-5 pb-3">
                                        <h1 class="text-red-500 font-medium">600 руб</h1>
                                    </div>
                                    <div class="pr-6 pt-3 pb-3">
                                        <img src="/Merry/m.5.svg" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div class="bg-white flex flex-col items-center rounded-md shadow-md  w-[370px]">
                                <div>
                                    <img src="/Merry/m.10.svg" alt="" />
                                </div>
                                <div class="flex flex-col items-start p-4">
                                    <h1 class="font-semibold">Набор из 9 макарон</h1>
                                    <p class="w-full md:w-[327px] text-gray-500 mt-2">С праздничной печатью и пожеланиями для молодожёнов</p>
                                </div>
                                <div class="w-full flex flex-row items-center border-t border-gray-300 justify-between">
                                    <div class="border-r border-gray-300 pr-5 pt-3 pl-5 pb-3">
                                        <h1 class="text-red-500 font-medium">600 руб</h1>
                                    </div>
                                    <div class="pr-6 pt-3 pb-3">
                                        <img src="/Merry/m.5.svg" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div class="bg-white flex flex-col items-center rounded-md shadow-md w-[370px]">
                                <div>
                                    <img src="/Merry/m.11.svg" alt="" />
                                </div>
                                <div class="flex flex-col items-start p-4">
                                    <h1 class="font-semibold">Набор из 9 макарон</h1>
                                    <p class="w-full md:w-[327px] text-gray-500 mt-2">С праздничной печатью и пожеланиями для молодожёнов</p>
                                </div>
                                <div class="w-full flex flex-row items-center border-t border-gray-300 justify-between">
                                    <div class="border-r border-gray-300 pr-5 pt-3 pl-5 pb-3">
                                        <h1 class="text-red-500 font-medium">600 руб</h1>
                                    </div>
                                    <div class="pr-6 pt-3 pb-3">
                                        <img src="/Merry/m.5.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-[#F1F1F1] flex flex-col lg:flex-row items-center justify-between w-full mt-20 p-5">

                    <div class="hidden lg:flex ">
                        <img src="/Merry/m.12.svg" alt="" />
                    </div>

                    <div class="flex flex-col items-center lg:items-start">
                        <h1 class="text-[40px] w-full font-medium text-center lg:text-start">Мы открыты для новых идей</h1>
                        <p class="w-full lg:w-[500px] text-gray-500 text-center lg:text-start mt-2">Каждое событие уникально и мы готовы предложить индивидуальные решения для Вашего мероптиятия</p>

                        <div class="flex flex-col md:flex-row gap-5 mt-5 w-full md:w-[530px]">
                            <div class="flex flex-col gap-2 w-full">
                                <h1>Ваше имя*</h1>
                                <input class="bg-white py-3 px-2 rounded-md" type="text" placeholder="Укажите имя" />
                            </div>
                            <div class="flex flex-col gap-2 w-full">
                                <h1>Ваш телефон*</h1>
                                <input class="bg-white py-3 px-2 rounded-md" type="text" placeholder="+7 (___) ___-__-__" />
                            </div>
                        </div>

                        <div class="flex flex-col gap-2 w-full md:w-[530px] mt-5">
                            <h1>Опишите Вашу идею</h1>
                            <input class="bg-white py-4 px-2 rounded-md" type="text" placeholder="Опишите Вашу идею" />
                        </div>

                        <button class="mt-5 px-10 py-3 bg-[#E7426A] hover:bg-red-600 text-white rounded-sm font-medium transition-colors w-full md:w-[530px]">
                            Отправить заявку
                        </button>

                        <p class="w-full md:w-[667px] text-[12px] mt-5 text-center lg:text-start">
                            Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с <span class="text-blue-500">Договором оферты</span> и разрешаю обработку моих персональных данных в соответствии с <span class="text-blue-500">Политикой конфиденциальности</span>
                        </p>
                    </div>

                    <div class="lg:hidden flex mt-10">
                        <img src="/Merry/m.12.svg" alt="" />
                    </div>
                </div>

                <div class="flex flex-col items-center gap-5 mt-10 mb-10">
                    <div>
                        <h1 class="text-[30px] font-bold">Ответы на вопросы</h1>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 w-full max-w-7xl px-4">
                        <div class="flex flex-col gap-5">
                            <div class="bg-white w-full rounded-md">
                                <h1 class="font-medium text-[18px] p-4">Сколько хранятся пирожные макарон?</h1>
                                <div class="p-4 border-t border-gray-300">
                                    <p class="text-gray-500">Срок хранения бла бла бла</p>
                                </div>
                            </div>

                        </div>
                        <div class="flex flex-col gap-5">
                            <div class="bg-white w-full rounded-md">
                                <h1 class="font-medium text-[18px] p-4">Как быстро мы выполняем заказы</h1>
                                <div class="p-4 border-t border-gray-300">
                                    <p class="text-gray-500">Стандартный срок выполнения заказа 3-5 дней, При большом тираже и в предновогодний сезон может увеличиться. Потому что...</p>
                                </div>
                            </div>

                        </div>
                        <div class="flex flex-col gap-5">
                            <div class="bg-white w-full rounded-md">
                                <h1 class="font-medium text-[18px] p-4">А за 2 дня?</h1>
                                <div class="p-4 border-t border-gray-300">
                                    <p class="text-gray-500">Текст про дополнительную стоимость при срочных заказах</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

ForMerried