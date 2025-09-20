import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="hidden bg-[#EBEDEE] w-full h-full md:flex flex-row items-center justify-around ">

        <div className="flex flex-col items-center gap-20 p-10">
          <div className="flex flex-row gap-5 items-center justify-center">

            <div className="text-center flex flex-col items-center">
              <img src="/footer/f.1.svg" alt="" width={44} height={39} />
              <p className="text-[15px] w-[140px] h-[26px]">Готовим вручную и с любовью</p>
            </div>

            <div className="text-center flex flex-col items-center">
              <img src="/footer/f.2.svg" alt="" width={44} height={39} />
              <p className="text-[15px] w-[140px] h-[26px]">Доставим в день заказа</p>
            </div>

            <div className="text-center flex flex-col items-center mt-5">
              <img src="/footer/f.3.svg" alt="" width={28} height={37} />
              <p className="text-[15px] w-[140px] h-{36px]">100%  миндальная мука </p>
            </div>

          </div>

          <div>
            <p>© 2021 Макароншоп <br />ООО "Квантум", Санкт-Петербург,  улица Маршала Тухачевского,<br /> дом 22</p>
          </div>
        </div>

        <div className=" hidden lg:flex flex-row items-center justify-center gap-5">
          <div className="flex flex-col gap-10">
            <div>
              <h1 className=" text-[20px] font-semibold">Информация</h1>
            </div>

            <div className="flex flex-col gap-5 w-[172px] h-[150px]">
              <h3>О компании</h3>
              <h3 className="w-[150px]">Гарантии вкуса и свежести</h3>
              <h3>Доставка и оплата</h3>
              <h3>Контакты</h3>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h1 className=" text-[20px] font-semibold">Каталог</h1>
            </div>

            <div className="flex flex-col gap-5  w-[172px] h-[150px]">
              <h3>Каталог десертов</h3>
              <h3>Готовые наборы</h3>
              <h3>Собрать свой набор</h3>
              <h3>Акции</h3>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div>
              <h1 className=" text-[20px] font-semibold">Для бизнеса</h1>
            </div>

            <div className="flex flex-col gap-5  w-[172px] h-[150px]">
              <h3>О компании</h3>
              <h3>Гарантии вкуса и свежести</h3>
              <h3>Доставка и оплата</h3>
              <h3>Контакты</h3>
            </div>
          </div>

        </div>

        <div className="flex flex-col items-center gap-30">
          <div className="flex flex-col items-center">
            <h1 className="font-semibold">+7 (812) 309 82 88</h1>
            <p className="text-[15px] ml-5">с 9:00 до 21:00</p>
          </div>

          <div className=" flex flex-row items-center gap-3">
            <img src="/footer/f.4.svg" alt="" />
            <img src="/footer/f.5.svg" alt="" />
            <img src="/footer/f.6.svg" alt="" />
          </div>

        </div>
      </div>



      <div className="md:hidden bg-[#EBEDEE] w-full h-full flex flex-col items-center ">

        <div className="flex flex-col items-center gap-30  items-start mt-10 mb-10">
          <div className="flex flex-col gap-5 items-center justify-center">

            <div className="text-center flex flex-row items-center  text-start gap-10">
              <img src="/footer/f.1.svg" alt="" width={44} height={39} />
              <p className="text-[15px] w-[240px] h-[26px] ">Готовим вручную и с любовью</p>
            </div>

            <div className="text-center flex flex-row items-center   text-start gap-10">
              <img src="/footer/f.2.svg" alt="" width={44} height={39} />
              <p className="text-[15px] w-[240px] h-[26px]">Доставим в день заказа</p>
            </div>

            <div className="text-center flex flex-row items-center text-start gap-10">
              <img src="/footer/f.3.svg" alt="" width={28} height={37} />
              <p className="text-[15px] w-[240px] h-{26px]">100% <br /> миндальная мука и натуральные ингредиенты </p>
            </div>

          </div>
        </div>

        <div className="flex flex-row items-center gap-10">
          <div>
            <p className="w-[270px] text-gray-500">© 2021 Макароншоп <br />ООО "Квантум", Санкт-Петербург,  улица Маршала Тухачевского,<br /> дом 22</p>
          </div>

          <div className="flex flex-col items-center">
            <h1 className="font-semibold">+7 (812) 309 82 88</h1>
            <p className="text-[15px] ml-5">с 9:00 до 21:00</p>
          </div>
        </div>

        <div className="mb-10 mt-5">
          <div className=" flex flex-row items-center gap-3">
            <img src="/footer/f.4.svg" alt="" />
            <img src="/footer/f.5.svg" alt="" />
            <img src="/footer/f.6.svg" alt="" />
          </div>
        </div>
      </div>


    </footer>
  );
}