import BenefitSection from "@/components/benefitSection";
import Hero from "@/components/hero";
import ServicesComp from "@/components/servicesComp";
import heroImg from 'public/pic1-testengine.png';
import servicesImg from 'public/pic2-testengine.png';
import benefitsPic1 from 'public/pic3-testengine.png';
import benefitsPic2 from 'public/pic4-testengine.png';
import benefitsPic3 from 'public/pic5-testengine.png';
import benefitsPic4 from 'public/pic6-testengine.png';
import benefitsPic5 from 'public/pic7-testengine.png';
import benefitsPic6 from 'public/pic8-testengine.png';


const WebDesign = () => {
  const servicesP1 = "Network provides a powerful test engine with the latest netboot technology, that helps institutes to take exams online in a safe and secure environment. Teachers can easily upload the question papers on the test engine. Students can easily register, give exams, download results, and check their progress from the portal. eduvue provides a powerful test engine with the latest netboot technology, that helps institutes to take exams online in a safe and secure environment. Teachers can easily upload the question papers on the test engine. Students can easily register, give exams, download results, and check their progress from the portal."
  const servicesP2 = "";
  const cardHeading01 = 'Secure';
  const cardHeading02 = 'Registration Portal';
  const cardHeading03 = 'Biometric Authentication';
  const cardHeading04 = 'Multiple Language Support';
  const cardHeading05 = 'Easy Question Paper Management';
  const cardHeading06 = 'Conduct Any Test Formata';
  const cardPara1 = 'The test engine uses a private server thus nobody from the outside can manipulate or take question papers from the servers.';
  const cardPara2 = 'Provides a registration portal where students can go and register themselves, download admit cards, and download the results.';
  const cardPara3 = "Test engine provides a biometric verification device, where test takers can verify the student's identity during the examination";
  const cardPara4 = 'Test engine supports regional languages. institutes can create question papers in both english and any other local languages at once.';
  const cardPara5 = 'Teachers can easily upload and manage questions, and the powerful test engine can create multiple question sets depending on the requirements and deliver those question papers to the students';
  const cardPara6 = 'Test engine can conduct any type of exams such as class tests, mock tests, semester exams, skkill based exams on any devices such as computers, tablets and mobile';

  return (
    <main>
      <Hero heroImg={heroImg} heroTitle='' />
      <ServicesComp servicesTitle='Test Engine' servicesImg={servicesImg} servicesP1={servicesP1} servicesP2={servicesP2} />
      <BenefitSection 
        benefitsPic1={benefitsPic1}
        benefitsPic2={benefitsPic2}
        benefitsPic3={benefitsPic3}
        benefitsPic4={benefitsPic4}
        benefitsPic5={benefitsPic5}
        benefitsPic6={benefitsPic6}
        cardHeading01={cardHeading01}
        cardHeading02={cardHeading02}
        cardHeading03={cardHeading03}
        cardHeading04={cardHeading04}
        cardHeading05={cardHeading05}
        cardHeading06={cardHeading06}
        cardPara1={cardPara1}
        cardPara2={cardPara2}
        cardPara3={cardPara3}
        cardPara4={cardPara4}
        cardPara5={cardPara5}
        cardPara6={cardPara6}
      />
    </main>
  )
}

export default WebDesign
