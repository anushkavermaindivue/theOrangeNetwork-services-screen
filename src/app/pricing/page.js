import Image from "next/image";
import heroImg from 'public/Pricing-Illustration.png';
import abstractImg from 'public/Abstract Line.png';
import energyImg from 'public/Icon.png';
import { Button } from "@/components/ui/button";
import MembersCard from "@/components/membersCard";
import memberImg from 'public/Members-icon.png';
import PriceCard from "@/components/priceCard";

const Page = () => {

  let timer;

  const freeFeatures = {
    feature1 : 'Access to selected free courses.',
    feature2 : 'Limited course materials and resources.',
    feature3 : 'Basic community and support.',
    feature4 : 'No certification upon completion.',
    feature5 : 'Ad-supported platform',
    feature6 : 'Access to exclusive Pro Plan community forums.',
    feature7 : 'Early access to new courses and updates'
  }
  const proFeatures = {
    feature1 : 'Unlimited access to all courses.',
    feature2 : 'Unlimited course materials and resources.',
    feature3 : 'Priority support from instructors.',
    feature4 : 'Course completion certificates.',
    feature5 : 'Ad-free experience',
    feature6 : 'Access to exclusive Pro Plan community forums.',
    feature7 : 'Early access to new courses and updates'
  }

  return (
    <section>
        {/* Hero section */}
      <div className="bg-[#F5F7FA] h-[87.55vh] flex p-10 justify-end">
        <div className="w-[60%]">
          <Image className="ml-8" src={abstractImg} alt="abstract image" />
          <div className="bg-[#FCFCFD] flex p-5 gap-x-5 items-center w-max ml-16 border border-none rounded-lg">
            <Image className="bg-[#ff950025] p-2 w-10 border border-none rounded-md" src={energyImg} alt="energy image" />
            <h1 className="text-3xl font-semibold text-[#191919]">Join the Launch - Over <span className="text-[#FF9500]">200</span> Users Strong!</h1>
          </div>
          <div className="text-[19px] flex flex-col gap-y-5 font-medium mt-4 ml-8 text-[#262626]">
            <p>Don't miss your chance to be a part of something big! We're thrilled to have over <span className="text-[#FF9500]">200 users</span> already on board with us.</p>
            <p>Hurry, act now, and secure your spot! Only a <span className="text-[#FF9500]">few registrations are left.</span></p>
            <p>We'd love to have you with us on this exciting journey.</p>
            <p>Experience the difference.</p>
              <div className="flex justify-center items-center mt-4">
              <Button className='bg-[#FF9500] hover:bg-[#FF9500]'>Join Us Today</Button>
            </div>
          </div>

        </div>
        <div className="flex justify-center items-end">
            <Image src={heroImg} alt="hero image" />
        </div>
      </div>

      {/* Members section */}
      <div className="max-w-[50%] m-auto mt-28">
        <div className="flex flex-col items-center uppercase ">
          <h2 className="text-3xl font-bold text-[#141414] flex flex-col items-end">Our Members Number<div className="h-0.5 w-28 mt-1 bg-[#E76F00]"></div></h2>
        </div>
        <div className="flex mt-32 justify-between">
          <MembersCard title='Registered Member' src={memberImg} timer={timer} />
          <MembersCard title='Registered Left Member' src={memberImg} timer={timer} />
        </div>
      </div>

      {/* pricing section */}
      <div className="max-w-[80%] m-auto mt-44">
        <div className="flex justify-between">
          <h1 className="font-semibold text-2xl">Our Pricing</h1>
          <div>
            <Button className="bg-[#FF9500] hover:bg-[#FF9500] mr-2">Monthly</Button>
            <Button className='bg-transparent hover:bg-transparent text-[#4C4C4D]'>Yearly</Button>
          </div>
        </div>
        <div className="flex justify-around mt-36">
          <PriceCard planType='Free' price='0' features={freeFeatures} check='' />
          <PriceCard planType='Pro' price='79' features={proFeatures} check='check' />
        </div>
      </div>
      
      <div className="mt-32"></div>
    </section>
  )
}

export default Page;
