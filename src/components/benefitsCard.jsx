import Image from 'next/image';

const BenefitsCard = ({src, number, cardHeading, cardPara, bgColor, border}) => {
  return (
    <section className='w-[40%] p-2'>
      <div className='w-[100%] h-[60%] flex justify-center items-center m-auto'>
        <Image src={src} alt='benefits card image' />
      </div>
      <div className={` ${bgColor} h-[50%] p-4 border -mt-5 ${border} rounded-xl`}>
        <div className='w-[80%]'>
            <h2 className='text-[#E76F00] text-2xl font-semibold'>{number}</h2>
            <h3 className='font-bold mt-2 text-lg'>{cardHeading}</h3>
            <p className='text-sm font-medium mt-1 tracking-wide text-[#373737]'>{cardPara}</p>
        </div>
      </div>
    </section>
  )
}

export default BenefitsCard
