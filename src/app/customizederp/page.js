import BenefitSection from "@/components/benefitSection";
import Hero from "@/components/hero";
import ServicesComp from "@/components/servicesComp";
import heroImg from 'public/pic1-erp.png';
import servicesImg from 'public/pic2-erp.png';
import benefitsPic1 from 'public/pic3-erp.png';
import benefitsPic2 from 'public/pic4-erp.png';
import benefitsPic3 from 'public/pic5-erp.png';
import benefitsPic4 from 'public/pic6-erp.png';
import benefitsPic5 from 'public/pic7-erp.png';
import benefitsPic6 from 'public/pic8-erp.png';

const CustomizedErp = () => {

  const images = {
    benefitsPic1 : benefitsPic1,
    benefitsPic2 : benefitsPic2,
    benefitsPic3 : benefitsPic3,
    benefitsPic4 : benefitsPic4,
    benefitsPic5 : benefitsPic5,
    benefitsPic6 : benefitsPic6
  }

  const servicesP1 = "Educational institutes handle a large amount of sensitive user data in terms of student information, staff information, academic information, etc. And sharing those data among departments can be a daunting task that's why the departments need to be interconnected to exchange information from one another and stay updated flawlessly. The management should have access to all the data from a centralized control center";
  const servicesP2 = "That is why the eduvue institute management system provides a customized erp solution for the educational institutes to integrate and automate all of the processes in one place. Eduvue erp solution helping educational institutions to improve their efficiency and creating a transparent management system";
  
  const details = {
    cardHeading01 : 'Staff Management',
    cardHeading02 : 'Account Management',
    cardHeading03 : 'Library Management',
    cardHeading04 : 'Training And Placement Management',
    cardHeading05 : 'Store Management',
    cardHeading06 : 'Hostel Management',
    cardPara1 : 'In any institue, variious users perform various roles. eduvue erp solution helps institutes manage all the staff and their functions. It can also record staff attendance, monitor their work, and store their details like qualification details, subject expertise, skill sets, etc.',
    cardPara2 : 'ERP Solution offers a hassle-free account management system to the institutes. The priary income sources of the educational institutions are their course fees.',
    cardPara3 : "The library is an essential part of any institution. Libraries store a variety of resources such as books, research papers, magazines both online and offline. Managing all these resources manually can be hectic.",
    cardPara4 : 'Training and placement management system communicate with different companies and helps institutes arrange online and offline plcament for the students.',
    cardPara5 : 'ERP offers a comprehensive inventory management solution, which lets you keep track of all the inventories and make sure the institute store is up-to-date at all times.',
    cardPara6 : 'ERP also offers a web based hostel management solution where management can manage the day to day operation of the hostel, manage hostel enquiry, room allotment, disciplinary logs, check-ins and check-outs, and many more from a single dashboard.',
  }

  return (
    <main>
      <Hero heroImg={heroImg} heroTitle='' />
      <ServicesComp servicesTitle='Customized ERP' servicesImg={servicesImg} servicesP1={servicesP1} servicesP2={servicesP2} />
      <BenefitSection 
        images={images}
        details={details}
      />
    </main>
  )
}

export default CustomizedErp
