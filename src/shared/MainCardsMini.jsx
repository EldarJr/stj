export default function MainCardsMini({ bgColor, bgColorMini, p, img, text, miniPos }) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className= " w-[550px] h-[250px] relative rounded-lg overflow-hidden flex flex-col items-center justify-center text-center">
      <img src={img} alt="" className="z-0" />
      <img src={bgColorMini} alt="" className="absolute z-10" style={miniPos} />
      <div className="flex flex-col p-4 text-center items-center">
        <div className="flex flex-row items-center justify-center gap-2">
          <h3 className="font-bold text-xl">{text}</h3>
          <img src="/strelkaRight.svg" alt="" />
        </div>
        <p className="text-sm w-[463px] h-[35px]">{p}</p>
      </div>
    </div>
  );
}

