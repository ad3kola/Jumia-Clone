import Image from "next/image";
import Jumia from "@/assets/Jumia-Logo.png";
import JumiaWhite from "@/assets/Jumia-Logo-White.webp";
import appStoreImage from "@/assets/app-store-image.webp";
import playStoreImage from "@/assets/play-store-image.webp";
import JumiaLogoStar from "@/assets/Jumia-Logo-Star.webp";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

function Newsletter() {
  return (
    <div className="w-full bg-neutral-800 flex py-5 items-center justify-between">
      <div className="flex md:flex-row flex-col md:justify-betweeen items-center space-x-5 md ;space-x-7 justify-between w-[80%] mx-auto">
        <Image
          src={JumiaWhite}
          alt="Jumia logo"
          className="object-contain w-32"
        />

        <div className="flex flex-col justify-center">
          <h1 className="text-xs uppercase text-white mt-2 font-semibold">
            New to Jumia?
          </h1>
          <p className="text-xs text-white font-light mt-2 ">
            Subscribe to our newsletter to get updates on our latest offers!
          </p>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <form className="peer flex items-center justify-center space-x-1 bg-white rounded-md shadow-md peer-focus:border px-3 peer-focus:border-orange-500 ">
              <EnvelopeIcon className="text-gray-700 h-7 peer-focus:text-orange-500" />
              <input
                type="text"
                placeholder="Enter E-mal Address"
                className="bg-transparent border-none peer flex-grow outline-none py-3 px-2"
              />
            </form>

            <button className="border border-white hover:border-orange-500 py-4 px-5 text-[10px] bg-neutral-800 text-white font-medium uppercase rounded-md">
              MALE
            </button>
            <button className="border border-white hover:border-orange-500 py-4 px-5 bg-neutral-800 text-[10px] text-white font-medium uppercase rounded-md">
              FEMALE
            </button>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center">
          <div className="flex items-center justify-center space-x-2">
            <Image
              src={JumiaLogoStar}
              alt="Jumia -Star-image"
              className="object-contaon w-10 bg-orange-400 rounded-md p-1"
            />
            <div className="text-gray-100 text-xs flex flex-col capitalize space-y-2 items-start h-full justify-between">
              <h1 className="text-white uppercase font-semibold">
                Download Jumia Free App
              </h1>
              <h2>get access to exclusive offers.</h2>
            </div>
          </div>
          <div className="flex items-center jusfity-center space-x-2 text-white text-xs mt-3">
            <button className="flex items-center justify-center cursor-pointer hover:text-orange-500">
              <Image src = {appStoreImage} alt = 'Download on App Store' className="object-contain w-32" />
            </button>
            <button className="flex items-center justify-center cursor-pointer hover:text-orange-500">
              <Image src = {playStoreImage} alt = 'Download on Play Store' className="object-contain w-32 brightness-200" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
