import BenefitsCard from "./benefitsCard";
import pic2 from 'public/pic2.png';
import pic3 from 'public/pic3.png';
import pic4 from 'public/pic4.png';
import pic5 from 'public/pic5.png';
import pic6 from 'public/pic6.png';
import pic7 from 'public/pic7.png';

const BenefitSection = () => {
    const cardPara1 = 'Design your website without any code. With a drag and drop website builder, you can easily create the perfect design for your website within a couple of minutes. And if not, there are preloaded templates available. You can choose any template and modify it according to your needs.';
    const cardPara2 = 'You can integrate any toolto your website. for example, you incorporate enquiry and sales management system to your website contact form. This way, your sales team will efficiently manage and convert leads coming from your website.';
    const cardPara3 = 'Its offers an easy-to-use cms where management can control and organize all the website content from a single dashboard.'
    const cardPara4 = 'The websites are encrypted with ssl security certification. so, there is virtually no chance of anyone getting access to your website.';
    const cardPara5 = 'With the search engine optimization feature on the website, you can easily optimize your website to rank on google search engine and generate organic traffic for your business.';
    const cardPara6 = 'Institute can effortlessly communicate with the mass of students with the help of the website. Institute can put up announcements or essential notice on the website. This eay, students or potential candidates can easily see those announcements and act accordingly.';

  return (
    <section className="max-w-[70%] mt-28 m-auto">
      <div className="flex flex-col items-center uppercase">
        <h2 className="text-3xl font-bold text-[#141414] flex flex-col items-end">Benefits<div className="h-0.5 w-28 mt-1 bg-[#E76F00]"></div></h2>
      </div>
      <div className="mt-32 flex flex-wrap justify-around gap-y-8">
        <BenefitsCard src={pic2} number='01' cardHeading='No Code Website Design' cardPara={cardPara1} bgColor='bg-[#e770000c]' border='border-none' />
        <BenefitsCard src={pic3} number='02' cardHeading='Tools Integrations' cardPara={cardPara2} border='border' />
        <BenefitsCard src={pic4} number='03' cardHeading='Easy To Use CMS' cardPara={cardPara3} border='border' />
        <BenefitsCard src={pic5} number='04' cardHeading='Data Security' cardPara={cardPara4} bgColor='bg-[#e770000c]' border='border-none' />
        <BenefitsCard src={pic6} number='05' cardHeading='Search Engine Optimization' cardPara={cardPara5} bgColor='bg-[#e770000c]' border='border-none' />
        <BenefitsCard src={pic7} number='06' cardHeading='Multimedia Materials' cardPara={cardPara6} border='border' />
      </div>
    </section>
  )
}

export default BenefitSection;
