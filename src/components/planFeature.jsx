import React from 'react'

const PlanFeature = ({feature, check}) => {
  return (
    <section className='border p-2 rounded-lg bg-[#FCFCFD]'>
      <p className={`inline font-semibold w-fit px-1 bg-[#ff950025] ${check ? "before:content-['x']" : "before:content-['\\2713']"} before:ml-0.5 before:text-[#262626]`}></p>
      <p className='inline text-sm font-medium text-[#4C4C4D] tracking-wide ml-2'>{feature}</p>
    </section>
  )
}

export default PlanFeature
