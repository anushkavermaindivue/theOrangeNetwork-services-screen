import Image from 'next/image'

const Hero = ({heroImg, heroTitle}) => {
  return (
    <section className=' h-[60vh] sm:h-[75vh] md:h-[100vh]'>
    {/* <section className='lg:h-[87vh] md:h-[80vh] sm:h-[70vh]'> */}
     {/* <Image className='h-auto max-w-full absolute' src={heroImg} alt='background image'  /> */}
     <Image className='lg:h-[87%] md:min-h-[75vh] sm:min-h-[65vh] min-h-[50vh] absolute' src={heroImg} alt='background image'  />
     <div className='flex justify-center items-center lg:min-h-[87%] md:min-h-[75vh] sm:min-h-[65vh] min-h-[50vh] font-serif font-semibold w-[60%] tracking-wider text-[#E76F00] text-xl sm:text-4xl md:text-5xl lg:text-6xl'>
        <div className='w-[41%] text-center uppercase'><h1>{heroTitle}</h1></div>
     </div>
    </section>
  )
}

export default Hero;
