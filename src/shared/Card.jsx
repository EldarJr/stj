import React, { useState } from "react";
import { useNewsStore } from "../app/state/useNewsStore";
import AddToCartModal from "../pages/Modal";
import { useBasketStore } from "../app/state/useBasketStore";

export default function Card() {
    const selectedProduct = useNewsStore((state) => state.selectedProduct);
    const addToBasket = useBasketStore((state) => state.addToBasket);

    if (!selectedProduct) {
        return <div>Товар не выбран</div>;
    }

    const [activeTab, setActiveTab] = useState("Описание");

    const tabs = [
        "Описание",
        "Состав и пищевая ценность",
        "Условия и срок хранения",
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleAddToCartClick = () => { 
        addToBasket({
            id: selectedProduct.id, 
            name: selectedProduct.name,
            description: selectedProduct.description,
            price: selectedProduct.price,
            img: selectedProduct.img,
        });
        handleOpenModal(); 
    };

    return (
        <div className="bg-[#F7F7F7]">
        

            <div className="flex flex-col justify-center pt-10">
                <div className="flex justify-center">
                    <nav className="flex items-center text-sm text-gray-500 space-x-1">
                        <a href="/" className="hover:underline">Главная</a>
                        <span>{'>'}</span>
                        <a href="/delivery" className="text-gray-500 hover:underline">
                            Готовые набоы
                        </a>
                        <span>{'>'}</span>
                        <a href="/delivery" className="text-blue-500 hover:underline">
                            {selectedProduct.name}
                        </a>
                    </nav>
                </div>

                <div className="justify-center flex flex-col lg:flex-row items-center lg:gap-5 mt-5">
                    <div className="mb-5 text-center lg:hidden ">
                        <h1 className="text-2xl font-medium">{selectedProduct.name}</h1>
                        <p className="text-gray-500 w-[300px]">{selectedProduct.description}</p>
                    </div>
                    <div>
                        <div className="">
                            <img className="w-[500px]" src={selectedProduct.img} alt={selectedProduct.name} />
                        </div>
                        <div className="flex flex-row items-center mt-3 gap-5">
                            <img src={selectedProduct.img} alt={selectedProduct.name} width={71} height={71} />
                            <img src={selectedProduct.img} alt={selectedProduct.name} width={71} height={71} />
                            <img src={selectedProduct.img} alt={selectedProduct.name} width={71} height={71} />
                        </div>
                    </div>
                    <div className="mt-2">
                        <div className="bg-white mt-2 rounded-lg p-5 lg:hidden mb-5 flex justify-between items-center">
                            <p className="text-2xl text-red-500">{selectedProduct.price}</p>
                            <button onClick={handleAddToCartClick} className="bg-[#E7426A] rounded-lg p-3"><img src="/Card/c.1.svg" alt="" /></button>
                        </div>

                        <div className="mb-5 hidden lg:flex flex-col">
                            <h1 className="text-2xl font-medium">{selectedProduct.name}</h1>
                            <p className="text-gray-500 w-[300px] lg:w-[500px]" >{selectedProduct.description}</p>
                        </div>

                        <div className="bg-white rounded-lg p-5">
                            <h1 className="text-[20px] font-medium mb-1">Вкусы:</h1>
                            <div className="flex items-center">
                                <span className="text-gray-700">Яблоко</span>
                                <div className="flex-grow border-b border-dotted mx-2 mt-2"></div>
                                <span className="text-gray-700">4 шт.</span>
                            </div>

                            <div className="flex items-center">
                                <span className="text-gray-700">Вишня</span>
                                <div className="flex-grow border-b border-dotted mx-2 mt-2"></div>
                                <span className="text-gray-700">12 шт.</span>
                            </div>

                            <div className="flex items-center">
                                <span className="text-gray-700">Кокос</span>
                                <div className="flex-grow border-b border-dotted mx-2 mt-2"></div>
                                <span className="text-gray-700">8 шт.</span>
                            </div>
                        </div>

                        <div className="bg-white mt-2 rounded-lg p-5 hidden lg:flex justify-between items-center">
                            <p className="text-2xl text-red-500">{selectedProduct.price}</p>
                            {/* Используем handleAddToCartClick для десктопной версии */}
                            <button onClick={handleAddToCartClick} className="bg-[#E7426A] rounded-lg p-3"><img src="/Card/c.1.svg" alt="" /></button>
                        </div>

                        <div className="mt-5 flex flex-col gap-3">
                            <div className="flex flex-row items-center gap-5">
                                <img src="/Card/c.2.svg" alt="" />
                                <h1 className="w-[480px] h-[34px]">Доставка от 400 руб. в день заказа с 12 до 17 или с 17 до 21. Бесплатно при заказе на сумму от 2000 руб</h1>
                            </div>
                            <div className="flex flex-row items-center gap-5 ">
                                <img src="/Card/c.3.svg" alt="" />
                                <h1 className="w-[225px] h-[34px]">Самовывоз бесплатно.Через 3 часа после оплаты заказа</h1>
                            </div>
                            <div className="flex flex-row items-center gap-5">
                                <img src="/Card/c.4.svg" alt="" />
                                <h1 className="w-[480px] h-[34px]">Можем преподнести как анонимный подарок:</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex flex-col items-center justify-center mt-10">
                    <div className="bg-white w-[1070px] h-full rounded-lg">
                        <div className="flex flex-col items-center justify-center mt-10">
                            <div className="bg-white w-[1070px] h-full rounded-lg">
                                <div className="flex flex-row items-center gap-5 p-5 border-b border-gray-300">
                                    {tabs.map((tab) => (
                                        <div key={tab} className="relative pb-2">
                                            <button
                                                onClick={() => setActiveTab(tab)}
                                                className={`font-medium ${activeTab === tab ? "text-black" : "text-gray-600"
                                                    }`}
                                            >
                                                {tab}
                                            </button>
                                            {activeTab === tab && (
                                                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-red-500"></span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="p-5 flex flex-col items-start gap-5">
                                    {activeTab === "Описание" && (
                                        <p className="text-gray-600">
                                            Здесь будет описание товара...
                                        </p>
                                    )}
                                    {activeTab === "Состав и пищевая ценность" && (
                                        <p className="text-gray-600">
                                            Здесь будет состав и пищевая ценность...
                                        </p>
                                    )}
                                    {activeTab === "Условия и срок хранения" && (
                                        <p className="text-gray-600">
                                            Здесь будут условия и срок хранения...
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="p-5 flex flex-col items-start gap-5">
                            <h1 className="w-[300px] text-gray-600">
                                Текстовая информация и таблички. <br /> Для примера рыба-текст
                            </h1>
                            <p className="text-gray-600">
                                Банальные, но неопровержимые выводы, а также представители современных социальных резервов смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус бесполезности. Сложно сказать, почему активно развивающиеся страны третьего мира неоднозначны и будут указаны как претенденты на роль ключевых факторов. Являясь всего лишь частью общей картины, диаграммы связей призывают нас к новым свершениям, которые, в свою очередь, должны быть своевременно верифицированы.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center text-center px-3">
                <div>
                    <h1 className="text-[24px] md:text-[30px] mb-5">Вам могут понравиться</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex flex-col items-center">
                        <img src="/dessertC/d.5.svg" alt="" className="max-h-[280px]" />
                        <div className="bg-white w-full max-w-[272px] border border-gray-300">
                            <div className="flex flex-col text-start pb-6 border-b border-gray-300 p-3">
                                <h1 className="text-[19px]">1 макарон и 1 эклер</h1>
                                <p className="text-gray-500 text-[14px] pb-5">промо-набор</p>
                            </div>
                            <div className="flex flex-row w-full ">
                                <div className="flex flex-col justify-center w-1/2 border-r border-gray-300 p-3">
                                    <h2 className="text-gray-500 text-[13px] line-through">160 руб</h2>
                                    <h1 className="text-red-500 font-medium">90 руб</h1>
                                </div>
                                <div className="flex items-center justify-center w-1/2 p-3">
                                    <img src="/dessertC/d.9.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/dessertC/d.6.svg" alt="" className="max-h-[280px]" />
                        <div className="bg-white w-full max-w-[272px] border border-gray-300">
                            <div className="flex flex-col text-start pb-6 border-b border-gray-300 p-3">
                                <h1 className="text-[19px]">Всего понемногу</h1>
                                <p className="text-gray-500 text-[14px] break-words">
                                    3 эклера, 4 трубочки, 6 макарун. Вкусы: клубника - базилик
                                </p>
                            </div>
                            <div className="flex flex-row w-full">
                                <div className="flex flex-col justify-center w-1/2 border-r border-gray-300 p-3">
                                    <h2 className="text-gray-500 text-[13px] line-through">160 руб</h2>
                                    <h1 className="text-red-500 font-medium">90 руб</h1>
                                </div>
                                <div className="flex items-center justify-center w-1/2 p-3">
                                    <img src="/dessertC/d.9.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/dessertC/d.7.svg" alt="" className="max-h-[280px]" />
                        <div className="bg-white w-full max-w-[272px] border border-gray-300">
                            <div className="flex flex-col text-start pb-6 border-b border-gray-300 p-3">
                                <h1 className="text-[19px]">Ещё побольше</h1>
                                <p className="text-gray-500 text-[14px] break-words">
                                    3 эклера, 4 трубочки, 6 макарун. Вкусы: клубника - базилик
                                </p>
                            </div>
                            <div className="flex flex-row w-full">
                                <div className="flex flex-col justify-center w-1/2 border-r border-gray-300 p-3">
                                    <h2 className="text-gray-500 text-[13px] line-through">160 руб</h2>
                                    <h1 className="text-red-500 font-medium">90 руб</h1>
                                </div>
                                <div className="flex items-center justify-center w-1/2 p-3">
                                    <img src="/dessertC/d.9.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/dessertC/d.8.svg" alt="" className="max-h-[280px]" />
                        <div className="bg-white w-full max-w-[272px] border border-gray-300">
                            <div className="flex flex-col text-start pb-6 border-b border-gray-300 p-3">
                                <h1 className="text-[19px]">Ещё побольше</h1>
                                <p className="text-gray-500 text-[14px] break-words">
                                    3 эклера, 4 трубочки, 6 макарун. Вкусы: клубника - базилик
                                </p>
                            </div>
                            <div className="flex flex-row w-full">
                                <div className="flex flex-col justify-center w-1/2 border-r border-gray-300 p-3">
                                    <h2 className="text-gray-500 text-[13px] line-through">160 руб</h2>
                                    <h1 className="text-red-500 font-medium">90 руб</h1>
                                </div>
                                <div className="flex items-center justify-center w-1/2 p-3">
                                    <img src="/dessertC/d.9.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-10">
                    <button className="cursor-pointer mt-10 text-black bg-[#F7F7F7] border px-8 py-3 border-[#4E9DD3] ">
                        Все готовые наборы
                    </button>
                </div>
            </div>
            <AddToCartModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                itemName={selectedProduct.name}
            />
        </div>
    );
}