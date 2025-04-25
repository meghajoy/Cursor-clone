import Header from "@/app/components/Header/page"
import Spotlight from "@/app/sections/Spotlight/page";
import Trusted from "@/app/sections/TrsustedBy/page";
import FirstCard from "@/app/sections/DisplayCards/FirstCard/page";
import SecondCard from "@/app/sections/DisplayCards/SecondCard/page";
import ThirdCard from "@/app/sections/DisplayCards/ThirdCard/page";
import BuildSoftware from "@/app/sections/BuildSoftware/page";
import GradCards from "@/app/sections/GradCards/page";
import BlogCard from "@/app/sections/BlogCard/page";
//import Sliders from "@/app/sections/Sliders/page";
import Try from "@/app/sections/TryCursor/page";

export default function Home() {
  return (
    <>
      <Header />
      <Spotlight />
      <Trusted />
      <FirstCard />
      <SecondCard />
      <ThirdCard />
      <BuildSoftware />
      <GradCards />
      <BlogCard />
      {/* <Sliders /> */}
      <Try/>
    </>
  );
}
