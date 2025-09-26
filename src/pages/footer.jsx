import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#EBEDEE] w-full py-10 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 lg:gap-20 max-w-[1400px] mx-auto">

        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-10">
          <div className="flex flex-col items-center sm:flex-row gap-5 md:gap-8 lg:gap-10">

            <div className="flex flex-col items-center text-center">
              <img src="/footer/f.1.svg" alt="" className="w-11 h-10" />
              <p className="text-[15px] max-w-[140px] mt-2">
                Готовим вручную и с любовью
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <img src="/footer/f.2.svg" alt="" className="w-11 h-10" />
              <p className="text-[15px] max-w-[140px] mt-2">
                Доставим в день заказа
              </p>
            </div>

            <div className="flex flex-col items-center text-center mt-5">
              <img src="/footer/f.3.svg" alt="" className="w-7 h-9" />
              <p className="text-[15px] max-w-[140px] mt-2">
                100% миндальная мука
              </p>
            </div>
          </div>

          <div className="mt-5 text-gray-500 text-center md:text-left">
            <p className="text-[13px] md:text-sm">
              © 2021 Макароншоп <br />
              ООО "Квантум", Санкт-Петербург, улица Маршала Тухачевского,
              <br /> дом 22
            </p>
          </div>
        </div>


        <div className="hidden lg:flex flex-row justify-center gap-10 xl:gap-20">

          <div className="flex flex-col gap-4">
            <h1 className="text-[20px] font-semibold">Информация</h1>
            <div className="flex flex-col gap-3 text-gray-600">
              <a href="#">О компании</a>
              <a href="#">Гарантии вкуса и свежести</a>
              <a href="#">Доставка и оплата</a>
              <a href="#">Контакты</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-[20px] font-semibold">Каталог</h1>
            <div className="flex flex-col gap-3 text-gray-600">
              <a href="#">Каталог десертов</a>
              <a href="#">Готовые наборы</a>
              <a href="#">Собрать свой набор</a>
              <a href="#">Акции</a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-[20px] font-semibold">Для бизнеса</h1>
            <div className="flex flex-col gap-3 text-gray-600">
              <a href="#">О компании</a>
              <a href="#">Гарантии вкуса и свежести</a>
              <a href="#">Доставка и оплата</a>
              <a href="#">Контакты</a>
            </div>
          </div>
        </div>


        <div className="flex flex-col items-center md:items-end gap-5 mt-5 md:mt-0 text-center md:text-right">
          <div className="flex flex-col">
            <h1 className="font-semibold text-lg md:text-xl">
              +7 (812) 309 82 88
            </h1>
            <p className="text-[15px] text-gray-600">с 9:00 до 21:00</p>
          </div>
          <div className="flex flex-row gap-3 mt-5">
            <img src="/footer/f.4.svg" alt="Social Media Icon" className="w-8 h-8" />
            <img src="/footer/f.5.svg" alt="Social Media Icon" className="w-8 h-8" />
            <img src="/footer/f.6.svg" alt="Social Media Icon" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
}