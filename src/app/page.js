import BenefitSection from "@/components/benefitSection";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import WebDesign from "@/components/webDesign";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WebDesign />
      <BenefitSection />
    </main>
  )
}