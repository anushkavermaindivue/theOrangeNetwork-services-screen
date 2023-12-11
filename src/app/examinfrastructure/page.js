import BenefitSection from "@/components/benefitSection";
import Hero from "@/components/hero";
import ServicesComp from "@/components/servicesComp";
import heroImg from 'public/pic1-examinfra.png';
import servicesImg from 'public/pic2-examinfra.png';
import benefitsPic1 from 'public/pic3-erp.png';
import benefitsPic2 from 'public/pic4-examinfra.png';
import benefitsPic3 from 'public/pic5-examinfra.png';
import benefitsPic4 from 'public/pic6-examinfra.png';

const ExamInfrastructure = () => {

  const servicesP1 = "The education industry is moving fastinto digitization, and with that examination, methods are also changing to keep up with the technological changes, institutes have to rethink their current process and upgrade their exam infrastructure.";
  const servicesP2 = "And orange network can help you harness the full potential technology by providing the lastest exam infrastructure to the institutions, resulting in innovation and growth for students and teachers alike.";
  const cardHeading01 = 'High Network Speed';
  const cardHeading02 = 'Secure Server';
  const cardHeading03 = 'Identity Verification';
  const cardHeading04 = 'Locked Exam Window';
  const cardHeading05 = '';
  const cardHeading06 = '';
  const cardPara1 = 'With the latest technology, orange network offers a higher network speed and reliable connectivity during the examination. It prevents the exams from stopping, and with real-time sync, the risk of data loss can be eliminated.';
  const cardPara2 = 'Created with the latest netboot technology, the orange network test engine offers a safe and secure server environment where institutes can conduct examinations without any worry of malpractice.';
  const cardPara3 = "With the help of orange network online identity verification system, the institute can verify the student identity online and make sure no malpractices are taking place.";
  const cardPara4 = 'With a locked exam window, the orange network technology prevents students from going out from the exam window during the examination. It contains the candidates from using the internet and cheating.';
  const cardPara5 = '';
  const cardPara6 = '';

  return (
    <main>
      <Hero heroImg={heroImg} heroTitle='' />
      <ServicesComp servicesTitle='Exam Infrastructure' servicesImg={servicesImg} servicesP1={servicesP1} servicesP2={servicesP2} />
      <BenefitSection 
        benefitsPic1={benefitsPic1}
        benefitsPic2={benefitsPic2}
        benefitsPic3={benefitsPic3}
        benefitsPic4={benefitsPic4}
        cardHeading01={cardHeading01}
        cardHeading02={cardHeading02}
        cardHeading03={cardHeading03}
        cardHeading04={cardHeading04}
        cardHeading05={null}
        cardHeading06={null}
        cardPara1={cardPara1}
        cardPara2={cardPara2}
        cardPara3={cardPara3}
        cardPara4={cardPara4}
        cardPara5={null}
        cardPara6={null}
        servicesTitle='Exam Infrastructure'
      />
    </main>
  )
}

export default ExamInfrastructure
