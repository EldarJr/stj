import React from "react";
import { Navigate, useNavigate } from "react-router";


export default function EstimateUs2() {
    const navigate = useNavigate()
    return (
        <div>
            <div className="bg-[#F7F7F7] w-full h-full flex flex-col items-center">
                <div className="flex flex-col items-center text-center mt-10">
                    <h1 className="text-[40px] font-medium">Оцените нас</h1>
                    <p className="text-gray-500">Что Вам не понравилось?</p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <div className=" min-h-screen p-4 sm:p-6 lg:p-8 flex justify-center items-start">
                        <div className=" p-6 sm:p-8 lg:p-10 rounded-lg max-w-4xl w-full">
                            
                            <div className="space-y-4">
                              
                                <div className="bg-white flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                    <label className="flex items-center gap-4 cursor-pointer">
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300" />
                                        <span className="text-lg text-gray-800">Приём заказа</span>
                                    </label>
                                   
                                </div>

                             
                                <div className="bg-white flex items-center justify-between p-4 border border-gray-300 rounded-lg">
                                    <label className="flex items-center gap-4 cursor-pointer">
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300" />
                                        <span className="text-lg text-gray-800">Доставка</span>
                                    </label>
                                    
                                </div>

                                
                                <div className="bg-white flex items-center p-4 border border-gray-300 rounded-lg">
                                    <label className="flex items-center gap-4 cursor-pointer">
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300" />
                                        <span className="text-lg text-gray-800">Упаковка</span>
                                    </label>
                                </div>

                               
                                <div className="bg-white flex items-center p-4 border border-gray-300 rounded-lg">
                                    <label className="flex items-center gap-4 cursor-pointer">
                                        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 rounded border-gray-300" />
                                        <span className="text-lg text-gray-800">Вкус продукции</span>
                                    </label>
                                </div>
                            </div>

                           
                            <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                <div className="mb-4 sm:mb-0">
                                    <h2 className="text-xl font-semibold">Расскажите подробнее,</h2>
                                    <p className="text-gray-600">все сообщения читаю лично.</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <h3 className="font-semibold">Андрей Королёв</h3>
                                        <p className="text-gray-500 text-sm">Руководитель Macaronshop</p>
                                    </div>
                                    <img src="/Est/est.6.svg" alt="Андрей Королёв" className="w-12 h-12 rounded-full object-cover" />
                                </div>
                            </div>

                          
                            <div className="mt-4 bg-white rounded-lg mb-1 ">
                                <textarea
                                    className="w-full h-32 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    placeholder="Текст комментария"
                                ></textarea>
                            </div>

                            
                            <div className="mt-6 ">
                                <p className="text-lg font-medium mb-2">Ваш телефон</p>
                                <div className="w-full flex flex-col justify-between sm:flex-row items-center  ">
                                    <input
                                        type="text"
                                        className=" bg-white w-full sm:w-1/2 p-4  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="+7 (___) ___ - __ - __"
                                    />
                                    <button onClick={() => navigate("/th")} className="w-full sm:w-auto px-20 py-4 bg-[#E7426A] text-white font-medium rounded-lg hover:bg-red-500 transition-colors">
                                        Отправить
                                    </button>
                                </div>
                            </div>

                            
                            <div className="mt-8 text-xs text-gray-400 text-center">
                                <p>Нажимая на кнопку "Оформить заказ" Я принимаю и соглашаюсь с <a href="#" className="text-blue-500 hover:underline">Договором оферты</a> и разрешаю обработку</p>
                                <p>моих персональных данных в соответствии с <a href="#" className="text-blue-500 hover:underline">Политикой конфиденциальности</a></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

