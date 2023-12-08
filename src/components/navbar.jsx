import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-5 gap-x-32'>
      <div className='flex justify-between w-1/4'>
        <MenuIcon className='cursor-pointer' />
        <div className='flex font-serif font-semibold tracking-wide text-lg text-[#141414]'><Image className='w-auto h-auto'  src='/logo.png' width={30} height={30} alt='logo' /> The Orange Network</div>
      </div>
      <div className='flex w-3/5 font-medium justify-between'>
        <ul className='flex items-center gap-x-6 text-sm'>
            <li className='hover:text-[#E76F00] hover:border-b-[1px] border-[#E76F00]'> <Link href='/'>HOME</Link> </li>
            <li className='hover:text-[#E76F00] hover:border-b-[1px] border-[#E76F00]'> <Link href='/'>ABOUT US</Link> </li>
            <li className='hover:text-[#E76F00] hover:border-b-[1px] border-[#E76F00]'> <Link href='/'>PRODUCTS</Link> </li>
            <li className='hover:text-[#E76F00] hover:border-b-[1px] border-[#E76F00]'> <Link href='/'>SERVICES</Link> </li>
            <li className='hover:text-[#E76F00] hover:border-b-[1px] border-[#E76F00]'> <Link href='/'>RESOURCES</Link> </li>
            <li className='hover:text-[#E76F00] hover:border-b-[1px] border-[#E76F00]'> <Link href='/'>PRICING</Link> </li>
            <li className='hover:text-[#E76F00] hover:border-b-[1px] border-[#E76F00]'> <Link href='/'>HIRE</Link> </li>
        </ul>
        <Button className='rounded-[5px] shadow-sm shadow-[#C87310] bg-gradient-to-r from-[#0DC26B] to-[#46B337] text-[#FEFAF4]' >CONTACT US</Button>
      </div>
    </nav>
  )
}

export default Navbar;
