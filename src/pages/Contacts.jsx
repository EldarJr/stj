import React from "react";

export default function Contacts() {
    return (
        <div>
            <div className="bg-[#FFFFFF] w-full h-full flex flex-col justify-center items-center">
                <div className="mt-10">
                    <nav className="flex items-center text-sm text-gray-500 space-x-1">
                        <a href="/" className="hover:underline">Главная</a>
                        <span>{'>'}</span>
                        <a href="/delivery" className="text-blue-500 hover:underline">
                            Доставка и оплата
                        </a>
                    </nav>
                </div>
                <div className="flex flex-col justify-center items-center justify-center lg:flex-row  text-start gap-20 mb-10">

                    <div className="hidden lg:flex items-center justify-center relative mt-0">
                        <img className="" src="/Contacts/c.1.svg" alt="" />
                        <img className="absolute right-10 bottom-20" src="/Contacts/c.2.svg" alt="" />
                    </div>

                    <div className="flex flex-col items-start text-start mt-10 mb-10 mr-20 ">
                        <h1 className="text-[30px] mb-5">Контакты</h1>
                        <h1 className="mb-2">Производство</h1>
                        <p className="mb-7  font-extralight">Маршала Тухачевского, 22 Время работы: с 8 до 19:30.</p>

                        <h1 className="mb-2" >Пункты самовывоза:</h1>
                        <p className="mb-7  font-extralight" >Кафе “Морошка”. Марша Тухачевского, 22  <br />(с 8 до 19:30) <br /> Кафе “Мята”. Наб канала Грибоедова, 37  <br />(с 10 до 22)</p>

                        <h1 className="mb-2">Телефоны:</h1>
                        <p className="mb-7  font-extralight">8 (812) 309-82-88 основной номер<br /> 8 (981) 841-85-25 для жалоб и предложений</p>
                    </div>

                    <div className=" lg:hidden flex items-center justify-center relative mt-0">
                        <img className="" src="/Contacts/c.1.svg" alt="" />
                        <img className="absolute right-10 bottom-20" src="/Contacts/c.2.svg" alt="" />
                    </div>


                </div>


            </div>
        </div>
    )

}