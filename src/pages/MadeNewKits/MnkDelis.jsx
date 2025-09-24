import { useMnkStore } from '../../app/state/useMnkStore';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function MnkDelis() {
    const navigate = useNavigate()

    const {
        selectedKit,
        cart,
        addMacaronToCart,
        removeMacaronFromCart,
        deleteMacaronFromCart,
        getTotalSelected
    } = useMnkStore();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const totalSelected = getTotalSelected();

    const handleAddClick = (macaron) => {
        if (totalSelected < selectedKit.totalQuantity) {
            addMacaronToCart(macaron);
        } else {
            setIsModalOpen(true);
        }
    };

    const flavors = [
        { id: 1, name: 'Шоколад, банан', description: 'Сезонный вкус: молочный шоколад, отборные свежие бананы.', image: '/Mnk/mnk.6.svg' , price:50},
        { id: 2, name: 'Облепиха, розмарин', description: 'Сезонный вкус: молочный шоколад, отборные свежие бананы.', image: '/Mnk/mnk.7.svg' , price:50 },
        { id: 3, name: 'Чёрный трюфель', description: 'Сезонный вкус: молочный шоколад, отборные свежие бананы.', image: '/Mnk/mnk.8.svg' , price:50 },
        { id: 4, name: 'Голубой сыр', description: 'Тропический и яркий вкус. Отлично подходит для лета.', image: '/Mnk/mnk.9.svg' , price:50 },
        { id: 5, name: 'Пармезан', description: 'Тропический и яркий вкус. Отлично подходит для лета.', image: '/Mnk/mnk.10.svg'  , price:50},
        { id: 6, name: 'Песто ', description: 'Тропический и яркий вкус. Отлично подходит для лета.', image: '/Mnk/mnk.11.svg'  , price:50},
        { id: 7, name: 'Шоколад, банан', description: 'Тропический и яркий вкус. Отлично подходит для лета.', image: '/Mnk/mnk.12.svg'  , price:50},
        { id: 8, name: 'Облепиха, розмарин', description: 'Тропический и яркий вкус. Отлично подходит для лета.', image: '/Mnk/mnk.13.svg'  , price:50},
        { id: 9, name: 'Чёрный трюфель', description: 'Тропический и яркий вкус. Отлично подходит для лета.', image: '/Mnk/mnk.14.svg'  , price:50},

    ];

    return (
        <div className="bg-[#F7F7F7] pt-10 pb-10 min-h-screen">

            <div className="mt-5 w-full flex flex-col items-center justify-center mb-10">
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
                <h1 className='text-[30px] font-medium mt-10'>Выберите вкусы</h1>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-center gap-8 lg:gap-12 w-full max-w-[1200px] mx-auto">



                <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {flavors.map(flavor => (
                        <div key={flavor.id} className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center">
                            <img src={flavor.image} alt={flavor.name} />
                            <div className="flex items-start text-start flex-col mb-4">
                                <h2 className="text-xl font-medium mb-1">{flavor.name}</h2>
                                <p className="text-gray-500 text-sm">{flavor.description}</p>
                            </div>
                            <div className="flex justify-center items-center mt-4 border-t border-gray-300 pt-2 w-full">
                                <button className="w-6 h-6 flex items-center justify-center border border-gray-300 text-gray-600 rounded-md hover:bg-gray-200"
                                    onClick={() => removeMacaronFromCart(flavor.id)}>-</button>
                                <span className="w-8 h-8 flex items-center justify-center text-lg">{cart.find(item => item.id === flavor.id)?.quantity || 0}</span>
                                <button className="w-6 h-6 flex items-center justify-center border border-gray-300 text-gray-600 rounded-md hover:bg-gray-200"
                                    onClick={() => handleAddClick(flavor)}>+</button>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="bg-gray-50 rounded-lg shadow-md p-6 flex-shrink-0 lg:w-80 h-full">

                    <div className="text-lg text-center font-medium mb-4">
                        {totalSelected} из {selectedKit.totalQuantity} шт.
                        <span className="text-red-500"> {selectedKit.price} руб.</span>
                    </div>
                    <hr className="border-gray-200 mb-4" />
                    <ul className="space-y-3 mb-6">
                        {cart.map(item => (
                            <li key={item.id} className="flex items-center justify-between text-gray-700">
                                <span>{item.name}</span>
                                <div className="flex items-center">
                                    <button className='w-8 h-7 border border-gray-300 rounded-md' onClick={() => removeMacaronFromCart(item.id)}>-</button>
                                    <span className="w-8 h-8 flex items-center justify-center text-lg">{item.quantity}</span>
                                    <button className='w-8 h-7 border border-gray-300 rounded-md' onClick={() => handleAddClick(item)}>+</button>
                                    <button onClick={() => deleteMacaronFromCart(item.id)} className="ml-5 text-gray-500 font-bold">×</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {totalSelected < selectedKit.totalQuantity && (
                        <p className="text-gray-500 border-t border-gray-300 pt-5 text-sm mb-4">
                            Нужно выбрать еще {selectedKit.totalQuantity - totalSelected} шт.
                        </p>
                    )}
                    <button onClick={() => navigate("/mnkDop")} disabled={totalSelected !== selectedKit.totalQuantity} className={`cursor-navigate w-full font-medium py-3 rounded-lg transition duration-300 mb-2
                       ${totalSelected === selectedKit.totalQuantity ? 'bg-[#E7426A] text-white' : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}>
                        Оформить заказ
                    </button>
                    <button className="w-full text-red-500 font-medium py-3 border border-red-500 rounded-lg hover:bg-red-500 hover:text-white transition duration-300">
                        Собрать еще набор
                    </button>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <h3 className="text-xl font-bold mb-4">Ошибка</h3>
                        <p className="mb-6">
                            Количество макарон должно быть ровно {selectedKit.totalQuantity} шт.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="bg-[#E7426A] text-white px-4 py-2 rounded-lg"
                        >
                            ОК
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}