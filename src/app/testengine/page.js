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

  const images = {
    benefitsPic1 : benefitsPic1,
    benefitsPic2 : benefitsPic2,
    benefitsPic3 : benefitsPic3,
    benefitsPic4 : benefitsPic4,
    benefitsPic5 : benefitsPic5,
    benefitsPic6 : benefitsPic6
  }

  const details = {
    cardHeading01 : 'Secure',
    cardHeading02 : 'Registration Portal',
    cardHeading03 : 'Biometric Authentication',
    cardHeading04 : 'Multiple Language Support',
    cardHeading05 : 'Easy Question Paper Management',
    cardHeading06 : 'Conduct Any Test Formata',
    cardPara1 : 'The test engine uses a private server thus nobody from the outside can manipulate or take question papers from the servers.',
    cardPara2 : 'Provides a registration portal where students can go and register themselves, download admit cards, and download the results.',
    cardPara3 : "Test engine provides a biometric verification device, where test takers can verify the student's identity during the examination",
    cardPara4 : 'Test engine supports regional languages. institutes can create question papers in both english and any other local languages at once.',
    cardPara5 : 'Teachers can easily upload and manage questions, and the powerful test engine can create multiple question sets depending on the requirements and deliver those question papers to the students',
    cardPara6 : 'Test engine can conduct any type of exams such as class tests, mock tests, semester exams, skkill based exams on any devices such as computers, tablets and mobile'
  }

  const servicesP1 = "Network provides a powerful test engine with the latest netboot technology, that helps institutes to take exams online in a safe and secure environment. Teachers can easily upload the question papers on the test engine. Students can easily register, give exams, download results, and check their progress from the portal. eduvue provides a powerful test engine with the latest netboot technology, that helps institutes to take exams online in a safe and secure environment. Teachers can easily upload the question papers on the test engine. Students can easily register, give exams, download results, and check their progress from the portal."
  const servicesP2 = "";
  
  return (
    <main>
      <Hero heroImg={heroImg} heroTitle='' />
      <ServicesComp servicesTitle='Test Engine' servicesImg={servicesImg} servicesP1={servicesP1} servicesP2={servicesP2} />
      <BenefitSection 
        images={images}
        details={details}
      />
    </main>
  )
}

export default WebDesign
