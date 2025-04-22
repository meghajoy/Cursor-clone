import Header from "@/app/components/header/page"
import Spotlight from "@/app/sections/Spotlight/page";
import Trusted from "@/app/sections/TrsustedBy/page";
import FirstCard from "@/app/sections/DisplayCards/firstcard/page";
import SecondCard from "@/app/sections/DisplayCards/secondcard/page";
import ThirdCard from "@/app/sections/DisplayCards/thirdcard/page";

export default function Home() {
  return (
    <>
      <Header />
      <Spotlight />
      <Trusted />
      <FirstCard />
      <SecondCard />
      <ThirdCard />
    </>
  );
}
