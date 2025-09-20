import React from "react";

export default function Delevery() {
    return (
        <div>
            <div className="bg-[#F7F7F7] w-full h-full flex flex-col items-center">
                <div className="mt-10">
                    <nav className="flex items-center text-sm text-gray-500 space-x-1">
                        <a  href="/" className="hover:underline">Главная</a>
                        <span>{'>'}</span>
                        <a href="/delivery" className="text-blue-500 hover:underline">
                            Доставка и оплата
                        </a>
                    </nav>
                </div>
                <div className="flex flex-col items-center justify-center lg:flex-row  text-start gap-10 mb-10">
                    <div className="flex items-center justify-center relative mt-30">
                        <img className=" z-10 top-100" src="/Delevery/d.1.svg" alt="" />
                        <img className="absolute top-20 left-66 z-20" src="/Delevery/d.p.2.svg" alt="" />
                        <img className="absolute top-15 right-56 z-10" src="/Delevery/d.p.3.svg" alt="" />
                        <img className="bottom-60 left-5 absolute z-10" src="/Delevery/d.p.4.svg" alt="" />
                    </div>
                    <div className="flex flex-col items-center text-start mt-10">
                        <p className="text-[40px] w-full">Доставка и оплата</p>
                        <p className="w-[470px] h-[80px] mb-8">Для наших покупателей доступны 2 способа доставки: <span className="font-bold">курьерская доставка</span> по Санкт-Петербургу в пределах КАД и <span className="font-bold">самовывоз</span>.</p>

                        <p className="w-full font-semibold mb-5">Курьерска доставка:</p>
                        <p className="w-[470px] font-extralight">Курьеры работают каждый день с 11 до 21 часа. Доставка макарон осуществляется только по Санкт-Петербургу в пределах кольцевой автомобильной дороги (КАД). <span className="text-red-500">Точная зона доставки</span> <br /><br />
                            Если Вы готовы принять заказ в интервале с 12 до 17 часов или с17 до 21 часа, то доставка будет стоить 300 рублей. <br /><br />
                            При заказе от 3000 рублей доставка БЕСПЛАТНАЯ
                            <br /><br />
                            При оформлении заказа до 15 часов возможна доставка в тот же день в промежутке с 17 до 21 часа. <br />
                            Курьер предупредит Вас о своём прибытии за 30-40 минут.
                        </p>
                    </div>
                </div>

            </div>
            <div className="bg-[#FFFFFF] w-full h-full">
                <div className="flex flex-col items-center justify-center lg:flex-row  text-start gap-10 mb-10">

                    <div className="lg:hidden flex items-center justify-center relative mt-30">
                        <img className=" z-10 top-100" src="/Delevery/d.2.1.svg" alt="" />
                        <img className="absolute  top-0 left-0 z-20" src="/Delevery/d.2.2.svg" alt="" />
                        <img className="absolute top-0 left-0 z-20" src="/Delevery/d.2.3.svg" alt="" />
                    </div>

                    <div className="flex flex-col items-center text-start mt-10 mb-10 mr-20">
                        <p className="text-[20px] w-full mb-5">Самовывоз</p>
                        <p className="w-[470px] h-[80px] mb-10 font-extralight">Вы можете сделать заказ и забрать его самостоятельно с нашего производства по адресу: ул. Маршала Тухачевского 22 БЦ "Сова" <br /><br />
                            Заказ необходимо сделать до 20 часов, чтобы забрать его на следующий день в пункте самовывоза в любое удобное время в промежутке с 13 до 22 часов.<br /><br />
                            Оплатить заказ банковской картой можно заранее при оформлении. Непосредственно при получении банковской картой расплатиться нельзя</p>

                        <p className="w-full text-[20px] mb-5 mt-45">Оплата</p>
                        <p className="w-[470px] h-[213px] font-extralight">Вы можете оплатить заказ при получении наличными или заранее оплатить заказ банковской картой. Для этого укажите выбранный способ при оформлении заказа.<br /><br />
                            Оплата банковской картой удобна, если вы хотите отправить десерты в подарок или не желаете возиться с наличными при получении заказа.<br /><br />
                            Если у Вас нет карты российского банка, мы можем принять оплату через платёжную систему PayPal.<br />
                        </p>
                    </div>

                    <div className="hidden lg:flex items-center justify-center relative mt-30">
                        <img className=" z-10 top-100" src="/Delevery/d.2.1.svg" alt="" />
                        <img className="absolute  top-0 left-0 z-20" src="/Delevery/d.2.2.svg" alt="" />
                        <img className="absolute top-0 left-0 z-20" src="/Delevery/d.2.3.svg" alt="" />
                    </div>
                </div>


            </div>
        </div>
    )
}

Delevery()