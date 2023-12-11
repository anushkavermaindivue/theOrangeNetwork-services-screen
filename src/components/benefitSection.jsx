import BenefitsCard from "./benefitsCard";

const BenefitSection = ({servicesTitle, benefitsPic1, benefitsPic2, benefitsPic3, benefitsPic4, benefitsPic5, benefitsPic6, cardHeading01, cardHeading02, cardHeading03, cardHeading04, cardHeading05, cardHeading06, cardPara1, cardPara2, cardPara3, cardPara4, cardPara5, cardPara6}) => {
    

  return (
    <section className="max-w-[70%] mt-28 m-auto">
      <div className="flex flex-col items-center uppercase">
        <h2 className="text-3xl font-bold text-[#141414] flex flex-col items-end">Benefits<div className="h-0.5 w-28 mt-1 bg-[#E76F00]"></div></h2>
      </div>
      <div className="mt-32 flex flex-wrap justify-around gap-y-8">
        <BenefitsCard src={benefitsPic1} number={'01'} cardHeading={cardHeading01} cardPara={cardPara1} bgColor='bg-[#e770000c]' border='border-none' />
        <BenefitsCard src={benefitsPic2} number={'02'} cardHeading={cardHeading02} cardPara={cardPara2} border='border' />
        <BenefitsCard src={benefitsPic3} number={'03'} cardHeading={cardHeading03} cardPara={cardPara3} border='border' />
        <BenefitsCard src={benefitsPic4} number={'04'} cardHeading={cardHeading04} cardPara={cardPara4} bgColor='bg-[#e770000c]' border='border-none' />
        <BenefitsCard src={benefitsPic5} number={(servicesTitle=='Exam Infrastructure') ? '' : '05'} cardHeading={cardHeading05} cardPara={cardPara5} bgColor='bg-[#e770000c]' border='border-none' />
        <BenefitsCard src={benefitsPic6} number={(servicesTitle=='Exam Infrastructure') ? '' : '06'} cardHeading={cardHeading06} cardPara={cardPara6} border='border' />
      </div>
    </section>
  )
}

export default BenefitSection;
