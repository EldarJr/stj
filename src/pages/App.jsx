import React from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import RedButton from "../shared/redButton.jsx";
import MainCardsMini from "../shared/mainCardsMini.jsx";
import ReadyKitsRow from "../shared/ready-made-kits.jsx";
import { useNavigate } from "react-router";
import RedyKits from "./RedyKits.jsx";



export default function App() {
  const navigate = useNavigate()
  return (
    <div className="p-6 bg-[#F7F7F7] w-full h-full">

      <div>

      </div>

      <div >

        <div className="flex flex-col items-center justify-center px-4 py-8 text-center sm:hidden">
          <div className="mt-0">
            <h2 className="text-[22px] font-medium">MACARONSHOP</h2>
            <div className="flex items-center justify-center gap-2">
              <img src="/mainLine.svg" alt="" className="w-6" />
              <span className="text-sm font-medium">since 2013</span>
              <img src="/mainLine.svg" alt="" className="w-6" />
            </div>
            <h1 className="mt-3 text-[28px] font-normal">Настоящая любовь</h1>
            <p className="text-sm font-extralight mt-2"> Пирожные макарон и другие десерты <br /> из натуральных ингредиентов, приготовленные с любовью </p>
          </div>


          <div className="relative mt-10 flex items-center justify-center w-[220px] h-[220px]">
            <img className="absolute z-20" src="/mainHeart.svg" alt="" />
            <img className="absolute z-10 right-[100px]" src="/mainHeartPink.svg" alt="" />
            <img className="absolute z-10 left-[60px]  bottom-[0px] h-[400px] xl:" src="/mainHeartBlee.svg" alt="" />
            <img className="absolute z-10 left-[230px] bottom-[70px] rotate-75" src="/semecko.svg" alt="" width={30} height={30} />
            <img className="absolute z-10 right-[220px] bottom-[10px] rotate-185" src="/semecko.svg" alt="" width={30} height={30} />
            <img className="absolute z-10 left-[80px] bottom-[200px] rotate-5" src="/semecko.svg" alt="" width={30} height={30} />
            <img className="absolute z-10 left-[180px] bottom-[0px] rotate-185" src="/semecko.svg" alt="" width={30} height={30} />
            <img className="absolute z-10 right-[220px] bottom-[125px] rotate-100" src="/semecko.svg" alt="" width={30} height={30} />
            <img className="absolute z-10 left-[70px] bottom-[0px] rotate-50" src="/semecko.svg" alt="" width={30} height={30} />
            <img className="absolute z-10 right-[165px] top-[200px] rotate-0" src="/mainZelen.svg" alt="" width={50} height={50} />
            <img className="absolute z-10 left-[220px] bottom-[130px] rotate-0" src="/mainZelenMini.svg" alt="" width={30} height={30} />
            <img className="absolute z-10 right-[210px] bottom-[30px] rotate-0" src="/Macaron1.svg" alt="" width={80} height={80} />
            <img className="absolute z-10 left-[0px] bottom-[180px] rotate-300" src="/macaron2.svg" alt="" width={60} height={60} />
            <img className="absolute z-10 left-[200px] bottom-[180px] rotate-0" src="/macaron3.svg" alt="" width={70} height={70} />
            <img className="absolute z-10 left-[200px] bottom-[10px] rotate-0" src="/macaron4.svg" alt="" width={60} height={60} />
            <img className="absolute z-10 left-[90px] top-[220px] rotate-0" src="/macaron5.svg" alt="" width={60} height={0} />

          </div>
        </div>

        <div className="hidden sm:flex md:hidden flex-col items-center justify-center px-4 py-8 text-center ">
          <div className="mt-0">
            <h2 className="text-[22px] sm:text-[28px] font-medium">MACARONSHOP</h2>
            <div className="flex items-center justify-center gap-2">
              <img src="/mainLine.svg" alt="" className="w-6" />
              <span className="text-sm sm:text-base font-medium">since 2013</span>
              <img src="/mainLine.svg" alt="" className="w-6" />
            </div>
            <h1 className="mt-3 text-[28px] sm:text-[40px] font-normal">Настоящая любовь</h1>
            <p className="text-sm sm:text-base font-extralight mt-2">
              Пирожные макарон и другие десерты <br />
              из натуральных ингредиентов, приготовленные с любовью
            </p>
          </div>

          <div className="relative mt-10 flex items-center justify-center w-[250px] h-[250px] sm:w-[350px] sm:h-[350px]">
            <img className="absolute z-20" src="/mainHeart.svg" alt="" />
            <img className="absolute z-10 right-[150px]" src="/mainHeartPink.svg" alt="" />
            <img className="absolute z-10 left-[120px]  bottom-[80px] h-[400px] xl:" src="/mainHeartBlee.svg" alt="" />
            <img className="absolute z-10 left-[330px] bottom-[120px] rotate-75" src="/semecko.svg" alt="" />
            <img className="absolute z-10 right-[360px] bottom-[0px] rotate-185" src="/semecko.svg" alt="" />
            <img className="absolute z-10 left-[150px] bottom-[330px] rotate-5" src="/semecko.svg" alt="" />
            <img className="absolute z-10 left-[270px] bottom-[0px] rotate-185" src="/semecko.svg" alt="" />
            <img className="absolute z-10 right-[350px] bottom-[200px] rotate-100" src="/semecko.svg" alt="" />
            <img className="absolute z-10 left-[100px] bottom-[0px] rotate-0" src="/semecko.svg" alt="" />
            <img className="absolute z-10 right-[260px] top-[300px] rotate-0" src="/mainZelen.svg" alt="" />
            <img className="absolute z-10 left-[340px] bottom-[180px] rotate-0" src="/mainZelenMini.svg" alt="" />
            <img className="absolute z-10 right-[330px] bottom-[30px] rotate-0" src="/Macaron1.svg" alt="" width={120} height={120} />
            <img className="absolute z-10 left-[10px] bottom-[280px] rotate-300" src="/macaron2.svg" alt="" />
            <img className="absolute z-10 left-[340px] bottom-[250px] rotate-0" src="/macaron3.svg" alt="" width={100} height={100} />
            <img className="absolute z-10 left-[340px] bottom-[40px] rotate-0" src="/macaron4.svg" alt="" width={80} height={80} />
            <img className="absolute z-10 left-[120px] top-[340px] rotate-0" src="/macaron5.svg" alt="" width={80} height={80} />
          </div>
        </div>

        <div className="hidden mb-10 md:flex lg:hidden flex-col items-center justify-center px-4 py-8  text-center">
          <div className="mt-0">
            <h2 className="text-[22px] sm:text-[28px] font-medium">MACARONSHOP</h2>
            <div className="flex items-center justify-center gap-2">
              <img src="/mainLine.svg" alt="" className="w-6" />
              <span className="text-sm sm:text-base font-medium">since 2013</span>
              <img src="/mainLine.svg" alt="" className="w-6" />
            </div>
            <h1 className="mt-3 text-[28px] sm:text-[40px] font-normal">Настоящая любовь</h1>
            <p className="text-sm sm:text-base font-extralight mt-2">
              Пирожные макарон и другие десерты <br />
              из натуральных ингредиентов, приготовленные с любовью
            </p>
          </div>

          <div className="relative mt-10 flex items-center justify-center w-[250px] h-[250px] sm:w-[350px] sm:h-[350px]">
            <img className="absolute z-20" src="/mainHeart.svg" alt="" />
            <img className="absolute z-10 right-[150px]" src="/mainHeartPink.svg" alt="" />
            <img className="absolute z-10 left-[120px]  bottom-[80px] h-[400px] xl:" src="/mainHeartBlee.svg" alt="" />
            <img className="absolute z-10 left-[330px] bottom-[120px] rotate-75" src="/semecko.svg" alt="" />
            <img className="absolute z-10 right-[360px] bottom-[0px] rotate-185" src="/semecko.svg" alt="" />
            <img className="absolute z-10 left-[150px] bottom-[330px] rotate-5" src="/semecko.svg" alt="" />
            <img className="absolute z-10 left-[270px] bottom-[0px] rotate-185" src="/semecko.svg" alt="" />
            <img className="absolute z-10 right-[350px] bottom-[200px] rotate-100" src="/semecko.svg" alt="" />
            <img className="absolute z-10 left-[100px] bottom-[0px] rotate-0" src="/semecko.svg" alt="" />
            <img className="absolute z-10 right-[260px] top-[300px] rotate-0" src="/mainZelen.svg" alt="" />
            <img className="absolute z-10 left-[340px] bottom-[180px] rotate-0" src="/mainZelenMini.svg" alt="" />
            <img className="absolute z-10 right-[330px] bottom-[30px] rotate-0" src="/Macaron1.svg" alt="" width={120} height={120} />
            <img className="absolute z-10 left-[10px] bottom-[280px] rotate-300" src="/macaron2.svg" alt="" />
            <img className="absolute z-10 left-[340px] bottom-[250px] rotate-0" src="/macaron3.svg" alt="" width={100} height={100} />
            <img className="absolute z-10 left-[340px] bottom-[40px] rotate-0" src="/macaron4.svg" alt="" width={80} height={80} />
            <img className="absolute z-10 left-[120px] top-[340px] rotate-0" src="/macaron5.svg" alt="" width={80} height={80} />
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-around h-[475px] relative">
          <div className="hidden lg:flex items-center mr-[120px]">
            <img className="absolute z-20" src="/mainHeart.svg" alt="" />
            <img className="absolute z-10 right-[900px]" src="/mainHeartPink.svg" alt="" />
            <img className="absolute z-10 left-[340px]  bottom-[100px] h-[400px] xl:" src="/mainHeartBlee.svg" alt="" />
            <img className="absolute z-10 left-[620px] bottom-[190px] rotate-75" src="/semecko.svg" alt="" />
            <img className="absolute z-10 left-[590px] bottom-[70px] rotate-165" src="/semecko.svg" alt="" />
            <img className="absolute z-10 left-[330px] bottom-[30px] rotate-15" src="/semecko.svg" alt="" />
            <img className="absolute z-10 left-[130px] bottom-[60px] rotate-185" src="/semecko.svg" alt="" />
            <img className="absolute z-10 left-[130px] bottom-[260px] rotate-100" src="/semecko.svg" alt="" />
            <img className="absolute z-10 left-[350px] top-[25px] rotate-0" src="/semecko.svg" alt="" />
            <img className="absolute z-10 left-[170px] bottom-[110px] rotate-0" src="/mainZelen.svg" alt="" />
            <img className="absolute z-10 left-[680px] bottom-[250px] rotate-0" src="/mainZelenMini.svg" alt="" />
            <img className="absolute z-10 left-[40px] bottom-[140px] rotate-0" src="/Macaron1.svg" alt="" />
            <img className="absolute z-10 left-[150px] top-[35px] rotate-0" src="/macaron2.svg" alt="" />
            <img className="absolute z-10 left-[620px] bottom-[350px] rotate-0" src="/macaron3.svg" alt="" />
            <img className="absolute z-10 left-[620px] bottom-[80px] rotate-0" src="/macaron4.svg" alt="" />
            <img className="absolute z-10 left-[220px] bottom-[0px] rotate-0" src="/macaron5.svg" alt="" />
          </div>




          <img className="absolute left-[900px] bottom-[100px]" src="/mainGreen.svg" alt="" />
          <img className="absolute left-[950px] top-[120px]" src="/mainYellow.svg" alt="" />
          <div className="flex flex-col text-center  ">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-[30px] font-medium">Macaronshop</h2>
              <div className="flex flex-row items-center gap-2">
                <img src="/mainLine.svg" alt="" />
                <h2 className="font-medium">since 2013</h2>
                <img src="/mainLine.svg" alt="" />
              </div>
            </div>
            <h1 className=" text-[45px] font-normal">Настоящая любовь</h1>
            <p className=" font-extralight">Пирожные макарон и другие десерты</p>
            <p className=" font-extralight"> из натуральных ингредиентов, приготовленные с любовью</p>
          </div>
        </div>

      </div>

      <div className="grid gap-6 justify-center grid-cols-[repeat(auto-fit,minmax(200px,550px))]">
        <div className="hidden md:flex flex-col items-center gap-y-6">
          <MainCardsMini miniPos={{}} bgColorMini={"/mainMiniCardsTr.1.svg"} bgColor={"#FFDBC3"} img={"/mainMiniCards1.svg"} text={"Готовые наборы"} p={"Готовые наборы со скидкой. Вы можете подобрать набор на подходящий случай."} />
          <MainCardsMini miniPos={{ transform: 'rotate(180deg)' }} bgColorMini={"/mainMiniCardsTr.2.svg"} bgColor={"#B4EAB3"} img={"/mainMiniCards3.svg"} text={"Набор с индивидуальной печатью"} p={"Собрать набор макарон с уникальным дизайном. "} />
          <MainCardsMini miniPos={{}} bgColorMini={"/mainMiniCardsTr.1.svg"} bgColor={"#A8DCDF"} img={"/mainMiniCards5.svg"} text={"Корпоративные подарки"} p={"От 85 руб за шт. С уникальным дизайном. Приятный комплимент для коллег и партнеров"} />
        </div>
        <div className="hidden md:flex flex-col items-center gap-y-6">
          <MainCardsMini miniPos={{}} bgColorMini={"/mainMiniCardsTr.2.svg"} bgColor={"#FFC2CC"} img={"/mainMiniCards2.svg"} text={"Собрать свой набор"} p={"Выбрать количество макарун, и выбрать вкусы"} />
          <MainCardsMini miniPos={{ transform: 'rotate(180deg)' }} bgColorMini={"/mainMiniCardsTr.1.svg"} bgColor={"#FDD5CD"} img={"/mainMiniCards4.svg"} text={"Свадебные предложения"} p={"Нежные пирожные макаронс с разными вкусами для украшения вашего свадебного торжества"} />
          <MainCardsMini miniPos={{}} bgColorMini={"/mainMiniCardsTr.2.svg"} bgColor={"#C4C6EC"} img={"/mainMiniCards6.svg"} text={"Оптовые поставки"} p={"Посмотрите условия сотрудничества и отзывы."} />
        </div>


        <div className="flex flex-col md:hidden w-full">
          {[
            "Готовые наборы",
            "Набор с индивидуальной печатью",
            "Корпоративные подарки",
            "Собрать свой набор",
            "Свадебные предложения",
            "Оптовые поставки"
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between items-center py-4 border-b">
              <span className="font-medium">{item}</span>
              <img src="/strelka.svg" alt="стрелка" className="w-4 h-4" />
            </div>
          ))}
        </div>

      </div>

      <div className="mt-20 flex flex-col items-center text-center">
        <div className="flex text-center p-10">
          <h1 className="lg:text-[30px] text-[22px]">Акции</h1>
        </div>


        <div className="lg:grid sm:grid hidden gap-5  sm:grid-cols-2    lg:grid-cols-4">
          <div className="w-[270px] h-[380px] rounded-lg mx-auto">
            <div className="relative">
              <img className="absolute top-[10px]" src="/mainAchion1.1.svg" alt="" />
              <img src="/mainAchion1.svg" alt="" />
            </div>
            <div className="w-[270px] h-[110px] bg-[#8CC4EC] text-white">
              <p className="w-[260px] pt-5">
                По СПб в районе КАД –  от <br /> 3000₽ <br /> По МСК – от 5000₽
              </p>
            </div>
          </div>

          <div className="w-[270px] h-[380px] rounded-lg mx-auto">
            <div className="relative">
              <img className="absolute top-[10px]" src="/mainAchion2.2.svg" alt="" />
              <img src="/mainAchion2.svg" alt="" />
            </div>
            <div className="w-[270px] h-[110px] bg-[#FF4D6D] text-white">
              <p className="w-[260px] pt-5">
                Шоколадное пирожное картошка на основе бисквита!
              </p>
            </div>
          </div>

          <div className="w-[270px] h-[380px] rounded-lg mx-auto">
            <div className="relative">
              <img className="absolute top-[10px]" src="/mainAchion2.2.svg" alt="" />
              <img src="/mainAchion3.svg" alt="" />
            </div>
            <div className="w-[270px] h-[110px] bg-[#FF4D6D] text-white">
              <p className="w-[260px] pt-5">
                По СПб в районе КАД –  от <br /> 3000₽ <br /> По МСК – от 5000₽
              </p>
            </div>
          </div>

          <div className="w-[270px] h-[380px] rounded-lg mx-auto">
            <div className="relative">
              <img className="absolute top-[10px]" src="/mainAchion4.4.svg" alt="" />
              <img src="/mainAchion4.svg" alt="" />
            </div>
            <div className="w-[270px] h-[110px] bg-[#FF4D6D] text-white">
              <p className="w-[260px] pt-5">
                По СПб в районе КАД –  от <br /> 3000₽ <br /> По МСК – от 5000₽
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:hidden sm:hidden relative">
          <img className="" src="/actionM.svg" alt="" />
          <img className="absolute top-50" src="/actionM.2.svg" alt="" />
          <h1 className="z-30 text-white text-[15px] absolute top-70">НОВИНКА</h1>
          <p className="z-30 text-white text-[20px] absolute top-80">Наборы на 40 шт <br /> от 3600 ₽</p>
        </div>


      </div>

      <div className="mt-20">
        <div className="flex flex-col text-center p-10 ">
          <h1 className="text-[30px]">Ближайшие праздники</h1>
        </div>

        <div className=" w-full flex justify-center relative mt-10">
          <div className="hidden w-full lg:flex flex-row justify-center items-center mt-10">
            <img className="relative  " src="/Birthday/brLine.svg" alt="" width={1000} />
            <img className="absolute left-40" src="/Birthday/br.1.svg" alt="" />
            <img className="absolute left-50 bottom-0" src="/Birthday/brs.svg" alt="" />
            <img className="absolute left-90" src="/Birthday/br.2.svg" alt="" />
            <img className="absolute left-140" src="/Birthday/br.3.svg" alt="" />
            <img className="absolute left-190" src="/Birthday/br.4.svg" alt="" />
            <img className="absolute left-240" src="/Birthday/br.5.svg" alt="" />
            <img className="absolute left-290" src="/Birthday/br.6.svg" alt="" />
          </div>


          <div className="flex lg:hidden absolute top-0 w-full justify-center items-center mb-20">
            <img className="absolute md:rotate-90 z-0 sm:rotate-180" src="/mainLainMini.svg" alt="" />

            <div className="flex flex-col md:flex-row gap-5 items-center ">
              <div className="relative w-20 h-20  z-10">
                <img className="absolute z-10" src="/Birthday/br.1.svg" alt="" />
                <img className="absolute z-20 left-7 bottom-10" src="/Birthday/brs.svg" alt="" />
              </div>
              <img className="z-10" src="/Birthday/br.2.svg" alt="" />
              <img className="z-10 " src="/Birthday/br.3.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-70 md:mt-30 lg:mt-30 flex flex-col items-center justify-center ">
        <div>
          <h1 className="text-[30px]">Популярные наборы</h1>
        </div>
        <div className="mt-15 flex flex-col items-center">
          <ReadyKitsRow />
          <button onClick={() => navigate("/dessertCatalog")} className="cursor-pointer mt-20 text-black bg-[#F7F7F7] border px-5 py-3 border-[#4E9DD3] ">Все праздничные наборы</button>
        </div>
      </div>

      <div className="mt-30 flex flex-col items-center justify-center">
        <div>
          <h1 className="lg:text-[30px] text-[23px]  mb-10 lg:mb-20">Новости</h1>
        </div>
        <div className="hidden  md:flex lg:flex flex-row gap-5">
          <div className="flex flex-col items-center">
            <div>
              <img src="/mainNews/mn.1.svg" alt="" />
            </div>
            <div className="bg-white h-[150px] p-3 w-[370px]">
              <p className="text-gray-300">25.02.2023</p>
              <h1 className="text-[20px] mt-1 mb-1 ">Скоро главный праздник весны!</h1>
              <p className="text-[15px] text-gray-600  w-[330px] h-[51px]">Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы</p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div>
              <img src="/mainNews/mn.2.svg" alt="" />
            </div>
            <div className="bg-white h-[150px] p-3 w-[370px]">
              <p className="text-gray-300">25.02.2023</p>
              <h1 className="text-[20px] mt-1 mb-1 ">Скоро главный праздник весны!</h1>
              <p className="text-[15px] text-gray-600  w-[330px] h-[51px]">Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы</p>
            </div>
          </div>

          <div className="flex flex-col items-center ">
            <div>
              <img src="/mainNews/mn.3.svg" alt="" />
            </div>
            <div className="bg-white h-[150px] p-3 w-[370px]">
              <p className="text-gray-300">25.02.2023</p>
              <h1 className="text-[20px] mt-1 mb-1 ">Скоро главный праздник весны!</h1>
              <p className="text-[15px] text-gray-600  w-[330px] h-[51px]">Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы</p>
            </div>
          </div>
        </div>


        <div className="lg:hidden md:hidden flex flex-col items-center gap-5">
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-col items-center w-[200px]">
              <div>
                <img src="/mainNews/mn.1.svg" alt="" />
              </div>
              <div className="bg-white h-[150px] p-3 w-[200px] h-[230px] ">
                <p className="text-[14px] text-gray-300">25.02.2023</p>
                <h1 className="lg:text-[20px] mt-1 mb-1 w-[140px]">Скоро главный праздник весны!</h1>
                <p className="text-[13px] lg:text-[15px] text-gray-600 w-[165px]  h-[51px]">Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы</p>
              </div>
            </div>

            <div className="flex flex-col items-center w-[200px]">
              <div>
                <img src="/mainNews/mn.2.svg" alt="" />
              </div>
              <div className="bg-white h-[150px] p-3 w-[200px] h-[230px] ">
                <p className="text-[14px] text-gray-300">25.02.2023</p>
                <h1 className="lg:text-[20px] mt-1 mb-1 w-[140px]">Конкурс на 23 февраля!</h1>
                <p className="text-[13px] lg:text-[15px] text-gray-600 w-[165px]  h-[51px]">Девушки любят, когда вкусно, красиво и натурально. Смотрите больше наборов с десертами ручной работы</p>
              </div>
            </div>
          </div>


          <div>
            <img src="/mainNews/mn.4.svg" alt="" />
          </div>
        </div>
        <div>
          <button onClick={() => navigate("/news")} className="cursor-pointer mt-10 text-black bg-[#F7F7F7] border px-5 py-3 border-[#4E9DD3] ">Все новости</button>
        </div>
      </div>

      <div className="mt-20 mb-10">
        <div className="text-center">
          <h1 className="text-[30px] mb-10">Мы обо всём позаботились</h1>
        </div>

        <div className="flex flex-wrap lg:flex-row gap-6 justify-center">
          <div className="flex flex-col items-start w-[270px]">
            <div className="">
              <img className="" src="/mainLast/ml.1.svg" alt="" />
            </div>
            <div className="mt-5 text-start w-full">
              <h1 className="font-semibold text-[20px]">Лучшие ингрединты</h1>
              <p className="w-full">Что-то про суперкачество, лучших поваров, свежесть и т.д.</p>
            </div>
          </div>

          <div className="flex flex-col items-start w-[270px]">
            <div className="">
              <img className="" src="/mainLast/ml.2.svg" alt="" />
            </div>
            <div className="mt-5 text-start w-full">
              <h1 className="font-semibold text-[20px]">Лучшие ингрединты</h1>
              <p className="w-full">Что-то про суперкачество, лучших поваров, свежесть и т.д.</p>
            </div>
          </div>

          <div className="flex flex-col items-start w-[270px]">
            <div className="">
              <img className="" src="/mainLast/ml.3.svg" alt="" />
            </div>
            <div className="mt-5 text-start w-full">
              <h1 className="font-semibold text-[20px]">Лучшие ингрединты</h1>
              <p className="w-full">Что-то про суперкачество, лучших поваров, свежесть и т.д.</p>
            </div>
          </div>

          <div className="flex flex-col items-start w-[270px] ">
            <div className="">
              <img className="" src="/mainLast/ml.4.svg" alt="" />
            </div>
            <div className="mt-5 text-start ">
              <h1 className="font-semibold text-[20px]">Лучшие ингрединты</h1>
              <p className="w-full">Что-то про суперкачество, лучших поваров, свежесть и т.д.</p>
            </div>
          </div>
        </div>
      </div>






    </div>
  );
}
