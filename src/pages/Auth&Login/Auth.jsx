
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Auth() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [company, setCompany] = useState('');
    const [password, setPassword] = useState('');

    
    const isFormValid = name.trim() !== '' && phone.trim() !== '';

    return (
        <div className="">
            <div className="fixed inset-0 bg-gray-500 w-full h-full flex flex-col justify-center">
                <div className="flex flex-col items-center">
                    <img src="/Auth/a.1.svg" alt="" />
                    <div className="bg-[#F7EBE5] flex flex-col items-center justify-center p-5 w-full max-w-[971px]">
                        <h1 className="text-medium text-[28px]">Получите доступ к оптовым ценам</h1>
                        <p>Пройдите регистрацию</p>
                        <div className="flex flex-col lg:flex-row items-start gap-8 w-full max-w-[770px]">
                            <div className="flex flex-col gap-5 w-full">
                                <div className="flex flex-col gap-2">
                                    <h1>Ваше имя*</h1>
                                    <input
                                        className="bg-white py-3 px-2 rounded-md"
                                        type="text"
                                        placeholder="Укажите имя"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1>Ваш телефон*</h1>
                                    <input
                                        className="bg-white py-3 px-2 rounded-md"
                                        type="text"
                                        placeholder="+7 (___) ___-__-__"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1>E-mail</h1>
                                    <input
                                        className="bg-white py-3 px-2 rounded-md"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 w-full">
                                <div className="flex flex-col gap-2">
                                    <h1>Город</h1>
                                    <input
                                        className="bg-white py-3 px-2 rounded-md"
                                        type="text"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1>Компания</h1>
                                    <input
                                        className="bg-white py-3 px-2 rounded-md"
                                        type="text"
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1>Придумайте пароль</h1>
                                    <input
                                        className="bg-white py-3 px-2 rounded-md"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 w-full max-w-[770px]">
                            <button
                                onClick={() => navigate("/")}
                                className="cursor-pointer bg-[#E7426A] text-white w-full py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={!isFormValid}
                            >
                                Отправить заявку на регистрацию
                            </button>
                        </div>
                        <div className="mt-5 text-center">
                            <h1 className="font-light">Уже зарегистрированы? <span onClick={() => navigate("/entrance")} className="cursor-pointer font-medium text-red-500"> Войти</span></h1>
                            <p className="mt-3 text-[12px] text-gray-600">Нажимая на кнопку "Отправить заявку на регистрацию" я принимаю и соглашаюсь с <span className="text-blue-500">Договором оферты</span>  и разрешаю обработку моих персональных данных в соответствии с <span className="text-blue-500">Политикой конфиденциальности</span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}