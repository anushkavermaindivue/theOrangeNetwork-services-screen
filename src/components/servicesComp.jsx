import Image from "next/image";

const ServicesComp = ({servicesTitle, servicesImg, servicesP1, servicesP2}) => {
  return (
    <section className="max-w-[90%] sm:max-w-[85%] md:max-w-[75%] lg:max-w-[70%] m-auto uppercase sm:mt-0 md:mt-18 lg:mt-28 flex flex-col gap-y-7">
      <div className="flex flex-col items-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#141414] flex flex-col items-end">{servicesTitle}<div className="h-0.5 w-28 mt-1 bg-[#E76F00]"></div></h2>
        <Image className="m-auto w-[180px] sm:w-[200px] md:w-[225px]" src={servicesImg} alt="web design image" />
      </div>
      <div className="font-semibold tracking-wider">
        <p className="text-[0.6rem] sm:text-[0.8rem] md:text-[1rem]">
            {servicesP1}
        </p>
      </div>
      <div className="font-semibold tracking-wider">
        <p className="text-[0.6rem] sm:text-[0.8rem] md:text-[1rem]">
            {servicesP2}
        </p>
      </div>
    </section>
  )
}

export default ServicesComp
