import Header from "@/app/components/header/page"
import Spotlight from "@/app/sections/spotlight/page";
import Trusted from "@/app/sections/trsustedby/page";

export default function Home() {
  return (
    <>
      <Header />
      <Spotlight />
      <Trusted />
    </>
  );
}
