import React from "react";

export default function UC() {
    return (
        <div>
            <div className="flex flex-col items-center bg-[#F7F7F7] h-full">

                <div className="mt-5 mb-15">
                    <nav className="flex items-center text-sm text-gray-500 space-x-1">
                        <a href="/" className="hover:underline">Главная</a>
                        <span>{'>'}</span>
                        <a href="/delivery" className="text-blue-500 hover:underline">
                            Корпоративные подарки
                        </a>
                    </nav>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-10">
                    <div className="lg:hidden flex flex-col items-center ">
                        <div className="text-center ">
                            <h1 className="text-[40px]">Поставки пирожных оптом</h1>
                            <p className="w-[500px]">Наши макаронсы и трубочки продаются в крупнейших кондитерских и кофейных сетях Санкт-Петербурга. Присоединяйтесь! </p>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-5 w-full mt-5">
                            <button className="border border-blue-500  py-3 px-8 ">Презентация</button>
                            <button className="border border-blue-500 py-3 px-8">Презентация</button>
                        </div>
                    </div>
                    

                    <div>
                        <img src="/UC/uc.1.svg" alt="" />
                    </div>

                    <div className="flex flex-col items-center ">
                        <div className="text-center hidden  lg:flex flex-col ">
                            <h1 className="text-[30px] lg:text-[40px]">Поставки пирожных оптом</h1>
                            <p className="w-[500px]">Наши макаронсы и трубочки продаются в крупнейших кондитерских и кофейных сетях Санкт-Петербурга. Присоединяйтесь! </p>
                        </div>
                        <div className="hidden  lg:flex  flex-row items-center justify-center gap-5 w-full mt-5">
                            <button className="border border-blue-500 py-3 px-8">Презентация</button>
                            <button className="border border-blue-500 py-3 px-8">Презентация</button>
                        </div>
                        <div class="hidden lg:flex flex-col items-start gap-1 p-4 rounded-lg ">
                            <h1 class="text-xl text-gray-800">Мы предлагаем:</h1>
                            <ul class="list-disc list-inside text-gray-700">
                                <li>Прямые поставки от производителя, всегда свежая продукция;</li>
                                <li>Ассортимент с высоким средним чеком и маржой;</li>
                                <li>Бесплатные акриловые шоубоксы для витрины;</li>
                                <li>Продукцию для дегустации или снижение цены для проведения промо-акций;</li>
                                <li>Гибкие условия сотрудничества и поставок.</li>
                            </ul>
                        </div>
                        <div className="lg:hidden md:text-center   flex flex-col items-start m-3">
                            <h1>Рыба-текст предложения</h1>
                            <p >  Приятно, граждане, наблюдать, как действия представителей оппозиции, превозмогая сложившуюся непростую экономическую ситуацию, смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности.</p>
                        </div>
                    </div>
                </div>


                <div class="flex flex-col items-center gap-5 w-full mt-20">
                    <div>
                        <h1 class="text-[30px] font-bold text-center">Что мы можем вам предложить:</h1>
                    </div>
                    <div class="flex flex-col items-center w-full">
                        <div class="flex flex-wrap justify-center items-center gap-y-10 gap-x-10 lg:flex-row lg:gap-x-20">
                            <div class="flex flex-col items-center gap-3 w-[150px] text-center">
                                <img src="/UC/uc.2.svg" alt="Корпоративные подарки" />
                                <h1>Корпоративные подарки</h1>
                            </div>
                            <div class="flex flex-col items-center gap-3 w-[150px] text-center">
                                <img src="/UC/uc.3.svg" alt="Сотрудничество с интернет магазинами" />
                                <h1>Сотрудничество с интернет магазинами</h1>
                            </div>
                            <div class="flex flex-col items-center gap-3 w-[150px] text-center">
                                <img src="/UC/uc.4.svg" alt="Сотрудничество с кафе и ресторанами" />
                                <h1>Сотрудничество с кафе и ресторанами</h1>
                            </div>
                            <div class="flex flex-col items-center gap-3 w-[150px] text-center">
                                <img src="/UC/uc.5.svg" alt="Сотрудничество с кофейнями" />
                                <h1>Сотрудничество с кофейнями</h1>
                            </div>
                        </div>

                        <div class="flex flex-wrap justify-center items-center gap-y-10 gap-x-10 mt-10 lg:flex-row lg:gap-x-20">
                            <div class="flex flex-col items-center gap-3 w-[150px] text-center">
                                <img src="/UC/uc.6.svg" alt="Сотрудничество с отелями" />
                                <h1>Сотрудничество с отелями</h1>
                            </div>
                            <div class="flex flex-col items-center gap-3 w-[150px] text-center">
                                <img src="/UC/uc.7.svg" alt="Для Retail" />
                                <h1>Для Retail</h1>
                            </div>
                            <div class="flex flex-col items-center gap-3 w-[150px] text-center">
                                <img src="/UC/uc.8.svg" alt="Кенди бары для мероприятий" />
                                <h1>Кенди бары для мероприятий</h1>
                            </div>
                            <div class="flex flex-col items-center gap-3 w-[150px] text-center">
                                <img src="/UC/uc.9.svg" alt="И для других сфер бизнеса" />
                                <h1>И для других сфер бизнеса</h1>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-[#F7EBE5] w-full py-10 px-4 flex flex-col justify-center items-center mt-20">
                    <div className="text-center max-w-lg mb-10">
                        <h1 className="text-xl sm:text-2xl md:text-[30px] font-semibold">
                            Заказать расчёт или отправить запрос на сотрудничество
                        </h1>
                    </div>

                    <div className="flex flex-col lg:flex-row items-start gap-8 w-full max-w-5xl">
                        <div className="flex flex-col gap-5 w-full">
                            <div className="flex flex-col gap-2">
                                <h1>Ваше имя*</h1>
                                <input className="bg-white py-3 px-2 rounded-md" type="text" placeholder="Укажите имя" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1>Ваш телефон*</h1>
                                <input className="bg-white py-3 px-2 rounded-md" type="text" placeholder="+7 (___) ___-__-__" />
                            </div>
                        </div>


                        <div className="flex flex-col gap-5 w-full">
                            <div className="flex flex-col gap-2">
                                <h1>Ваше имя*</h1>
                                <input className="bg-white py-3 px-2 rounded-md" type="text" placeholder="Укажите имя" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h1>Ваш телефон*</h1>
                                <input className="bg-white py-3 px-2 rounded-md" type="text" placeholder="+7 (___) ___-__-__" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <h1>Добавить комментарий</h1>
                            <textarea className="bg-white py-12 px-2 rounded-md min-h-[120px]"></textarea>
                        </div>

                    </div>

                    <div className="mt-10 flex flex-col items-center text-center">
                        <button className="bg-[#E7426A] px-13 py-3 text-white rounded-md">
                            Заказать расчёт
                        </button>
                        <p className="text-[10px] mt-4 max-w-md">
                            Нажимая на кнопку "Оформить заказ", я принимаю и соглашаюсь с Договором
                            оферты и разрешаю обработку моих персональных данных в соответствии с
                            Политикой конфиденциальности
                        </p>
                    </div>
                </div>

                <div class="flex flex-col items-center gap-5 mt-10 mb-10">
                    <div>
                        <h1 class="text-[30px] font-bold">Ответы на вопросы</h1>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 w-full max-w-7xl px-4">
                        <div class="flex flex-col gap-5">
                            <div class="bg-white w-full rounded-md">
                                <h1 class="font-medium text-[18px] py-4 px-4">Сколько хранятся пирожные макарон?</h1>
                                <div class="px-4 pb-4 border-b border-gray-300">
                                    <p class="text-gray-500">Срок хранения бла бла бла</p>
                                </div>
                                <div className="flex flex-row items-center text-end justify-end p-3 w-full gap-3">
                                    <h1>Иванов Иван <br /> Генеральный директор ООО “ААА”</h1>
                                    <img src="/UC/uc.10.svg" alt="" />
                                </div>
                            </div>
                            <div class="bg-white w-full rounded-md">
                                <h1 class="font-medium text-[18px] py-4 px-4">А с НДС работаете?</h1>
                                <div class="px-4 pb-4 border-b border-gray-300">
                                    <p class="text-gray-500">Для вашего удобства у нас есть два варианта взаимодействия: с НДС и без НДС. Всегда уточняйте форму оплаты у менеджера, чтобы получить максимально выгодные для вас условия!</p>
                                </div>
                                <div className="flex flex-row items-center text-end justify-end p-3 w-full gap-3">
                                    <h1>Иванов Иван <br /> Генеральный директор ООО “ААА”</h1>
                                    <img src="/UC/uc.10.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-5">
                            <div class="bg-white w-full rounded-md">
                                <h1 class="font-medium text-[18px] py-4 px-4">Как быстро мы выполняем заказы</h1>
                                <div class="px-4 pb-4 border-b border-gray-300">
                                    <p class="text-gray-500">Стандартный срок выполнения заказа 3-5 дней, При большом тираже и в предновогодний сезон может увеличиться. Потому что...</p>
                                </div>
                                <div className="flex flex-row items-center text-end justify-end p-3 w-full gap-3">
                                    <h1>Иванов Иван <br /> Генеральный директор ООО “ААА”</h1>
                                    <img src="/UC/uc.10.svg" alt="" />
                                </div>
                            </div>

                        </div>
                        <div class="flex flex-col gap-5">
                            <div class="bg-white w-full rounded-md">
                                <h1 class="font-medium text-[18px] py-4 px-4">Ещё вопрос</h1>
                                <div class="px-4 pb-4 border-b border-gray-300">
                                    <p class="text-gray-500">Ключевые особенности структуры проекта неоднозначны и будут указаны как претенденты на роль ключевых факторов. А также явные признаки победы институционализации будут заблокированы в рамках своих собственных рациональных ограничений. Элементы политического процесса функционально разнесены на независимые элементы. В своём стремлении улучшить пользовательский опыт мы упускаем, что представители современных социальных резервов обнародованы.</p>
                                </div>
                                <div className="flex flex-row items-center text-end justify-end p-3 w-full gap-3">
                                    <h1>Иванов Иван <br /> Генеральный директор ООО “ААА”</h1>
                                    <img src="/UC/uc.10.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

UC()