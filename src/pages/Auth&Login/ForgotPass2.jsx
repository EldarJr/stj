import React from "react";
import { useNavigate } from "react-router";

export default function ForgotPass2() {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <div className="">
                    <div className="fixed inset-0 bg-gray-500 w-full h-full flex flex-col justify-center">
                        <div className="flex flex-col items-center">
                            <img src="/Auth/a.3.svg" alt="" />

                            <div className="bg-[#F7EBE5] flex flex-col items-center justify-center p-5 w-full max-w-[570px]">
                                <h1 className="text-medium text-[28px]">Забыли пароль?</h1>
                                <p className="text-center text-[12px] w-[370px] mt-2">Инструкция по восстановлению пароля отправлена на указанный e-mail адрес. Проверьте новые письма. </p>

                                <div className="mt-5 flex flex-col items-center w-full max-w-[370px]">
                                   
                                    <button onClick={() => navigate("/")} className="mt-5 cursor-pointer bg-[#E7426A] w-full text-white  py-3 rounded-lg ">На главную</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ForgotPass2