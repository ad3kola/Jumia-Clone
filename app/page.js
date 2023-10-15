import AdSlider from "@/components/AdSlider";
import Navbar from "@/components/Navbar";
import bgImage from "@/assets/slider-image9.png";
import Image from "next/image";
import MainDisplay from "@/components/MainDisplay";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Cart from "@/components/Cart";

export default function Home() {

  return (
    <>
      <div className="relative w-full h-full overflow-hidden">
        <Navbar />
        <Cart />
        <div className="md:max-w-[1400px] w-full mx-auto flex items-center justify-center flex-col py-1">
          {/* <Image
            src={bgImage}
            alt="bg-image"
            className="w-full h-full object-cover absolute z-10"
          /> */}
          <div className="z-20 flex flex-col mx-auto">
            <MainDisplay />
          </div>
          
        </div>

          <Footer />
      </div>
    </>
  );
}
