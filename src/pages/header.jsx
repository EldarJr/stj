import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { useState } from "react";
import RedButton from "../shared/redButton";


export default function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenGift, setIsOpenGift] = useState(false);
  const [selected, setSelected] = useState("Санкт-Петербург");
  const [selectedGift, setSelectedGift] = useState("")


  const handleSelect = (item) => {
    setSelected(item);
    setIsOpen(false);
  };


  const HandleClose = (e, nav) => {

    navigate(nav)

    const detalis = e.target.closest("details")
    if (detalis) {
      detalis.open = false
    }
  }




  return (
    <header className="w-full ">

      <div className="flex items-center justify-between bg-[#F7EBE5] px-4 py-2 h-[90px] lg:hidden">
        <button>
          <img src="/burger.svg" alt="menu" className="w-6 h-6" />
        </button>

        <div onClick={() => navigate("/")} className="relative flex items-center justify-center w-[120px] h-[60px]">
          <img src="/mobHeader/shapka.svg" alt="" className="absolute bottom-[5px] w-[60px] h-auto" />
          <img src="/mobHeader/text.svg" alt="" className="absolute top-[20px] w-[80px] h-auto" />
          <img src="/mobHeader/galstuk.svg" alt="" className="absolute top-[60px] w-[15px] h-auto" />
        </div>

        <div className="relative">
          <img onClick={() => navigate("/basket")} src="/bag.svg" alt="Корзина" className="w-6 h-6 cursor-pointer" /> <span onClick={() => navigate("/basket")} className="cursor-pointer absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">4</span>
        </div>
      </div>


      <div className="hidden lg:flex flex-col">

        <div className="bg-[#F7EBE5] w-full">
          <div className="max-w-screen-xl mx-auto flex items-center justify-between h-[48px] px-4">
            <div className="flex gap-6">
              <button onClick={() => navigate("/teasteGuarantee")} className="cursor-pointer font-extralight">Гарантия свежести</button>
              <button onClick={() => navigate("/delevery")} className="cursor-pointer font-extralight">Доставка и оплата</button>
              <button onClick={() => navigate("/UC")} className="cursor-pointer font-extralight">Оптовые поставки</button>
              <button onClick={() => navigate("/contacts")} className="cursor-pointer font-extralight">Контакты</button>
            </div>

            <div className="flex items-center gap-8">

              <div className="relative">
                <div className="flex flex-row gap-2 items-center">
                  <img src="/loacate.svg" alt="" />
                  <div onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 px-2 py-2 text-black rounded cursor-pointer select-none"><span className="font-extralight">{selected}</span><img src="/strelka.svg" alt="стрелка" width={13} height={13} /> </div>
                </div>
                {isOpen && (
                  <ul className="absolute top-full left-0 mt-1 bg-white border rounded shadow-lg flex flex-col gap-1 p-2 z-50">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b" onClick={() => handleSelect("Ош")}>Ош</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b" onClick={() => handleSelect("Москва")}>Москва</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b" onClick={() => handleSelect("Бишкек")}>Бишкек</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b" onClick={() => handleSelect("Санкт-Петербург")}>Санкт-Петербург</li>
                  </ul>
                )}
              </div>

              <img src="/phone.svg" alt="" />

              <div className="flex items-center gap-2">
                <img className="cursor-pointer" onClick={() => navigate("/basket")} src="/bag.svg" alt="" width={25} height={25} />
                <button onClick={() => navigate("/basket")} className="cursor-pointer font-extralight">В корзину</button>
              </div>

              <img src="/twiter.svg" alt="" />
            </div>
          </div>
        </div>


        <div className="w-full border-t border-gray-200">
          <div className="max-w-screen-xl mx-auto grid grid-cols-3 items-center px-4 py-3">

            <div className="flex items-center gap-6 justify-start">
              <div className="flex items-center gap-2 ">
                <button className="text-[14px] w-30 font-light">СЛАДКИЕ ДНИ</button>
                <img src="/procent.svg" alt="" className="w-4 h-4" />
              </div>
              <details className="relative">
                <summary className="text-[14px] font-light w-50 font-extralight list-none p-2 cursor-pointer flex justify-between items-center">
                  ПОДАРОЧНЫЕ НАБОРЫ <span><img src="/strelka.svg" alt="" /></span>
                </summary>
                <ul className="absolute mt-2 w-60 bg-white border z-30">
                  <li className="font-extralight cursor-pointer border-b p-3" onClick={(e) => HandleClose(e, "/corporateGifts")}>Корпоративные подарки</li>
                  <li className="font-extralight cursor-pointer border-b p-3" onClick={(e) => HandleClose(e, "/forMerried")}>Свадебное предложение</li>
                </ul>
              </details>
              <button onClick={() => navigate("/mnkValue")} className="text-[14px] w-50  cursor-pointer font-light ">Собрать набор </button>
              {/* <div onClick={() => navigate("/redyKits")} className="w-[1000px]">
                <img className="text-[14px] w-50  cursor-pointer font-extralight "  src="/sobrat.svg" alt="" />
              </div> */}


            </div>


            <div className="flex justify-center ">
              <img onClick={() => navigate("/")} src="/mainLogo.svg" alt="Логотип" className="w-24 h-auto cursor-pointer" />
            </div>


            <div className="flex items-center gap-6 justify-end">
              <button onClick={() => navigate("/madeNewDisyn")} className="text-[14px] cursor-pointer font-light">СОЗДАТЬ ДИЗАЙН</button>

              <details className="relative">
                <summary className="text-[14px] font-light list-none p-2 cursor-pointer flex justify-between items-center">
                  КОМПАНИЯМ <span><img src="/strelka.svg" alt="" /></span>
                </summary>
                <ul className="absolute mt-2 w-60 bg-white border z-30">
                  <li className="font-extralight cursor-pointer border-b p-3"></li>
                  <li className="font-extralight cursor-pointer border-b p-3"></li>
                </ul>
              </details>

              <details className="relative">
                <summary className="text-[14px] font-extralight list-none p-2  cursor-pointer flex justify-between items-center">
                  ВЕСЬ КАТАЛОГ <span ><img src="/strelka.svg" alt="" /></span>
                </summary>
                <ul className="absolute mt-2 right-0 w-60 bg-white border z-30">
                  <li onClick={(e) => HandleClose(e, "/")} className="font-extralight cursor-pointer border-b p-3">Пирожные макарон</li>
                  <li onClick={(e) => HandleClose(e, "/")} className="font-extralight cursor-pointer border-b p-3">Эклеры</li>
                  <li onClick={(e) => HandleClose(e, "/")} className="font-extralight cursor-pointer border-b p-3">Вафельные трубочки</li>
                  <li onClick={(e) => HandleClose(e, "/")} className="font-extralight cursor-pointer border-b p-3">Профитроли</li>
                </ul>
              </details>
            </div>
          </div>
        </div>
      </div>
    </header>


  );
}