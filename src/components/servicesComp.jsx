import Image from "next/image";

const ServicesComp = ({servicesTitle, servicesImg, servicesP1, servicesP2}) => {
  return (
    <section className="max-w-[70%] m-auto uppercase mt-28 flex flex-col gap-y-7">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-[#141414] flex flex-col items-end">{servicesTitle}<div className="h-0.5 w-28 mt-1 bg-[#E76F00]"></div></h2>
        <Image className="m-auto" src={servicesImg} width={225} alt="web design image" />
      </div>
      <div className="font-semibold tracking-wider">
        <p>
            {servicesP1}
        </p>
      </div>
      <div className="font-semibold tracking-wider">
        <p>
            {servicesP2}
        </p>
      </div>
    </section>
  )
}

export default ServicesComp
