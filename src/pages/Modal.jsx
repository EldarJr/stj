import React from 'react';
import { useNavigate } from 'react-router';

export default function AddToCartModal({ isOpen, onClose, itemName }) {
    if (!isOpen) return null; 
    const navigate  = useNavigate()

    return (
        <div className="fixed inset-0 bg-gray-300 bg-opacity-75 flex items-center justify-center z-50 p-4">
           
            <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-xl relative">
               
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

               
                <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
                    Товар добавлен в корзину
                </h2>

               
                <p className="text-gray-600 mb-6 text-center">
                   Набор {itemName ? `"${itemName}"` : 'Товар'} добавлен в корзину.
                </p>

               
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={onClose} 
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-blue-700 font-medium hover:bg-gray-50 transition-colors"
                    >
                        Продолжить покупки
                    </button>
                    <button
                        onClick={() => navigate("/basket")}
                        className="flex-1 px-4 py-3 bg-[#E7426A] hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
                    >Оформить сейчас</button>
                </div>
            </div>
        </div>
    );
}