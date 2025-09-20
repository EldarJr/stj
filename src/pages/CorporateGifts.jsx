import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import ModalDonCatalog from "./ModalDonCatalog";
import ModalDonKp from "./ModalDonKp";

export default function CorporateGifts() {
    const navigate = useNavigate()

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenKp, setIsModalOpenKp] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOpenModalKp = () => {
        setIsModalOpenKp(true);
    };

    const handleCloseModalKp = () => {
        setIsModalOpenKp(false);
    };
    return (
        <div>
            <div className="bg-[#F7F7F7] flex flex-col items-center h-full">
                <div className="mt-5">
                    <nav className="flex items-center text-sm text-gray-500 space-x-1">
                        <a href="/" className="hover:underline">Главная</a>
                        <span>{'>'}</span>
                        <a href="/delivery" className="text-blue-500 hover:underline">
                            Корпоративные подарки
                        </a>
                    </nav>
                </div>

                <div className="hidden lg:flex flex-row items-center justify-center gap-40 w-full mt-10 pb-20">
                    <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                        <img className="relative z-20" src="/CorporateG/cg.main.svg" alt="" />
                        <img className="absolute z-10 top-20 right-45" src="/CorporateG/cg.blueFon.svg" alt="" />
                        <img className="absolute z-10 bottom-40 left-40" src="/CorporateG/cg.greenFon.svg" alt="" />
                        <img className="absolute z-10 right-80 bottom-70" src="/CorporateG/cg.sber.svg" alt="" />
                        <img className="absolute z-10 right-84 bottom-35" src="/CorporateG/cg.flover.svg" alt="" />
                        <img className="absolute z-10 right-90 bottom-5" src="/CorporateG/cg.moscow.svg" alt="" />
                        <img className="absolute z-10 right-75 top-85" src="/CorporateG/cg.stadion.svg" alt="" />
                        <img className="absolute z-10 left-50 top-90" src="/CorporateG/cg.zelen.svg" alt="" />
                        <img className="absolute z-10 left-80 top-70" src="/CorporateG/cg.zenit.svg" alt="" />
                        <img className="absolute z-10 left-90 top-45" src="/CorporateG/cg.myta.svg" alt="" />
                        <img className="absolute z-10 left-80 top-0" src="/CorporateG/cg.gas.svg" alt="" />
                    </div>

                    <div className="flex flex-col items-center ">
                        <div className="flex flex-col items-center gap-3 text-center ">
                            <h1 className="text-[45px] font-semibold ">Корпоративные подарки</h1>
                            <p className="text-gray-500 w-[480px]">Брендированные пирожные макарон, которые поднимут аппетит ваших клиентов или порадуют коллектив</p>
                        </div>
                        <div className="flex flex-col items-start mt-10">
                            <p className="text-gray-400 w-[670px]">Поднять мотивацию сотрудников? Увеличить лояльность клиентов или расположить их к себе перед большой сделкой?<br />
                                Мы приготовим наборы пирожных от 200 руб за шт, сделаем индивидуальный дизайн и нанесём ваши лого. Обычно готовим за 2-3 дня. </p>
                        </div>
                        <div className="flex items-center mt-5">
                            <button
                                onClick={() => {
                                    handleOpenModal()
                                }}
                                className="flex-1 px-10 py-3 bg-[#E7426A] hover:bg-red-600 text-white rounded-sm font-medium transition-colors"
                            >Скачать весь каталог подарков</button>
                        </div>
                    </div>
                </div>

                <div className=" lg:hidden flex  flex-col items-center justify-center gap-40 w-full mt-10 pb-20">
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <div className="flex flex-col items-center ">
                            <div className="flex flex-col items-center gap-3 text-center ">
                                <h1 className="text-[40px] w-[270px] font-semibold ">Корпоративные подарки</h1>
                                <p className="text-gray-500 w-[300px]">Брендированные пирожные макарон, которые поднимут аппетит ваших клиентов или порадуют коллектив</p>
                            </div>
                            <div className="relative w-[400px] h-[400px] flex items-center justify-center">
                                <img className="relative z-20" src="/CorporateG/cg.main.svg" alt="" />
                                <img className="absolute z-10 top-20 right-45" src="/CorporateG/cg.blueFon.svg" alt="" />
                                <img className="absolute z-10 bottom-40 left-40" src="/CorporateG/cg.greenFon.svg" alt="" />
                                <img className="absolute z-10 right-80 bottom-70" src="/CorporateG/cg.sber.svg" alt="" />
                                <img className="absolute z-10 right-84 bottom-35" src="/CorporateG/cg.flover.svg" alt="" />
                                <img className="absolute z-10 right-90 bottom-5" src="/CorporateG/cg.moscow.svg" alt="" />
                                <img className="absolute z-10 right-75 top-85" src="/CorporateG/cg.stadion.svg" alt="" />
                                <img className="absolute z-10 left-50 top-90" src="/CorporateG/cg.zelen.svg" alt="" />
                                <img className="absolute z-10 left-80 top-70" src="/CorporateG/cg.zenit.svg" alt="" />
                                <img className="absolute z-10 left-90 top-45" src="/CorporateG/cg.myta.svg" alt="" />
                                <img className="absolute z-10 left-80 top-0" src="/CorporateG/cg.gas.svg" alt="" />
                            </div>
                            <div className="flex flex-col items-start mt-10">
                                <p className="text-gray-400 w-[570px]">Поднять мотивацию сотрудников? Увеличить лояльность клиентов или расположить их к себе перед большой сделкой?<br />
                                    Мы приготовим наборы пирожных от 200 руб за шт, сделаем индивидуальный дизайн и нанесём ваши лого. Обычно готовим за 2-3 дня. </p>
                            </div>
                            <div className="flex items-center mt-5">
                                <button
                                    onClick={() => navigate("/")}
                                    className="flex-1 px-10 py-3 bg-[#E7426A] hover:bg-red-600 text-white rounded-sm font-medium transition-colors"
                                >Скачать весь каталог подарков</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="flex flex-col items-center gap-5">
                    <div class="mb-5">
                        <h1 class="text-[30px] font-bold">Некоторые варианты подарков</h1>
                    </div>
                    <div class="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                        <div class="flex flex-col items-center bg-white rounded-md w-full sm:w-[270px]">
                            <div class="flex flex-col items-center gap-3">
                                <img src="/CorporateG/cg.1.svg" alt="" />
                            </div>
                            <div class="flex flex-col items-center text-center p-5">
                                <h1 class="text-[18px] font-medium">3 макарона с печатью</h1>
                                <p class="text-gray-500">В пластиковой упаковке <br />самый бюджетный вариант</p>
                            </div>
                            <div class="flex flex-row items-start border-t border-gray-300 w-full">
                                <h1 class="pl-5 text-red-500 font-semibold mt-3 mb-3">от 150 руб/шт</h1>
                            </div>
                        </div>
                        <div class="flex flex-col items-center bg-white rounded-md w-full sm:w-[270px]">
                            <div class="flex flex-col items-center gap-3">
                                <img src="/CorporateG/cg.2.svg" alt="" />
                            </div>
                            <div class="flex flex-col items-center text-center p-5">
                                <h1 class="text-[18px] font-medium">9 макарон с печатью</h1>
                                <p class="text-gray-500">В пластиковой упаковке <br />самый бюджетный вариант</p>
                            </div>
                            <div class="flex flex-row items-start border-t border-gray-300 w-full">
                                <h1 class="pl-5 text-red-500 font-semibold mt-3 mb-3">от 500 руб</h1>
                            </div>
                        </div>
                        <div class="flex flex-col items-center bg-white rounded-md w-full sm:w-[270px]">
                            <div class="flex flex-col items-center gap-3">
                                <img src="/CorporateG/cg.3.svg" alt="" />
                            </div>
                            <div class="flex flex-col items-center text-center p-5">
                                <h1 class="text-[18px] font-medium">Круглый набор, 40 шт.</h1>
                                <p class="text-gray-500">В пластиковой упаковке <br />самый бюджетный вариант</p>
                            </div>
                            <div class="flex flex-row items-start border-t border-gray-300 w-full">
                                <h1 class="pl-5 text-red-500 font-semibold mt-3 mb-3">от 3600 руб</h1>
                            </div>
                        </div>
                        <div class="flex flex-col items-center bg-white rounded-md w-full sm:w-[270px]">
                            <div class="flex flex-col items-center gap-3">
                                <img src="/CorporateG/cg.4.svg" alt="" />
                            </div>
                            <div class="flex flex-col items-center text-center p-5">
                                <h1 class="text-[18px] font-medium">Набор на 70 шт.</h1>
                                <p class="text-gray-500">В пластиковой упаковке <br />самый бюджетный вариант</p>
                            </div>
                            <div class="flex flex-row items-start border-t border-gray-300 w-full">
                                <h1 class="pl-5 text-red-500 font-semibold mt-3 mb-3">от 5600 руб</h1>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => handleOpenModalKp()}
                        class="mt-5 px-10 py-3 bg-[#E7426A] hover:bg-red-600 text-white rounded-sm font-medium transition-colors"
                    >Получить КП</button>
                </div>

             
                <div class="flex flex-col items-center gap-5 mt-15">
                    <div class="mb-5">
                        <h1 class="text-[30px] font-bold">Мы уже выполнили заказы</h1>
                    </div>
                    <div class="flex flex-col md:flex-row items-center gap-4 w-full">
                        <div class="w-full sm:w-[271px] h-full bg-white p-4">
                            <div class="flex flex-col items-center text-center">
                                <img src="/CorporateG/cg.5.svg" alt="" />
                                <h1 class="mt-4 font-medium">Макароны для отеля “Бла бла”</h1>
                            </div>
                        </div>
                        <div class="w-full sm:w-[271px] h-full bg-white p-4">
                            <div class="flex flex-col items-center text-center">
                                <img src="/CorporateG/cg.5.svg" alt="" />
                                <h1 class="mt-4 font-medium">Набор для кафе “Мята”</h1>
                            </div>
                        </div>
                        <div class="w-full sm:w-[271px] h-full bg-white p-4">
                            <div class="flex flex-col items-center text-center">
                                <img src="/CorporateG/cg.5.svg" alt="" />
                                <h1 class="mt-4 font-medium">Макароны для отеля “Бла бла”</h1>
                            </div>
                        </div>
                        <div class="w-full sm:w-[271px] h-full bg-white p-4">
                            <div class="flex flex-col items-center text-center">
                                <img src="/CorporateG/cg.5.svg" alt="" />
                                <h1 class="mt-4 font-medium">Набор для кафе “Мята”</h1>
                            </div>
                        </div>
                    </div>
                    <img  src="/CorporateG/cg.6.svg" alt="" />
                </div>


                <div class="flex flex-col items-center gap-5 mt-10">
                    <div class="flex flex-wrap justify-center gap-4 md:gap-16">
                        <img class="w-[135px] h-auto" src="/CorporateG/cg.7.svg" alt="" />
                        <img class="w-[135px] h-auto" src="/CorporateG/cg.8.svg" alt="" />
                        <img class="w-[135px] h-auto" src="/CorporateG/cg.9.svg" alt="" />
                        <img class="w-[135px] h-auto" src="/CorporateG/cg.10.svg" alt="" />
                        <img class="w-[135px] h-auto" src="/CorporateG/cg.11.svg" alt="" />
                        <img class="w-[135px] h-auto" src="/CorporateG/cg.12.svg" alt="" />
                    </div>
                    <img  src="/CorporateG/cg.6.svg" alt="" />
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
                            <div class="bg-white w-full rounded-md">
                                <h1 class="font-medium text-[18px] p-4">А с НДС работаете?</h1>
                                <div class="p-4 border-t border-gray-300">
                                    <p class="text-gray-500">Для вашего удобства у нас есть два варианта взаимодействия: с НДС и без НДС. Всегда уточняйте форму оплаты у менеджера, чтобы получить максимально выгодные для вас условия!</p>
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
                            <div class="bg-white w-full rounded-md">
                                <h1 class="font-medium text-[18px] p-4">Что с доставкой?</h1>
                                <div class="p-4 border-t border-gray-300">
                                    <p class="text-gray-500">Мы доставляем ваши заказы по всей России: от Камчатки до Калининграда, бережно упаковывая каждую печеньку или набор. Мы всегда производим для вас на 2-5% больше от заказанного количества, чтобы ничего не смогло омрачить результат нашей работы. Сроки доставки 2-7 дней с момента заказа..</p>
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
                            <div class="bg-white w-full rounded-md">
                                <h1 class="font-medium text-[18px] p-4">Ещё вопрос</h1>
                                <div class="p-4 border-t border-gray-300">
                                    <p class="text-gray-500">Как уже неоднократно упомянуто, сторонники тоталитаризма в науке освещают чрезвычайно интересные особенности картины в целом, однако конкретные выводы, разумеется, рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <ModalDonCatalog
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                itemName={"heart"}
            />

            <ModalDonKp
                isOpen={isModalOpenKp}
                onClose={handleCloseModalKp}
                itemName={"heart"}
            />
        </div>
    )
}
