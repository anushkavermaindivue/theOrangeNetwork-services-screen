import Image from 'next/image'

const Hero = ({heroImg, heroTitle}) => {
  return (
    <section>
     <Image className='h-[87.55vh] absolute' src={heroImg} alt='background image'  />
     <div className='flex justify-center items-center h-[87.55vh] font-serif font-semibold w-[60%] tracking-wider text-[#E76F00] text-6xl'>
        <div className='w-[40%] text-center uppercase'><h1>{heroTitle}</h1></div>
     </div>
    </section>
  )
}

export default Hero;
