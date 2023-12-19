import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  console.log("fojhbd");
  return (
    <footer className='flex flex-col border-t-2 border-[#F89953] w-screen '>
      <div className='flex flex-wrap justify-between  px-4  w-full mt-4'>
        <div className=' flex flex-col  gap-3 pl-1'>
          <div className='flex align-center justify-center gap-1 flex-wrap'>
            <svg
              width='34'
              height='32'
              viewBox='0 0 24 21'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                id='Vector'
                d='M7.28537 19.0267C5.2029 21.3881 1.67599 21.3787 0.691014 18.2315C0.49817 17.6153 0.343985 16.9817 0.230582 16.3352C-0.23244 13.6956 0.00519937 10.9597 0.913452 8.47323C1.8217 5.98686 3.35977 3.86168 5.33316 2.36649C7.30657 0.871298 9.62666 0.0732421 12 0.0732422C14.3734 0.0732423 16.6935 0.871298 18.6668 2.36649C20.6403 3.86168 22.1783 5.98686 23.0866 8.4733C23.9948 10.9597 24.2324 13.6956 23.7694 16.3352C23.656 16.9817 23.5019 17.6153 23.309 18.2315C22.324 21.3787 18.7971 21.3881 16.7146 19.0267L13.5 15.3815C13.1929 15.0332 13.2246 14.4589 13.3093 13.9759C13.3608 13.6823 13.3344 13.3779 13.2333 13.1013C13.1323 12.8247 12.9612 12.5882 12.7417 12.4219C12.5221 12.2556 12.2641 12.1668 12 12.1668C11.736 12.1668 11.4779 12.2556 11.2584 12.4219C11.0388 12.5882 10.8677 12.8247 10.7667 13.1013C10.6656 13.3779 10.6392 13.6823 10.6907 13.9759C10.7754 14.4589 10.8071 15.0332 10.5 15.3815L7.28537 19.0267Z'
                fill='url(#paint0_linear_47_621)'
              />
              <defs>
                <linearGradient
                  id='paint0_linear_47_621'
                  x1='22.9077'
                  y1='6.87691'
                  x2='1.6077'
                  y2='6.87691'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stop-color='#E76F00' />
                  <stop offset='1' stop-color='#F4BA76' />
                </linearGradient>
              </defs>
            </svg>
            <span className='font-[inkut] text-3xl md:text-3xl'>
              The Orange Network
            </span>
          </div>
          <div className='flex gap-2'>
            <button className=' px-[18px] py-[12px] text-md md:px-[24px] md:py-[18px] bg-[#FF9500] rounded-[8px] text-white font-bold md:text-lg '>
              Be a Mock Centre
            </button>
            <button className='text-lg py-[12px] text-md md:px-[24px] md:py-[18px] rounded-[8px]  border-2 font-bold border-[#F1F1F3] '>
              Be a Channel Partner
            </button>
          </div>
        </div>
        <div className=' mt-6 flex md:flex-row md:mt-0  flex-wrap  md:justify-around w-full md:w-1/2 gap-2 '>
          <div className=' w-2/5 md:w-1/4  '>
            <span className='text-[#4A5568] font-lg font-bold'>Help</span>
            <ul className='flex flex-col gap-2 mt-2 md:mt-5 text-[#718096]'>
              <li>
                <Link className='uppercase' href='/resources/FAQs'>
                  faqs
                </Link>
              </li>
              <li>
                <a href=''>Payment Terms</a>
              </li>
              <li>
                <a href=''> Request a Demo</a>
              </li>
            </ul>
          </div>
          <div className=' ml-12 md:ml-0  w-2/5 md:w-1/4'>
            <span className='text-[#4A5568] font-lg font-bold'>Links</span>
            <ul className='flex flex-col gap-2 mt-2 md:mt-5  text-[#718096]'>
              <li>
                <Link href=''>About Us</Link>
              </li>
              <li>
                <Link href=''>Products</Link>{" "}
              </li>
              <li>
                <Link href=''>Services</Link>{" "}
              </li>
              <li>
                <a href=''>How it Works</a>{" "}
              </li>
              <li>
                <a href=''>Blog</a>{" "}
              </li>
              <li>
                <Link href=''>Resources</Link>{" "}
              </li>
            </ul>
          </div>
          <div className=''>
            <span className='text-[#4A5568] font-lg font-bold block'>
              Contact Us
            </span>{" "}
            <span className='block text-md text-[#718096] mt-4 '>
              Head office:
            </span>
            <span className='block text-md text-[#718096] mt-1 '>
              RZ - 7, Matiala, Sec - 3, Dwarka,
            </span>
            <span className='block text-md text-[#718096]  mt-1'>
              Near DPS, Delhi-110059
            </span>
            <span className='block text-md text-[#718096]  mt-3'>
              Office: +91 93184-88024
            </span>
            <span className='block text-md text-[#718096] mt-2 '>
              Mobile: +91 9625-09663
            </span>
            <div className='flex  justify-between  mt-4 '>
              <a
                href=''
                className='w-[45px] h-[45px] rounded-[50%] flex justify-center items-center shadow-lg'
              >
                <i>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='16'
                    width='10'
                    viewBox='0 0 320 512'
                  >
                    <path d='M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z' />
                  </svg>
                </i>
              </a>
              <a
                className='w-[45px] h-[45px] rounded-[50%] flex justify-center items-center shadow-lg'
                href=''
              >
                <i>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='16'
                    width='14'
                    viewBox='0 0 448 512'
                  >
                    <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
                  </svg>
                </i>
              </a>

              <a
                className='w-[45px] h-[45px] rounded-[50%] flex justify-center items-center shadow-lg'
                href=''
              >
                <i>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='16'
                    width='16'
                    viewBox='0 0 512 512'
                  >
                    <path d='M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z' />
                  </svg>
                </i>
              </a>
              <a
                className='w-[45px] h-[45px] rounded-[50%] flex justify-center items-center shadow-lg'
                href=''
              >
                <i>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    height='16'
                    width='14'
                    viewBox='0 0 448 512'
                  >
                    <path d='M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z' />
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full  h-[215px] md:h-[330px] flex justify-center items-center'>
        <Image src='/footer.png' alt='footer image' width={750} height={100} />
      </div>
      <div className='flex justify-center items-center w-full h-[70px] bg-[#F89953] text-sm text-[#4A5568] '>
        <span>
          &#169; 2023 Copyright by Orange Network. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;