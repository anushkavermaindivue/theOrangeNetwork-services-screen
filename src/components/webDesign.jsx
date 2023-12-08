import Image from "next/image";
import webDesignImg from 'public/pic1.png';

const WebDesign = () => {
  return (
    <section className="max-w-[70%] m-auto uppercase mt-28 flex flex-col gap-y-7">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-[#141414] flex flex-col items-end">Web Design <div className="h-0.5 w-28 mt-1 bg-[#E76F00]"></div></h2>
        <Image className="m-auto" src={webDesignImg} width={225} alt="web design image" />
      </div>
      <div className="font-semibold tracking-wider">
        <p>
            Websites are an essential part of any educational institute in today's age. It serves a variety of purposes for educational institutes, providing information to the prospective students and parents in communicating effectively with the current students and parents website works as a mouthpiece for the educactional institute with the changing landscape of the education industry from school based industry to online virtual learning, it is essential to have a website that accurately reflects your identity and stands out in the market.
        </p>
      </div>
      <div className="font-semibold tracking-wider">
        <p>
            Eduvue offers to do the same with comprehensive website design solutions for educational institutes
        </p>
      </div>
    </section>
  )
}

export default WebDesign
