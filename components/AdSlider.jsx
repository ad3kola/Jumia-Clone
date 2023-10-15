import bgImage from "@/assets/slider-image9.png";
import {
  AcademicCapIcon,
  BeakerIcon,
  BuildingStorefrontIcon,
  ChartBarIcon,
  ComputerDesktopIcon,
  DevicePhoneMobileIcon,
  EllipsisHorizontalCircleIcon,
  GlobeAltIcon,
  HomeIcon,
  PuzzlePieceIcon,
  ShoppingBagIcon,
  TvIcon,
} from "@heroicons/react/24/outline";
import Slider from "./Slider";
import Image from "next/image";
import adImage1 from '@/assets/ad-image1.jpg'
import adImage2 from '@/assets/ad-image2.png'

function AdSlider() {
  const sectionLinks = [
    {
      id: 1,
      Icon: ShoppingBagIcon,
      title: "Supermarket",
    },
    {
      id: 2,
      Icon: BeakerIcon,
      title: "Health & Beauty",
    },
    {
      id: 3,
      Icon: HomeIcon,
      title: "Home & Office",
    },
    {
      id: 4,
      Icon: GlobeAltIcon,
      title: "Appliances",
    },
    {
      id: 5,
      Icon: DevicePhoneMobileIcon,
      title: "Phones & Tablets",
    },
    {
      id: 6,
      Icon: ComputerDesktopIcon,
      title: "Computing",
    },
    {
      id: 7,
      Icon: TvIcon,
      title: "Electronics",
    },
    {
      id: 8,
      Icon: AcademicCapIcon,
      title: "Fashion",
    },
    {
      id: 9,
      Icon: BuildingStorefrontIcon,
      title: "Baby Products",
    },
    {
      id: 10,
      Icon: PuzzlePieceIcon,
      title: "Gaming",
    },
    {
      id: 11,
      Icon: ChartBarIcon,
      title: "Sporting Goods",
    },
    {
      id: 12,
      Icon: EllipsisHorizontalCircleIcon,
      title: "Other categories",
    },
  ];
  const smallAds = [
    {
    id: 1,
    image: adImage1,
    },
    {
    id: 2,
    image: adImage2,
    },
  ]
  return (
    <div>
      
        <div className="z-20 flex md:flex-row flex-col mt-5 justify-center md:items-start items-center md:justify-around space-y-4 md:space-y-0 md:space-x-5 mx-auto">
          <div className="flex flex-col items-start p-2 bg-white mx-auto rounded-md md:w-[220px] w-full z-20 h-fit relative">
            <ul className="flex flex-col justify-center items-start space-y-3">
              {sectionLinks.map(({ id, Icon, title }) => (
                <li
                  key={id}
                  className="flex items-center justify-start text-gray-600 text-xs hover:text-orange-600 cursor-pointer space-x-1"
                >
                  {Icon && <Icon className="h-5" />}
                  <h1 className="text-[11px] capitalize">
                    {title}
                  </h1>
                </li>
              ))}
            </ul>
          </div>
          <Slider />
          <div className = 'flex flex-row md:flex-col items-center md:items-start justify-center md:space-y-3 md:space-x-2 space-x-2'>
            {smallAds.map((ad) => (
              <div className ='w-56 h-48 rounded-md overflow-hidden relative shadow-md object-cover' key = {ad.id}>
                <Image src = {ad.image} fill=
                {true} alt = 'Ad-image' className = 'object-contain rounded-md' />
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default AdSlider;
