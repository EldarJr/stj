import React from 'react';
import usePrintStore from '../../app/state/usePrintStore';
import { useNavigate } from 'react-router';

export default function ChooseImg() {
    const navigate = useNavigate();
    const { quantity, price, cart, addItemToCart, removeItemFromCart } = usePrintStore();

    const imgMas = [
        { id: 1, img: "/Print/p.2.svg" },
        { id: 2, img: "/Print/p.3.svg" },
        { id: 3, img: "/Print/p.4.svg" },
        { id: 5, img: "/Print/p.5.svg" },
        { id: 6, img: "/Print/p.6.svg" },
        { id: 7, img: "/Print/p.7.svg" },
        { id: 8, img: "/Print/p.10.svg" },
        { id: 9, img: "/Print/p.10.svg" },
        { id: 10, img: "/Print/p.10.svg" },
        { id: 11, img: "/Print/p.10.svg" },
        { id: 12, img: "/Print/p.10.svg" },
        { id: 13, img: "/Print/p.10.svg" },
        { id: 14, img: "/Print/p.10.svg" },
        { id: 15, img: "/Print/p.10.svg" },
        { id: 16, img: "/Print/p.10.svg" },
    ];

    const totalSelected = cart.length;
    const isCountFull = totalSelected === quantity;

    const buttonClass = isCountFull
        ? 'border-[#4E9DD3] bg-white text-[#4E9DD3] hover:bg-[#4E9DD3] hover:text-white hover:border-[#4E9DD3]'
        : 'bg-gray-300 text-gray-500 cursor-not-allowed';

    const handleNextClick = () => {
        if (isCountFull) {
            navigate("/print");
        }
    };

    const getImgSrc = (imgId) => {
        const found = imgMas.find(img => img.id === imgId);
        return found ? found.img : '';
    }

    return (
        <div className="bg-[#F7F7F7] pt-10 pb-10 min-h-screen">
            <div className="mt-5 w-full flex flex-col items-center justify-center mb-10 text-center">
                <nav className="flex items-center text-sm text-gray-500 space-x-1">
                    <a href="/" className="hover:underline">Главная</a>
                    <span>{'>'}</span>
                    <a href="/delivery" className="text-gray-500 hover:underline">
                        Собрать набор
                    </a>
                    <span>{'>'}</span>
                    <a href="/delivery" className="text-blue-500 hover:underline">
                        Выбрать количество
                    </a>
                </nav>
                <h1 className='text-[30px] font-medium mt-10'>Выберите изображения</h1>
                <p className='text-gray-500 w-[288px]'>Загрузите собственные изображения или выберите из нашей галереи</p>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-12 w-full max-w-[1200px] mx-auto px-4 lg:px-0">
                <div className="flex-grow grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10">
                    {imgMas.map(im => (
                        <div key={im.id} className='flex flex-col items-center'>
                            <div>
                                <img src={im.img} alt="" />
                            </div>
                            <div className='flex flex-row items-center mt-2'>
                                <button
                                    onClick={() => addItemToCart(im.id)}
                                    className="w-6 h-6 flex items-center justify-center border border-gray-300 text-gray-600 rounded-md hover:bg-gray-200"
                                    disabled={isCountFull}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 flex-shrink-0 lg:w-80 h-full flex flex-col">
                    <div className="text-lg text-center font-medium mb-4">
                        {totalSelected} из {quantity} шт.
                        <span className="text-red-500"> {price} руб.</span>
                    </div>
                    <hr className="border-gray-200 mb-4" />

                    <ul className="grid grid-cols-3 gap-4 mb-6 overflow-y-auto">
                        {cart.map(item => (
                            <li key={item.id} className="relative flex flex-col items-center gap-2 p-2  rounded-md">
                                <img src={getImgSrc(item.imgId)} alt="" className="w-17 h-17 object-cover rounded-md" />
                                <button
                                    onClick={() => removeItemFromCart(item.id)}
                                    className="absolute top-1 right-1 w-5 h-5 flex items-center justify-center bg-gray-300 rounded-full text-gray-600 text-sm hover:bg-gray-400"
                                >
                                    &times;
                                </button>
                            </li>
                        ))}
                    </ul>

                    <hr className="border-gray-200 mb-4" />

                    <div className='flex flex-col items-center '>
                        <img onClick={() => navigate("/error")} className='cursor-pointer' src="/Print/p.9.svg" alt="Загрузить с компьютера" />
                        <h1 className='font-medium text-[#4E9DD3] mt-2 '>Загрузить с компьютера</h1>
                        <button onClick={() => navigate("/error")} className="cursor-pointer mt-3 mb-3 w-full text-[#4E9DD3] font-medium py-3 border border-[#4E9DD3] rounded-lg hover:bg-[#4E9DD3] hover:text-white transition duration-300">
                           Ввести текст
                        </button>
                    </div>

                    <hr className="border-gray-200 mb-4" />

                    <button
                        onClick={handleNextClick}
                        disabled={!isCountFull}
                        className={`w-full font-medium py-3 rounded-lg transition duration-300 mb-2 ${isCountFull ? 'cursor-pointer' : 'cursor-not-allowed'} ${buttonClass}`}
                    >
                        ДАЛЕЕ
                    </button>
                </div>
            </div>
        </div>
    );
}