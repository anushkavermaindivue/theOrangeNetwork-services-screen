import BenefitsCard from "./benefitsCard";

const BenefitSection = ({servicesTitle, images, details}) => {

  return (
    <section className="max-w-[70%] mt-28 m-auto">
      <div className="flex flex-col items-center uppercase">
        <h2 className="text-3xl font-bold text-[#141414] flex flex-col items-end">Benefits<div className="h-0.5 w-28 mt-1 bg-[#E76F00]"></div></h2>
      </div>
      <div className="mt-32 flex flex-wrap justify-around gap-y-8">
        <BenefitsCard src={images.benefitsPic1} number={'01'} cardHeading={details.cardHeading01} cardPara={details.cardPara1} bgColor='bg-[#e770000c]' border='border-none' />
        <BenefitsCard src={images.benefitsPic2} number={'02'} cardHeading={details.cardHeading02} cardPara={details.cardPara2} border='border' />
        <BenefitsCard src={images.benefitsPic3} number={'03'} cardHeading={details.cardHeading03} cardPara={details.cardPara3} border='border' />
        <BenefitsCard src={images.benefitsPic4} number={'04'} cardHeading={details.cardHeading04} cardPara={details.cardPara4} bgColor='bg-[#e770000c]' border='border-none' />
        <BenefitsCard src={images.benefitsPic5=='' ? '' : images.benefitsPic5} number={(servicesTitle=='Exam Infrastructure') ? '' : '05'} cardHeading={details.cardHeading05} cardPara={details.cardPara5} bgColor='bg-[#e770000c]' border='border-none' />
        <BenefitsCard src={images.benefitsPic6=='' ? '' : images.benefitsPic6} number={(servicesTitle=='Exam Infrastructure') ? '' : '06'} cardHeading={details.cardHeading06} cardPara={details.cardPara6} border='border' />
      </div>
    </section>
  )
}

export default BenefitSection;
