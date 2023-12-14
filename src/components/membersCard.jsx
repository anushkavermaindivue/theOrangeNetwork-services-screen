import Image from "next/image"

const MembersCard = ({title, number, src}) => {
  return (
    <section className='bg-[#E76F00] border border-none rounded-[4rem] max-w-[45%] flex flex-col gap-y-5 items-center justify-end py-5 text-white h-[20rem]'>
      <Image src={src} alt="members logo" />
      <p className="text-xl font-semibold">{title}</p>
      <h2 className="text-3xl font-bold">{number}</h2>
    </section>
  )
}

export default MembersCard
