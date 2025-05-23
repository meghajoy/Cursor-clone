import Header from "@/app/components/Header/page"
import PricePage from "@/app/sections/PricePage/page"
import Trusted from "@/app/sections/TrsustedBy/page"
import PricingQuestions from "@/app/sections/PricingQuestions/page"
import Footer from "@/app/components/Footer/page"
export default function Pricing() {
  return (
    <>
      <Header/>
      <PricePage/>
      <Trusted/>
      <PricingQuestions/>
      <Footer/>
    </>
  )
}
