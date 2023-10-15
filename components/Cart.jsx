'use client'

import { cartModalClose } from "@/redux/features/cart-modal-slice"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { useDispatch, useSelector } from "react-redux"
import CartEmpty from "./CartEmpty"
import CartItems from "./CartItems"

function Cart() {
	const dispatch = useDispatch()
	const { cartModalState } = useSelector((state) => state.cartModal.value)
	const { cartItems } = useSelector((state) => state.cart.value)
	const toggleModal = () => { 
		dispatch(cartModalClose())
	}

  return (
	  <>
				  <div className = {`fixed ${cartModalState ? 'right-0 left-0' : '-right-full left-full'} top-0 bottom-0 w-full duration-500 h-screen backdrop-blur-[2px] bg-gray-200/70 z-[80] overflow-hidden flex items-start justify-end`}>
					  <div className='max-w-2xl w-[500px] bg-white flex flex-col items-start justify-center h-full rounded-md'>	
						  <div className = 'w-full flex items-center justify-between px-5 py-3 bg-gray-200'>
						  <h1 className = 'text-base font-semibold'>Cart: <span className = 'rounded-md bg-neutral-900 text-white text-base p-2'>{cartItems.length} Items</span></h1>
						  <XMarkIcon onClick = {toggleModal} className = 'h-6 text-neutral-950 text-lg cursor-pointer' />
						  </div>
						  <div className = 'w-full h-full bg-white rounded-md'>
							  
						  {cartItems.length === 0 ? <CartEmpty /> : <CartItems />}	  
						  </div>
			</div>
			  </div>
	  </>
  )
}

export default Cart
