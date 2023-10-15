import AdSlider from "./AdSlider";
import FlashSales from "./FlashSales";
import ProductsDisplay from "./ProductsDisplay";
import TopSelling from "./TopSelling";

function MainDisplay() {
  return (
    <>
      <div className="w-full mt-2 h-full p-5 flex flex-col items-center justify-center rounded-md space-x-1 space-y-3 bg-[#672976] relative shadow-md">
        <AdSlider />
        <ProductsDisplay />
        <TopSelling />
        <FlashSales />
      </div>
    </>
  );
}

export default MainDisplay;
