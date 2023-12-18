'use client'

import Image from 'next/image';
import arrowImg from 'public/Arrow.png';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { Button } from '@/components/ui/button';
import Map from '@/components/map';

const ContactUs = () => {
  return (
    <section className='mt-12 m-auto flex flex-col gap-y-28'>
      <div className="flex flex-col items-center">
          <h2 className="tracking-wide text-3xl font-bold flex flex-col items-end">Contact Us<div className="h-0.5 w-24 mt-1 bg-[#E76F00]"></div></h2>
          <Image className='cursor-pointer mt-8' src={arrowImg} alt='arrow image' />
      </div>
      <div className='flex justify-between w-[80%] m-auto'>
        <div className='p-8 max-w-[45%] flex flex-col gap-y-3'>
          <h1 className='text-3xl font-bold'>Have Questions?</h1>
          <h1 className='text-3xl font-bold'>Get in Touch!</h1>
          <p className='text-[#454D55] text-md font-medium tracking-wide'>Adipiscing elit, elusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          <div className='flex items-center gap-x-4'>
            <FmdGoodOutlinedIcon className='text-[#454D55] bg-[#EDECE2] w-10 h-10 p-2 border border-none rounded-lg'></FmdGoodOutlinedIcon>
            <div className='text-lg'>
              <p className='text-[#94A0B0]'>Head office:</p>
              <p className='text-[#94A0B0]'>RZ - 7, Matiala, Sec - 3, Dwarka, Near DPS, Delhi-110059</p>
            </div>
          </div>
          <div className='flex items-center gap-x-4'>
            <EmailOutlinedIcon className='text-[#454D55] bg-[#EDECE2] w-10 h-10 p-2 border border-none rounded-lg'></EmailOutlinedIcon>
            <p className='text-[#454D55] text-md font-medium'>info@orangenetwork.in</p>
          </div>
          <div className='flex items-center gap-x-4 mt-4'>
            <WifiCalling3OutlinedIcon className='text-[#454D55] bg-[#EDECE2] w-10 h-10 p-2 border border-none rounded-lg'></WifiCalling3OutlinedIcon>
            <p className='text-[#94A0B0] text-lg'>+91 93184-88024</p>
          </div>
        </div>
        <div className='min-w-[50%]'>
          <form className='flex flex-col gap-y-10'>
              <div className='flex justify-between'>
                <div className='text-[#94A0B0] border-b-[1px] border-[#94A0B0] p-2 text-sm'>
                  <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
                  <input type='text' placeholder='Name' className='outline-none ml-3 align-middle' />
                </div>
                <div className='text-[#94A0B0] border-b-[1px] border-[#94A0B0] p-2 text-sm'>
                  <EmailOutlinedIcon></EmailOutlinedIcon>
                  <input type='email' placeholder='Email Address' className='outline-none ml-3 align-middle' />
                </div>
              </div>
              <div className='flex justify-between'>
                <div className='text-[#94A0B0] border-b-[1px] border-[#94A0B0] p-2 text-sm'>
                  <WifiCalling3OutlinedIcon></WifiCalling3OutlinedIcon>
                  <input type='text' placeholder='Phone' className='outline-none ml-3 align-middle' />
                </div>
                <div className='text-[#94A0B0] border-b-[1px] border-[#94A0B0] p-2 text-sm'>
                  <input type='dropdown' placeholder='Categories' className='outline-none ml-3 align-middle' />
                  <ArrowDropDownIcon className='cursor-pointer text-[#454D55]'></ArrowDropDownIcon>
                </div>
              </div>
              <div className='text-[#94A0B0] border-b-[1px] border-[#94A0B0] p-2 text-sm flex'>
                <CreateOutlinedIcon></CreateOutlinedIcon>
                <textarea className='w-full resize-none outline-none tracking-wide ml-3 align-middle' rows={5} placeholder='How can we help you? Feel free to get in touch!'></textarea>
              </div>
              <div className='text-[#454D55] p-3 text-sm flex'>
                <input id='agree' className='mr-3' type='checkbox' />
                <label htmlFor='agree'>I agree that my data is collected and stored</label>
              </div>
              <Button className='bg-[#1D1D1D] hover:bg-[#1D1D1D] w-fit px-4 h-12'>🤙 Get In Touch (24/7)</Button>
          </form>
        </div>
      </div>
      <div>
        <Map />
      </div>
    </section>
  )
}

export default ContactUs
