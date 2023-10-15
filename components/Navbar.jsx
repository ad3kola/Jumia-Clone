'use client'
import {
  MagnifyingGlassIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  QuestionMarkCircleIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Jumia from "@/assets/Jumia-Logo.png";
import coverImage from "@/assets/cover-video-image.gif";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { cartModalOpen } from "@/redux/features/cart-modal-slice";

function Navbar() {  
  const dispatch = useDispatch()
// console.log(cartModalState)
  const toggleModal = () => {
   dispatch(cartModalOpen())
  }

  const navLinks = [
    {
      id: 1,
      Icon: UserIcon,
      linkname: "Account",
      dropdown: true,
    },
    {
      id: 2,
      Icon: QuestionMarkCircleIcon,
      linkname: "Help",
      dropdown: true,
    },

  ];

  return (
    <div className="flex flex-col items-center justify-center w-full shadow-md bg-white relative z-50">
      <div className="w-full h-fit px-10 relative flex items-center justify-center bg-[#511660]">
        <Image
          src={coverImage}
          alt="cover-vide-gif"
          className="object-contain w-full h-full"
        />
      </div>
      <div className=" max-w-[1280px] mx-auto w-full space-x-4 flex flex-col items-start justify-center py-2">
        <div className="lg:pl-14 flex space-x-32 items-center">
          <div className="flex items-center space-x-1 justify-center ">
            <div className="w-4 h-4 bg-orange-500 flex items-center justify-center rounded-full">
              <StarIcon className="h-[14px] text-white" />
            </div>
            <h1 className="text-orange-400 font-semibold text-[11px]">
              Sell on Jumia
            </h1>
          </div>
          <div className="flex items-center justify-start space-x-3">
            <Image
              src={Jumia}
              alt="Jumia logo"
              className="object-contain w-14"
            />
            <div className="text-xs text-gray-400 uppercase tracking-wider">
              OPAY
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">
              FOOD
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">
              LOGISTICS
            </div>
          </div>
        </div>
        <div className="w-full space-x-5 flex items-center justify-around">
          <Image
            src={Jumia}
            alt="Jumia logo"
            className="object-contain w-32"
          />
          <div className="flex items-center justify-center space-x-2 px-2 rounded-md">
            <div className="w-96 lg:w-[500px] flex flex-grow items-center justify-start space-x-1 px-2 border border-gray-400 rounded-md">
              <MagnifyingGlassIcon className="text-gray-600 h-5" />
              <input
                type="text"
                className="p-2 flex-grow placeholder:font-normal placeholder:text-gray-500 border-none outline-none focus:none"
                placeholder="Search products, brands and categories"
              />
            </div>
            <button className="text-gray-50 bg-orange-500 hover:bg-orange-600 p-3 text-xs uppercase rounded-md font-bold">
              SEARCH
            </button>
          </div>
          <div className="flex items-center justify-center space-x-4">
            {navLinks.map(
              ({ dropdown, id, linkname, Icon }) => (
                <div
                  key={id}
                  className="flex items-center justify-center text-gray-700 cursor-pointer hover:text-orange-500 text-base space-x-2"
                >
                  <Icon className="h-7  -mt-1" />
                  <h1 className="text-sm font-semibold">
                    {linkname}
                  </h1>
                  {dropdown && (
                    <ChevronDownIcon className="h-4 font-bold" />
                  )}
                </div>
              )
            )}
              <div onClick={toggleModal}
                  className="flex items-center justify-center text-gray-700 cursor-pointer hover:text-orange-500 text-base space-x-2"
                >
                  <ShoppingCartIcon className="h-7  -mt-1" />
                  <h1 className="text-sm font-semibold">
                    Cart
                  </h1>
                </div>
                
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
