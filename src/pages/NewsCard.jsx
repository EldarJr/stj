import React from "react";
import { useNewsStore } from "../app/state/useNewsStore";


export default function NewsCard() {
    const selectedNews = useNewsStore((state) => state.selectedNews);

    if (!selectedNews) {
        return <p className="p-10">Новость не выбрана</p>;
    }

    return (
        <div>
            <div className="bg-[#F7F7F7] w-full min-h-screen">
                
                <div className="flex justify-center py-5 sm:py-10 px-4">
                    <nav className="flex flex-wrap items-center text-sm text-gray-500 space-x-1">
                        <a href="/" className="hover:underline">Главная</a>
                        <span>{'>'}</span>
                        <a href="/delivery" className="text-gray-500 hover:underline">
                            Новости
                        </a>
                        <span>{'>'}</span>
                        <a href="/delivery" className="text-gray-500 hover:underline">
                            {selectedNews?.title || "Скоро главный праздник весны"}
                        </a>
                    </nav>
                </div>

                
                <div className="p-4 md:p-10 flex flex-col lg:flex-row items-center justify-center gap-10">

                   
                    <div className="max-w-xl w-full">
                        <h1 className="text-2xl  sm:text-3xl font-bold">
                            {selectedNews?.title}
                        </h1>
                        <p className="mt-6 text-sm sm:text-base leading-relaxed">
                            Совсем скоро любимый весенний праздник. А мы уже подготовили коллекцию пирожных макарон с фирменным дизайном💖
                            <br /><br />
                            Пироженки вызывают восторг у каждого, ведь они не только красивые, но и вкусные! Готовим с любовью исключительно из натуральных ингредиентов!
                        </p>

                        <h2 className="text-lg font-bold mt-6">{selectedNews?.title}</h2>

                        <div className="mt-8">
                            <h3 className="font-semibold">Некоторые варианты подарков:</h3>
                            <div className="flex flex-row items-start gap-3 mt-3">
                                <div className="flex flex-col gap-3">
                                    {Array(7).fill(0).map((_, i) => (
                                        <img key={i} src="n.11.svg" alt="" width={16} height={16} />
                                    ))}
                                </div>
                                
                                <div className="flex flex-col gap-1  text-sm sm:text-base">
                                    <h1>Набор на 9 макарон - 1200 рублей</h1>
                                    <h1>Набор Сердце на 22 макарон - 3500 рублей</h1>
                                    <h1>Набор на 12 макарон - 1500 рублей</h1>
                                    <h1>Набор Круглый на 40 макарон - 5000 рублей</h1>
                                    <h1>Набор на 20 макарон - 1800 рублей</h1>
                                    <h1>Набор на 3 макарон - 450 рублей</h1>
                                    <h1>Набор-комбо 3+2 - 800 рублей</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="flex flex-col items-center gap-4 w-full max-w-xl ">
                        <img className="w-full h-auto rounded-xl object-cover" src={selectedNews?.img} alt={selectedNews?.title}/>
                        <img className="w-15 sm:w-15" src="/News/n.15.svg" alt="" />
                        <div className="flex flex-wrap justify-center gap-3 mt-10">
                            <img className="w-24 sm:w-32" src="/News/n.11.svg" alt="" />
                            <img className="w-24 sm:w-32" src="/News/n.12.svg" alt="" />
                            <img className="w-24 sm:w-32" src="/News/n.13.svg" alt="" />
                            <img className="w-24 sm:w-32" src="/News/n.14.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

          
            <div className="bg-[#F7EBE5] w-full py-10 px-4 flex flex-col justify-center items-center">
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
                            <input className="bg-white py-3 px-2 rounded-md" type="text" placeholder="+7 (___) ___-__-__"/>
                        </div>
                    </div>

                    
                    <div className="flex flex-col gap-5 w-full">
                        <div className="flex flex-col gap-2">
                            <h1>Ваше имя*</h1>
                            <input className="bg-white py-3 px-2 rounded-md" type="text" placeholder="Укажите имя"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1>Ваш телефон*</h1>
                            <input className="bg-white py-3 px-2 rounded-md" type="text" placeholder="+7 (___) ___-__-__"/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full">
                        <h1>Добавить комментарий</h1>
                        <textarea className="bg-white py-3 px-2 rounded-md min-h-[120px]"></textarea>
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
        </div>

    )
}

