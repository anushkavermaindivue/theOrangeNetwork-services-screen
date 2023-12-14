import React from 'react'
import PlanFeature from './planFeature'
import { Button } from './ui/button'

const PriceCard = ({planType, price, features, check}) => {
  return (
    <section className='border rounded-xl min-w-[40%] gap-x-2 flex flex-col items-center gap-y-14 px-5 py-10 bg-[#FCFCFD]'>
      <div className='border border-[#ff950025] p-2 bg-[#ff950025] w-full rounded-sm'>
        <p className='font-semibold text-[#262626] text-center'>{planType} Plan</p>
      </div>
      <h1 className='font-bold text-5xl text-[#262626]'>${price}<sub className='text-[#4C4C4D] text-sm'>/month</sub></h1>
      <div className='w-full'>
        <div className='bg-white border rounded-xl'>
          <div className='p-10 '>
            <p className='font-semibold text-[#262626] mb-10 text-center'>Available Features</p>
            <div className='flex flex-col gap-y-3'>
              <PlanFeature feature={features.feature1} />
              <PlanFeature feature={features.feature2} />
              <PlanFeature feature={features.feature3} />
              <PlanFeature feature={features.feature4} />
              <PlanFeature feature={features.feature5} />
              <PlanFeature feature={features.feature6} check={check ? '' : 'check'} />
              <PlanFeature feature={features.feature7} check={check ? '' : 'check'} />
            </div>
          </div>
          <Button className='w-full bg-[#FF9500] hover:bg-[#FF9500] border border-none rounded-t-none'>Get Started</Button>
        </div>
      </div>
    </section>
  )
}

export default PriceCard
