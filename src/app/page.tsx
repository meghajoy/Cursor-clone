import Header from "@/app/components/header/page"
import Spotlight from "@/app/sections/spotlight/page";
import Trusted from "@/app/sections/trsustedby/page";
import FirstCard from "@/app/sections/firstcard/page";

export default function Home() {
  return (
    <>
      <Header />
      <Spotlight />
      <Trusted />
      <FirstCard />
    </>
  );
}
