'use client'
import Image from "next/image";
import {useState, useEffect} from 'react';


const MembersCard = ({title, timer, src}) => {

  const [ counterState, setCounter ] = useState(65)
  useEffect(() => {
   clearInterval(timer)
   timer = setInterval(() => {
      if (counterState === 80) {
         clearInterval(timer)
         return
       }
      setCounter(prev => prev+1)
      
   },100)
  
   return () => clearInterval(timer)
  },[counterState])
  
  return (
    <section className='bg-[#E76F00] border border-none rounded-[4rem] max-w-[45%] flex flex-col gap-y-5 items-center justify-end py-5 text-white h-[20rem]'>
      <Image src={src} alt="members logo" />
      <p className="text-xl font-semibold">{title}</p>
      <h2 className="text-3xl font-bold">{counterState} +</h2>
    </section>
  )
}

export default MembersCard;
