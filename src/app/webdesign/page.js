import BenefitSection from "@/components/benefitSection";
import Hero from "@/components/hero";
import ServicesComp from "@/components/servicesComp";
import heroImg from 'public/pic8.png';
import servicesImg from 'public/pic1.png';
import benefitsPic1 from 'public/pic2.png';
import benefitsPic2 from 'public/pic3.png';
import benefitsPic3 from 'public/pic4.png';
import benefitsPic4 from 'public/pic5.png';
import benefitsPic5 from 'public/pic6.png';
import benefitsPic6 from 'public/pic7.png';


const WebDesign = () => {

  const images = {
    benefitsPic1 : benefitsPic1,
    benefitsPic2 : benefitsPic2,
    benefitsPic3 : benefitsPic3,
    benefitsPic4 : benefitsPic4,
    benefitsPic5 : benefitsPic5,
    benefitsPic6 : benefitsPic6
  }

  const details = {
    cardHeading01 : "No Code Website Design",
    cardHeading02 : "Tools Integrations",
    cardHeading03 : "Easy To Use CMS",
    cardHeading04 : "Data Security",
    cardHeading05 : "Search Engine Optimization",
    cardHeading06 : "Multimedia Materials",
    cardPara1 : 'Design your website without any code. With a drag and drop website builder, you can easily create the perfect design for your website within a couple of minutes. And if not, there are preloaded templates available. You can choose any template and modify it according to your needs.',
    cardPara2 : 'You can integrate any toolto your website. for example, you incorporate enquiry and sales management system to your website contact form. This way, your sales team will efficiently manage and convert leads coming from your website.',
    cardPara3 : 'Its offers an easy-to-use cms where management can control and organize all the website content from a single dashboard.',
    cardPara4 : 'The websites are encrypted with ssl security certification. so, there is virtually no chance of anyone getting access to your website.',
    cardPara5 : 'With the search engine optimization feature on the website, you can easily optimize your website to rank on google search engine and generate organic traffic for your business.',
    cardPara6 : 'Institute can effortlessly communicate with the mass of students with the help of the website. Institute can put up announcements or essential notice on the website. This eay, students or potential candidates can easily see those announcements and act accordingly.',
  }

  const servicesP1 = "Websites are an essential part of any educational institute in today's age. It serves a variety of purposes for educational institutes, providing information to the prospective students and parents in communicating effectively with the current students and parents website works as a mouthpiece for the educactional institute with the changing landscape of the education industry from school based industry to online virtual learning, it is essential to have a website that accurately reflects your identity and stands out in the market.";
  const servicesP2 = "Eduvue offers to do the same with comprehensive website design solutions for educational institutes";
  
  return (
    <main>
      <Hero heroImg={heroImg} heroTitle='Web Design' />
      <ServicesComp servicesTitle='Web Design' servicesImg={servicesImg} servicesP1={servicesP1} servicesP2={servicesP2} />
      <BenefitSection
        images={images}
        details={details}
      />
    </main>
  )
}

export default WebDesign;
