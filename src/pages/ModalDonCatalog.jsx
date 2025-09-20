import React from 'react';
import { useNavigate } from 'react-router';

export default function ModalDonCatalog({ isOpen, onClose, itemName }) {
    if (!isOpen) return null;
    const navigate = useNavigate()

    return (
        <div className="fixed inset-0 bg-gray-300 bg-opacity-75 flex items-center justify-center z-50 p-4">

            <div className="bg-[#F7EBE5] rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-2xl relative">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>


                <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                    Скачать весь каталог подарков
                </h2>


                <div className='flex flex-col lg:flex-row items-center gap-5'>
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
                </div>


                <div className="flex flex-col  justify-center gap-4 mt-10">
                    <button
                        onClick={() => navigate("/basket")}
                        className="flex-1 px-4 py-3 bg-[#E7426A] hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
                    >Отправить заявку</button>
                    <p className='text-gray-500 text-[10px]'>Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с Договором оферты и разрешаю обработку моих персональных данных в соответствии с Политикой конфиденциальности</p>
                </div>
            </div>
        </div>
    );
}