import React from "react";
import { useNavigate } from "react-router";


export default function Entrance() {
    const navigate = useNavigate()
    return (
        <div className="">
            <div className="fixed inset-0 bg-gray-500 w-full h-full flex flex-col justify-center">
                <div className="flex flex-col items-center">
                    <img src="/Auth/a.2.svg" alt="" />

                    <div className="bg-[#F7EBE5] flex flex-col items-center justify-center p-5 w-full max-w-[570px]">
                        <h1 className="text-medium text-[28px]">Вход</h1>
                       

                        <div className="mt-5 flex flex-col items-center w-full max-w-[370px]">
                            <div className="flex flex-col gap-3 w-full max-w-[470px] ">
                                <div className="flex flex-col gap-2">
                                    <h1>E-mail</h1>
                                    <input className="bg-white py-3 px-2 rounded-md" type="text" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1>Пароль</h1>
                                    <input className="bg-white py-3 px-2 rounded-md" type="text" />
                                </div>
                            </div>
                            <div className="mt-1 flex flex-col items-end  w-full max-w-[370px]">
                                <h1 onClick={() => navigate("/forgotPass")} className="cursor-pointer text-red-500">Забыли пароль</h1>
                            </div>
                            <button onClick={() => navigate("/")} className="mt-1 cursor-pointer bg-[#E7426A] w-full text-white  py-3 rounded-lg ">Вход</button>
                        </div>
                        <div className="mt-5 text-center flex flex-col items-center">
                            <h1 className="font-light">Ещё не зарегистрированы?  <span onClick={() => navigate("/auth")} className="cursor-pointer font-medium text-red-500"> Зарегистрироваться</span></h1>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Entrance