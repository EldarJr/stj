import React from "react";
import { useNavigate } from "react-router-dom";
import { useNewsStore } from "../app/state/useNewsStore";


export default function News() {
    const navigate = useNavigate();
    const setSelectedNews = useNewsStore((state) => state.setSelectedNews);

    const handleClick = (news) => {
        setSelectedNews(news);
        navigate("/newsCard");
    };
    return (
        <div className="bg-[#F7F7F7] flex flex-col items-center justify-center">
            <div className="mt-15">
                <nav className="flex items-center text-sm text-gray-500 space-x-1">
                    <a href="/" className="hover:underline">Главная</a>
                    <span>{'>'}</span>
                    <a href="/delivery" className="text-blue-500 hover:underline">
                        Новости
                    </a>
                </nav>
            </div>

            <div className="mt-10 mb-10 items-center text-center">
                <div className="flex items-center justify-center">
                    <h1 className="text-[30px]">Новости</h1>
                </div>
            </div>


            <div className=" w-full overflow-x-auto pb-4 lg:px-30   custom-scrollbar">
                <div className="flex flex-nowrap gap-3">
                    <button className="bg-[#F7EBE5] rounded-xl px-3 py-1 flex-shrink-0">Все новости</button>
                    <button className="bg-[#F7EBE5] rounded-xl px-3 py-1 flex-shrink-0">Обновления ассортимента</button>
                    <button className="bg-[#F7EBE5] rounded-xl px-3 py-1 flex-shrink-0">Акции</button>
                    <button className="bg-[#F7EBE5] rounded-xl px-3 py-1 flex-shrink-0">Конкурсы</button>
                    <button className="bg-[#F7EBE5] rounded-xl px-3 py-1 flex-shrink-0">Подарок на 8 марта</button>
                    <button className="bg-[#F7EBE5] rounded-xl px-3 py-1 flex-shrink-0">Весна</button>
                    <button className="bg-[#F7EBE5] rounded-xl px-3 py-1 flex-shrink-0">Лето</button>
                    <button className="bg-[#F7EBE5] rounded-xl px-3 py-1 flex-shrink-0">Осень</button>
                    <button className="bg-[#F7EBE5] rounded-xl px-3 py-1 flex-shrink-0">Зима</button>
                </div>
            </div>

            <div className="flex flex-col items-center mt-10 mb-10">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">


                    <div className="w-[370px] " onClick={() =>
                        handleClick({
                            img: "/News/n.1.svg",
                            date: "05.04.2023",
                            title: "Впереди праздник пасхи",
                            text: "Порадуйте своих близких вкусными пасхальными наборами макарон. Наша новая коллекция подарков уже в продаже.",
                        })}>
                        <div >
                            <img src="/News/n.1.svg" alt="" />
                        </div>
                        <div className="flex flex-col text-start bg-white p-3">
                            <h2 className="text-gray-500 text-[15px]">05.04.2023</h2>
                            <h1 className="mt-1 text-[20px]">Впереди праздник пасхи</h1>
                            <p className="mt-3 mb-10 text-gray-600">Порадуйте своих близких вкусными пасхальными наборами макарон Наша новая коллекция подарков уже в продаже</p>
                        </div>
                    </div>


                    <div className="w-[370px]" onClick={() =>
                        handleClick({
                            img: "/News/n.2.svg",
                            date: "05.04.2023",
                            title: "Аппетитные наборы с НОВЫМИ вкусами",
                            text: "Готовы представить вам коллекцию новых умопомрачительных вкусов макарон ",
                        })}>
                        <div>
                            <img src="/News/n.2.svg" alt="" />
                        </div>
                        <div className="flex flex-col text-start bg-white p-3">
                            <h2 className="text-gray-500 text-[15px]">05.04.2023</h2>
                            <h1 className="mt-1 text-[20px]">Аппетитные наборы с НОВЫМИ вкусами</h1>
                            <p className="mt-3 mb-10 text-gray-600">Готовы представить вам коллекцию новых умопомрачительных вкусов макарон </p>
                        </div>
                    </div>

                    <div className="w-[370px]" onClick={() =>
                        handleClick({
                            img: "/News/n.3.svg",
                            date: "05.04.2023",
                            title: "Мы печем пышные и мягкие маффины",
                            text: "Их бархатистая структура и внушительный вес впечатляют абсолютно любого!",
                        })}>
                        <div>
                            <img src="/News/n.3.svg" alt="" />
                        </div>
                        <div className="flex flex-col text-start bg-white p-3">
                            <h2 className="text-gray-500 text-[15px]">05.04.2023</h2>
                            <h1 className="mt-1 text-[20px]">Впереди праздник пасхи</h1>
                            <p className="mt-3 mb-10 text-gray-600">Порадуйте своих близких вкусными пасхальными наборами макарон Наша новая коллекция подарков уже в продаже</p>
                        </div>
                    </div>


                    <div className="w-[370px]" onClick={() =>
                        handleClick({
                            img: "/News/n.4.svg",
                            date: "05.04.2023",
                            title: "Впереди свадьба?",
                            text: "Мы предлагаем несколько оригинальных и простых идей оформления. Гости точно запомнят",
                        })}>
                        <div>
                            <img src="/News/n.4.svg" alt="" />
                        </div>
                        <div className="flex flex-col text-start bg-white p-3">
                            <h2 className="text-gray-500 text-[15px]">05.04.2023</h2>
                            <h1 className="mt-1 text-[20px]">Впереди праздник пасхи</h1>
                            <p className="mt-3 mb-10 text-gray-600">Порадуйте своих близких вкусными пасхальными наборами макарон Наша новая коллекция подарков уже в продаже</p>
                        </div>
                    </div>

                    <div className="w-[370px]" onClick={() =>
                        handleClick({
                            img: "/News/n.5.svg",
                            date: "05.04.2023",
                            title: "Подарки для женщина",
                            text: "День Защитника Отечества уже совсем скоро! Порадуйте своего сладкоежку с помощью аппетитных наборов от МакаронШоп ",
                        })}>
                        <div>
                            <img src="/News/n.5.svg" alt="" />
                        </div>
                        <div className="flex flex-col text-start bg-white p-3">
                            <h2 className="text-gray-500 text-[15px]">05.04.2023</h2>
                            <h1 className="mt-1 text-[20px]">Впереди праздник пасхи</h1>
                            <p className="mt-3 mb-10 text-gray-600">Порадуйте своих близких вкусными пасхальными наборами макарон Наша новая коллекция подарков уже в продаже</p>
                        </div>
                    </div>

                    <div className="w-[370px]"onClick={() =>
                        handleClick({
                            img: "/News/n.6.svg",
                            date: "05.04.2023",
                            title: "Сладкие подарки на 23 февраля",
                            text: "Наша новая серия наборов макарон создана специально для того, чтобы порадовать ваших сладкоежек. Ведь мужчины тоже любят сладенькое",
                        })}>
                        <div>
                            <img src="/News/n.6.svg" alt="" />
                        </div>
                        <div className="flex flex-col text-start bg-white p-3">
                            <h2 className="text-gray-500 text-[15px]">05.04.2023</h2>
                            <h1 className="mt-1 text-[20px]">Впереди праздник пасхи</h1>
                            <p className="mt-3 mb-10 text-gray-600">Порадуйте своих близких вкусными пасхальными наборами макарон Наша новая коллекция подарков уже в продаже</p>
                        </div>
                    </div>

                    <div className="w-[370px]" onClick={() =>
                        handleClick({
                            img: "/News/n.7.svg",
                            date: "05.04.2023",
                            title: "Скоро главный праздник весны!",
                            text: "Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы",
                        })}>
                        <div>
                            <img src="/News/n.7.svg" alt="" />
                        </div>
                        <div className="flex flex-col text-start bg-white p-3">
                            <h2 className="text-gray-500 text-[15px]">05.04.2023</h2>
                            <h1 className="mt-1 text-[20px]">Впереди праздник пасхи</h1>
                            <p className="mt-3 mb-10 text-gray-600">Порадуйте своих близких вкусными пасхальными наборами макарон Наша новая коллекция подарков уже в продаже</p>
                        </div>
                    </div>

                    <div className="w-[370px]" onClick={() =>
                        handleClick({
                            img: "/News/n.8.svg",
                            date: "05.04.2023",
                            title: "Конкурс на 23 февраля!",
                            text: "День Защитника Отечества уже совсем скоро! Порадуйте своего сладкоежку с помощью аппетитных наборов от МакаронШоп",
                        })}>
                        <div>
                            <img src="/News/n.8.svg" alt="" />
                        </div>
                        <div className="flex flex-col text-start bg-white p-3">
                            <h2 className="text-gray-500 text-[15px]">05.04.2023</h2>
                            <h1 className="mt-1 text-[20px]">Впереди праздник пасхи</h1>
                            <p className="mt-3 mb-10 text-gray-600">Порадуйте своих близких вкусными пасхальными наборами макарон Наша новая коллекция подарков уже в продаже</p>
                        </div>
                    </div>

                    <div className="w-[370px]" onClick={() =>
                        handleClick({
                            img: "/News/n.2.svg",
                            date: "05.04.2023",
                            title: "Экспресс-конкурс ко дню Святого Валентина",
                            text: "Подарок уже через 2 дняДень всех влюблённых не за горами. Расскажи о своих чувствах с помощью сладкой валентинки от МакаронШоп",
                        })}>
                        <div>
                            <img src="/News/n.9.svg" alt="" />
                        </div>
                        <div className="flex flex-col text-start bg-white p-3">
                            <h2 className="text-gray-500 text-[15px]">05.04.2023</h2>
                            <h1 className="mt-1 text-[20px]">Впереди праздник пасхи</h1>
                            <p className="mt-3 mb-10 text-gray-600">Порадуйте своих близких вкусными пасхальными наборами макарон Наша новая коллекция подарков уже в продаже</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>


    )
}