"use client";
import { addItemToCart, removeItemEntirely, removeItemFromCart, setDecreaseItemQTY, setIncreaseItemQTY } from "@/redux/features/cart-slice";
import { Transition } from "@headlessui/react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import toast, { ToastIcon, Toaster, resolveValue } from "react-hot-toast";
import { useDispatch } from "react-redux";

function CartItem({
  id,
  productCategory,
  productTitle,
  productPrice,
  productImage,
  productQuantity,
}) {
  const dispatch = useDispatch();
  const item = { id, productCategory, productTitle, productPrice, productImage };
  const onIncreaseItemQTY = () => {
    dispatch(
      setIncreaseItemQTY(item)
    );
  };
  const onDecreaseItemQTY = () => {
    dispatch(
      setDecreaseItemQTY(item)
    );
  };
  const removeFromCart = () => {
    dispatch(removeItemFromCart(item))
  }
  const TailwindToaster = () => {
    return (
      <Toaster>
        {(t) => (
          <Transition
            appear
            show={t.visible}
            className="transform py-4 px-2 md:p-4 text-sm md:text-base flex bg-gray-100 rounded shadow-sm"
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
    <>
      <div className="flex items-center justify-between space-x-4">
        <Image
          src={productImage}
          className="object-cover"
          width={60}
          height={60}
          alt={productTitle}
        />
        <div className="flex flex-col items-start justify-center h-full">
          <h1 className="text-sm max-w-84 w-[250px] truncate text-gray-900 font-semibold">
            {productTitle}
          </h1>
          <div className="flex items-center justify-center space-x-2 mt-[6px]">
            <button onClick={onDecreaseItemQTY} className="bg-slate-800 duration-100 active:scale-110 rounded-sm py-1 px-[6px]">
              <MinusIcon className="text-white h-4" />
            </button>
            <h1 className="text-sm text-gray-900 font-bold">
              Quantity: <span>{productQuantity}</span>
            </h1>
            <button onClick = {onIncreaseItemQTY} className="text-white bg-slate-800 duration-100 active:scale-110 rounded-sm py-1 px-[6px]">
              <PlusIcon className="text-white h-4" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col space-y-2">
          <button
            onClick={removeFromCart}
            className="text-white bg-red-600 text-xs rounded-md px-2 py-1 cursor-pointer hover:bg-red-700"
          >
            <TrashIcon className="h-5 text-white" />
          </button>
          <TailwindToaster />

          <h1 className="text-gray-900 font-semibold text-base text-center tracking-wider">{`$ ${
            productPrice * productQuantity
          }`}</h1>
        </div>
      </div>
    </>
  );
}

export default CartItem;
