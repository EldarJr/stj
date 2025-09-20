import React from "react";
import { Navigate, useNavigate } from "react-router";
import { useNewsStore } from "../app/state/useNewsStore";
import { useBasketStore } from "../app/state/useBasketStore";
import AddToCartModal from "../pages/Modal";
import { useState } from "react";

export default function ReadyKitsRow() {
    const navigate = useNavigate()
    const setSelectedProduct = useNewsStore((state) => state.setSelectedProduct);
    const addToBasket = useBasketStore((state) => state.addToBasket);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };



    return (
        <div>


            <div className="lg:hidden flex flex-wrap justify-center gap-5">

                <div className="flex flex-col itemx-center justify-center border border-[#EDEDF0] rounded-lg">
                    <div>
                        <img onClick={() => {
                            setSelectedProduct({
                                name: "Сердце",
                                description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                price: "2800 руб",
                                img: "/redyKits/rk.heart.svg",
                            }); navigate("/card");
                        }} className="cursor-pointer" src="/redyKits/rk.heart.svg" alt="" />
                    </div>
                    <div className="bg-white">
                        <div className="mb-3 pt-5 pl-5">
                            <h1 className="text-[20px]">Сердце</h1>
                            <p className="text-gray-500 font-extralight"> 24 штуки в коробке в виде сердца. <br /> Ассорти из 6 вкусов</p>
                        </div>
                        <div className="flex justify-between border-t border-[#EDEDF0] ">
                            <div className=" p-5">
                                <h1 className="text-red-500">2800 руб</h1>
                            </div>
                            <div className="cursor-pointer p-5 flex flex-row items-center justify-cente border-l border-[#EDEDF0]">
                                <img
                                    onClick={() =>
                                        addToBasket({
                                            id: 1,
                                            name: "Сердце",
                                            description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                            price: 2800,
                                            img: "/redyKits/rk.heart.svg",
                                        })} className="cursor-pointer" src="/bag.svg" alt=""
                                />

                                <button
                                    onClick={() => {
                                        addToBasket({
                                            id: 1,
                                            name: "Сердце",
                                            description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                            price: 2800,
                                            img: "/redyKits/rk.heart.svg",
                                        })
                                        handleOpenModal()

                                    }

                                    } className="cursor-pointer" >В корзину</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col itemx-center justify-center border border-[#EDEDF0] rounded-lg">
                    <div>
                        <img
                            onClick={() => {
                                setSelectedProduct({
                                    name: "Красота спасёт мир",
                                    description: "Набор 16 шт. Вкусы: клубника - базилик",
                                    price: "750 руб",
                                    img: "/redyKits/rk.beatiful.svg",
                                });
                                navigate("/card");
                            }}
                            className="cursor-pointer"
                            src="/redyKits/rk.beatiful.svg"
                            alt="" />
                    </div>
                    <div className="bg-white">
                        <div className="mb-3 pt-5 pl-5">
                            <h1 className="text-[20px]">Красота спасёт мир</h1>
                            <p className="text-gray-500 font-extralight">
                                Набор 16 шт. Вкусы: клубника - базилик
                            </p>
                        </div>
                        <div className="flex justify-between border-t border-[#EDEDF0] ">
                            <div className=" p-5">
                                <h1 className="text-red-500">750 руб</h1>
                            </div>
                            <div className="cursor-pointer p-5 flex flex-row items-center justify-cente border-l border-[#EDEDF0]">
                                <img
                                    onClick={() =>
                                        addToBasket({
                                            id: 2,
                                            name: "Красота спасёт мир",
                                            description: "Набор 16 шт. Вкусы: клубника - базилик",
                                            price: 750,
                                            img: "/redyKits/rk.beatiful.svg",
                                        })
                                    }
                                    className="cursor-pointer"
                                    src="/bag.svg"
                                    alt=""
                                />
                                <button
                                    onClick={() =>
                                        addToBasket({
                                            id: 2,
                                            name: "Красота спасёт мир",
                                            description: "Набор 16 шт. Вкусы: клубника - базилик",
                                            price: 750,
                                            img: "/redyKits/rk.beatiful.svg",
                                        })
                                    }
                                    className="cursor-pointer"
                                >
                                    В корзину
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col itemx-center justify-center border border-[#EDEDF0] rounded-lg">
                    <div>
                        <img
                            onClick={() => {
                                setSelectedProduct({
                                    name: "Круглый набор",
                                    description: "40 макаронс в круглой коробке с персональной надписью",
                                    price: "3900 руб",
                                    img: "/redyKits/rk.circle.svg",
                                });
                                navigate("/card");
                            }}
                            className="cursor-pointer"
                            src="/redyKits/rk.circle.svg"
                            alt=""
                        />
                    </div>
                    <div className="bg-white">
                        <div className="mb-3 pt-5 pl-5">
                            <h1 className="text-[20px]">Круглый набор</h1>
                            <p className="text-gray-500 font-extralight">
                                40 макаронс в круглой коробке <br /> с персональной надписью
                            </p>
                        </div>
                        <div className="flex justify-between border-t border-[#EDEDF0] ">
                            <div className=" p-5">
                                <h1 className="text-red-500">3900 руб</h1>
                            </div>
                            <div className="cursor-pointer p-5 flex flex-row items-center justify-cente border-l border-[#EDEDF0]">
                                <img
                                    onClick={() =>
                                        addToBasket({
                                            id: 3,
                                            name: "Круглый набор",
                                            description: "40 макаронс в круглой коробке с персональной надписью",
                                            price: 3900,
                                            img: "/redyKits/rk.circle.svg",
                                        })
                                    }
                                    className="cursor-pointer"
                                    src="/bag.svg"
                                    alt=""
                                />
                                <button
                                    onClick={() =>
                                        addToBasket({
                                            id: 3,
                                            name: "Круглый набор",
                                            description: "40 макаронс в круглой коробке с персональной надписью",
                                            price: 3900,
                                            img: "/redyKits/rk.circle.svg",
                                        })
                                    }
                                    className="cursor-pointer"
                                >
                                    В корзину
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col itemx-center justify-center border border-[#EDEDF0] rounded-lg">
                    <div>
                        <img
                            onClick={() => {
                                setSelectedProduct({
                                    name: "Набор на 9",
                                    description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                    price: "950 руб",
                                    img: "/redyKits/rk.nine.svg",
                                });
                                navigate("/card");
                            }}
                            className="cursor-pointer"
                            src="/redyKits/rk.nine.svg"
                            alt=""
                        />
                    </div>
                    <div className="bg-white">
                        <div className="mb-3 pt-5 pl-5">
                            <h1 className="text-[20px]">Набор на 9</h1>
                            <p className="text-gray-500 font-extralight">
                                24 штуки в коробке в виде сердца. <br /> Ассорти из 6 вкусов
                            </p>
                        </div>
                        <div className="flex justify-between border-t border-[#EDEDF0] ">
                            <div className=" p-5">
                                <h1 className="text-red-500">950 руб</h1>
                            </div>
                            <div className="cursor-pointer p-5 flex flex-row items-center justify-cente border-l border-[#EDEDF0]">
                                <img
                                    onClick={() =>
                                        addToBasket({
                                            id: 4,
                                            name: "Набор на 9",
                                            description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                            price: 950,
                                            img: "/redyKits/rk.nine.svg",
                                        })
                                    }
                                    className="cursor-pointer"
                                    src="/bag.svg"
                                    alt=""
                                />
                                <button
                                    onClick={() =>
                                        addToBasket({
                                            id: 4,
                                            name: "Набор на 9",
                                            description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                            price: 950,
                                            img: "/redyKits/rk.nine.svg",
                                        })
                                    }
                                    className="cursor-pointer"
                                >
                                    В корзину
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col itemx-center justify-center border border-[#EDEDF0] rounded-lg">
                    <div>
                        <img
                            onClick={() => {
                                setSelectedProduct({
                                    name: "Набор на 16",
                                    description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                    price: "950 руб",
                                    img: "/redyKits/rk.sixteen.svg",
                                });
                                navigate("/card");
                            }}
                            className="cursor-pointer"
                            src="/redyKits/rk.sixteen.svg"
                            alt=""
                        />
                    </div>
                    <div className="bg-white">
                        <div className="mb-3 pt-5 pl-5">
                            <h1 className="text-[20px]">Набор на 16</h1>
                            <p className="text-gray-500 font-extralight">
                                24 штуки в коробке в виде сердца. <br /> Ассорти из 6 вкусов
                            </p>
                        </div>
                        <div className="flex justify-between border-t border-[#EDEDF0] ">
                            <div className=" p-5">
                                <h1 className="text-red-500">950 руб</h1>
                            </div>
                            <div className="cursor-pointer p-5 flex flex-row items-center justify-cente border-l border-[#EDEDF0]">
                                <img
                                    onClick={() =>
                                        addToBasket({
                                            id: 5,
                                            name: "Набор на 16",
                                            description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                            price: 950,
                                            img: "/redyKits/rk.sixteen.svg",
                                        })
                                    }
                                    className="cursor-pointer"
                                    src="/bag.svg"
                                    alt=""
                                />
                                <button
                                    onClick={() =>
                                        addToBasket({
                                            id: 5,
                                            name: "Набор на 16",
                                            description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                            price: 950,
                                            img: "/redyKits/rk.sixteen.svg",
                                        })
                                    }
                                    className="cursor-pointer"
                                >
                                    В корзину
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col itemx-center justify-center border border-[#EDEDF0] rounded-lg">
                    <div>
                        <img
                            onClick={() => {
                                setSelectedProduct({
                                    name: "Сердце",
                                    description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                    price: "2800 руб",
                                    img: "/redyKits/rk.circle2.svg",
                                });
                                navigate("/card");
                            }}
                            className="cursor-pointer"
                            src="/redyKits/rk.circle2.svg"
                            alt=""
                        />
                    </div>
                    <div className="bg-white">
                        <div className="mb-3 pt-5 pl-5">
                            <h1 className="text-[20px]">Сердце</h1>
                            <p className="text-gray-500 font-extralight">
                                24 штуки в коробке в виде сердца. <br /> Ассорти из 6 вкусов
                            </p>
                        </div>
                        <div className="flex justify-between border-t border-[#EDEDF0] ">
                            <div className=" p-5">
                                <h1 className="text-red-500">2800 руб</h1>
                            </div>
                            <div className="cursor-pointer p-5 flex flex-row items-center justify-cente border-l border-[#EDEDF0]">
                                <img
                                    onClick={() =>
                                        addToBasket({
                                            id: 6,
                                            name: "Сердце",
                                            description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                            price: 2800,
                                            img: "/redyKits/rk.circle2.svg",
                                        })
                                    }
                                    className="cursor-pointer"
                                    src="/bag.svg"
                                    alt=""
                                />
                                <button
                                    onClick={() =>
                                        addToBasket({
                                            id: 6,
                                            name: "Сердце",
                                            description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                            price: 2800,
                                            img: "/redyKits/rk.circle2.svg",
                                        })
                                    }
                                    className="cursor-pointer"
                                >
                                    В корзину
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="hidden lg:flex flex-wrap justify-center gap-5">
                <div className="flex flex-row items-center gap-5">

                    <div className="flex flex-col itemx-center justify-center border border-[#EDEDF0] rounded-lg">
                        <div>
                            <img onClick={() => {
                                setSelectedProduct({
                                    name: "Сердце",
                                    description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                    price: "2800 руб",
                                    img: "/redyKits/rk.heart.svg",
                                }); navigate("/card");
                            }} className="cursor-pointer" src="/redyKits/rk.heart.svg" alt="" />
                        </div>
                        <div className="bg-white">
                            <div className="mb-3 pt-5 pl-5">
                                <h1 className="text-[20px]">Сердце</h1>
                                <p className="text-gray-500 font-extralight"> 24 штуки в коробке в виде сердца. <br /> Ассорти из 6 вкусов</p>
                            </div>
                            <div className="flex justify-between border-t border-[#EDEDF0] ">
                                <div className=" p-5">
                                    <h1 className="text-red-500">2800 руб</h1>
                                </div>
                                <div className="cursor-pointer p-5 flex flex-row items-center justify-cente border-l border-[#EDEDF0]">
                                    <img
                                        onClick={() => {
                                            addToBasket({
                                                id: 1,
                                                name: "Сердце",
                                                description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                                price: 2800,
                                                img: "/redyKits/rk.heart.svg",
                                            })
                                            handleOpenModal()

                                        }

                                        } className="cursor-pointer" src="/bag.svg" alt=""
                                    />

                                    <button
                                        onClick={() => {
                                            addToBasket({
                                                id: 1,
                                                name: "Сердце",
                                                description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                                price: 2800,
                                                img: "/redyKits/rk.heart.svg",
                                            })
                                            handleOpenModal()

                                        }

                                        } className="cursor-pointer" >В корзину</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col itemx-center justify-center border border-[#EDEDF0] rounded-lg">
                        <div>
                            <img
                                onClick={() => {
                                    setSelectedProduct({
                                        name: "Красота спасёт мир",
                                        description: "Набор 16 шт. Вкусы: клубника - базилик",
                                        price: "750 руб",
                                        img: "/redyKits/rk.beatiful.svg",
                                    });
                                    navigate("/card");
                                }}
                                className="cursor-pointer"
                                src="/redyKits/rk.beatiful.svg"
                                alt="" />
                        </div>
                        <div className="bg-white">
                            <div className="mb-3 pt-5 pl-5">
                                <h1 className="text-[20px]">Красота спасёт мир</h1>
                                <p className="text-gray-500 font-extralight">
                                    Набор 16 шт. Вкусы: клубника - базилик<br /> кокос, голубой сыр, пармезан
                                </p>
                            </div>
                            <div className="flex justify-between border-t border-[#EDEDF0] ">
                                <div className=" p-5">
                                    <h1 className="text-red-500">750 руб</h1>
                                </div>
                                <div className="cursor-pointer p-5 flex flex-row items-center justify-cente border-l border-[#EDEDF0]">
                                    <img
                                        onClick={() => {
                                            addToBasket({
                                                id: 1,
                                                name: "Сердце",
                                                description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                                price: 2800,
                                                img: "/redyKits/rk.heart.svg",
                                            })
                                            handleOpenModal()

                                        }

                                        }
                                        className="cursor-pointer"
                                        src="/bag.svg"
                                        alt=""
                                    />
                                    <button
                                        onClick={() => {
                                            addToBasket({
                                                id: 1,
                                                name: "Сердце",
                                                description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                                price: 2800,
                                                img: "/redyKits/rk.heart.svg",
                                            })
                                            handleOpenModal()

                                        }

                                        }
                                        className="cursor-pointer"
                                    >
                                        В корзину
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col itemx-center justify-center border border-[#EDEDF0] rounded-lg">
                        <div>
                            <img
                                onClick={() => {
                                    setSelectedProduct({
                                        name: "Круглый набор",
                                        description: "40 макаронс в круглой коробке с персональной надписью",
                                        price: "3900 руб",
                                        img: "/redyKits/rk.circle.svg",
                                    });
                                    navigate("/card");
                                }}
                                className="cursor-pointer"
                                src="/redyKits/rk.circle.svg"
                                alt=""
                            />
                        </div>
                        <div className="bg-white">
                            <div className="mb-3 pt-5 pl-5">
                                <h1 className="text-[20px]">Круглый набор</h1>
                                <p className="text-gray-500 font-extralight">
                                    40 макаронс в круглой коробке <br /> с персональной надписью
                                </p>
                            </div>
                            <div className="flex justify-between border-t border-[#EDEDF0] ">
                                <div className=" p-5">
                                    <h1 className="text-red-500">3900 руб</h1>
                                </div>
                                <div className="cursor-pointer p-5 flex flex-row items-center justify-cente border-l border-[#EDEDF0]">
                                    <img
                                        onClick={() => {
                                            addToBasket({
                                                id: 1,
                                                name: "Сердце",
                                                description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                                price: 2800,
                                                img: "/redyKits/rk.heart.svg",
                                            })
                                            handleOpenModal()

                                        }

                                        }
                                        className="cursor-pointer"
                                        src="/bag.svg"
                                        alt=""
                                    />
                                    <button
                                        onClick={() => {
                                            addToBasket({
                                                id: 1,
                                                name: "Сердце",
                                                description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                                price: 2800,
                                                img: "/redyKits/rk.heart.svg",
                                            })
                                            handleOpenModal()

                                        }

                                        }
                                        className="cursor-pointer"
                                    >
                                        В корзину
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-5">

                    <div className="flex flex-col itemx-center justify-center border border-[#EDEDF0] rounded-lg">
                        <div>
                            <img
                                onClick={() => {
                                    setSelectedProduct({
                                        name: "Набор на 9",
                                        description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                        price: "950 руб",
                                        img: "/redyKits/rk.nine.svg",
                                    });
                                    navigate("/card");
                                }}
                                className="cursor-pointer"
                                src="/redyKits/rk.nine.svg"
                                alt=""
                            />
                        </div>
                        <div className="bg-white">
                            <div className="mb-3 pt-5 pl-5">
                                <h1 className="text-[20px]">Набор на 9</h1>
                                <p className="text-gray-500 font-extralight">
                                    24 штуки в коробке в виде сердца. <br /> Ассорти из 6 вкусов
                                </p>
                            </div>
                            <div className="flex justify-between border-t border-[#EDEDF0] ">
                                <div className=" p-5">
                                    <h1 className="text-red-500">950 руб</h1>
                                </div>
                                <div className="cursor-pointer p-5 flex flex-row items-center justify-cente border-l border-[#EDEDF0]">
                                    <img
                                        onClick={() => {
                                            addToBasket({
                                                id: 1,
                                                name: "Сердце",
                                                description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                                price: 2800,
                                                img: "/redyKits/rk.heart.svg",
                                            })
                                            handleOpenModal()

                                        }

                                        }
                                        className="cursor-pointer"
                                        src="/bag.svg"
                                        alt=""
                                    />
                                    <button
                                        onClick={() => {
                                            addToBasket({
                                                id: 1,
                                                name: "Сердце",
                                                description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                                price: 2800,
                                                img: "/redyKits/rk.heart.svg",
                                            })
                                            handleOpenModal()

                                        }

                                        }
                                        className="cursor-pointer"
                                    >
                                        В корзину
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col itemx-center justify-center border border-[#EDEDF0] rounded-lg">
                        <div>
                            <img
                                onClick={() => {
                                    setSelectedProduct({
                                        name: "Набор на 16",
                                        description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                        price: "950 руб",
                                        img: "/redyKits/rk.sixteen.svg",
                                    });
                                    navigate("/card");
                                }}
                                className="cursor-pointer"
                                src="/redyKits/rk.sixteen.svg"
                                alt=""
                            />
                        </div>
                        <div className="bg-white">
                            <div className="mb-3 pt-5 pl-5">
                                <h1 className="text-[20px]">Набор на 16</h1>
                                <p className="text-gray-500 font-extralight">
                                    24 штуки в коробке в виде сердца. <br /> Ассорти из 6 вкусов
                                </p>
                            </div>
                            <div className="flex justify-between border-t border-[#EDEDF0] ">
                                <div className=" p-5">
                                    <h1 className="text-red-500">950 руб</h1>
                                </div>
                                <div className="cursor-pointer p-5 flex flex-row items-center justify-cente border-l border-[#EDEDF0]">
                                    <img
                                        onClick={() => {
                                            addToBasket({
                                                id: 1,
                                                name: "Сердце",
                                                description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                                price: 2800,
                                                img: "/redyKits/rk.heart.svg",
                                            })
                                            handleOpenModal()

                                        }

                                        }
                                        className="cursor-pointer"
                                        src="/bag.svg"
                                        alt=""
                                    />
                                    <button
                                        onClick={() => {
                                            addToBasket({
                                                id: 1,
                                                name: "Сердце",
                                                description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                                price: 2800,
                                                img: "/redyKits/rk.heart.svg",
                                            })
                                            handleOpenModal()

                                        }

                                        }
                                        className="cursor-pointer"
                                    >
                                        В корзину
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col itemx-center justify-center border border-[#EDEDF0] rounded-lg">
                        <div>
                            <img
                                onClick={() => {
                                    setSelectedProduct({
                                        name: "Сердце",
                                        description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                        price: "2800 руб",
                                        img: "/redyKits/rk.circle2.svg",
                                    });
                                    navigate("/card");
                                }}
                                className="cursor-pointer"
                                src="/redyKits/rk.circle2.svg"
                                alt=""
                            />
                        </div>
                        <div className="bg-white">
                            <div className="mb-3 pt-5 pl-5">
                                <h1 className="text-[20px]">Сердце</h1>
                                <p className="text-gray-500 font-extralight">
                                    24 штуки в коробке в виде сердца. <br /> Ассорти из 6 вкусов
                                </p>
                            </div>
                            <div className="flex justify-between border-t border-[#EDEDF0] ">
                                <div className=" p-5">
                                    <h1 className="text-red-500">2800 руб</h1>
                                </div>
                                <div className="cursor-pointer p-5 flex flex-row items-center justify-cente border-l border-[#EDEDF0]">
                                    <img
                                        onClick={() => {
                                            addToBasket({
                                                id: 1,
                                                name: "Сердце",
                                                description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                                price: 2800,
                                                img: "/redyKits/rk.heart.svg",
                                            })
                                            handleOpenModal()

                                        }

                                        }
                                        className="cursor-pointer"
                                        src="/bag.svg"
                                        alt=""
                                    />
                                    <button
                                        onClick={() => {
                                            addToBasket({
                                                id: 1,
                                                name: "Сердце",
                                                description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
                                                price: 2800,
                                                img: "/redyKits/rk.heart.svg",
                                            })
                                            handleOpenModal()

                                        }

                                        }
                                        className="cursor-pointer"
                                    >
                                        В корзину
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <AddToCartModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                itemName={"heart"}
            />
        </div>



    )
}

ReadyKitsRow