import Header from "@/app/components/Header/page"
import PricePage from "@/app/sections/PricePage/page"
import Trusted from "@/app/sections/TrsustedBy/page"
import Footer from "@/app/components/Footer/page"
export default function page() {
  return (
    <div>
      <Header />
      <PricePage />
      <Trusted />
      <Footer />
    </div>
  )
}
