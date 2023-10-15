"use client";
import { addItemToCart } from "@/redux/features/cart-slice";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { Toaster, ToastIcon, toast, resolveValue } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { cartModalOpen } from "@/redux/features/cart-modal-slice";
import { useRouter } from "next/router";
import Link from "next/link";

function TopSellingProduct({
  id,
  productCategory,
  productTitle,
  productPrice,
  productImage,
}) {
  // const router = useRouter()
  const dispatch = useDispatch();
  const addToCart = () => {
    const item = {
      id,
      productCategory,
      productTitle,
      productPrice,
      productImage,
    };
    dispatch(addItemToCart(item));
  };
  const displayCart = () => {
    dispatch(cartModalOpen());
  };
  const TailwindToaster = () => {
    return (
      <Toaster>
        {(t) => (
          <Transition
            appear
            show={t.visible}
            className="transform py-4 px-2 md:p-4 text-sm md:text-base flex bg-gray-100 rounded shadow-sm z-[90]"
            enter="transition-all duration-200"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="transition-all duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            <ToastIcon toast={t} />
            <p className="px-2">{resolveValue(t.message)}</p>
          </Transition>
        )}
      </Toaster>
    );
  };
  return (
    // <Link href={`/products/${id}`}>
      <div className="flex flex-col group gap-1 max-w-[170px] md:max-w-[208px] mt-8 cursor-pointer max-h-[310px] md:max-h-[370px]">
        <div className="w-full md:h-48 h-44 object-contain z-10 relative overflow-hidden">
          <Image
            className="w-full h-full object-contain"
            fill={true}
            src={productImage}
            alt={productImage}
          />
        </div>
        <div className="w-48 mx-auto h-1/3 truncate flex flex-col">
          <h1 className="text-center text-sm mt-1 font-semibold capitalize">
            {productTitle}
          </h1>
          <p className="text-center text-gray-800 text-xl font-semibold">
            {" "}
            $ {productPrice}
          </p>
          <p className="text-[10px] mx-auto font-bold text-center w-fit mt-2 text-white py-1 px-2 rounded-lg uppercase bg-orange-500">
            {productCategory}
          </p>
          <div className="flex items-center justify-center w-full px-2">
            <button
              onClick={displayCart}
              className="w-fit py-3 text-white bg-orange-500 hover:bg-orange-400 mt-2 px-2 rounded-md"
            >
              <ShoppingBagIcon className="cursor-pointer text-white h-4" />
            </button>
            <button
              onClick={addToCart}
              className="font-semibold uppercase p-2 text-white bg-orange-500 hover:bg-orange-400 mt-2 tracking-wider rounded-lg cursor-pointer mx-auto"
            >
              ADD TO CART
            </button>
            <TailwindToaster />
          </div>
        </div>
      </div>
    // </Link>
  );
}

export default TopSellingProduct;
