'use client';
import { setClearCartItems } from '@/redux/features/cart-slice';
import { useDispatch, useSelector } from 'react-redux'
import CartItem from './utils/CartItem';

function CartItems() {
	const {cartItems} = useSelector((state) => state.cart.value)
	const dispatch = useDispatch()
	const clearCart = () => {
		dispatch(setClearCartItems())
	}
	
  return (
		  <div className = 'flex w-full h-full relative bg-white flex-col'>
			  <div className = 'flex flex-col space-y-3 md:space-y-6 py-2 px-5 h-[420px] md:h-[600px] overflow-y-scroll'>
				  
			  {cartItems.map(({ id, productTitle, productPrice, productImage, productCategory, cartQuantity }) => (
				<CartItem key={id}
				id={id}
				productTitle={productTitle}
				productPrice={productPrice}
				productCategory={productCategory}
				productImage={productImage}
				productQuantity={cartQuantity}
			  />
			  ))}
			  </div>
			  <div className = 'flex flex-col items-center justify-center w-full absolute bottom-0 right-0'>
				<div className='w-full py-2 backdrop-blur-sm flex items-center justify-center'>

				<button className='w-fit px-3 py-2 rounded-md shadow-md bg-slate-900 text-white text-sm cursor-pointer active:scale-110 duration-200' onClick = {clearCart}>Clear Cart</button>
				</div>
				  <button className='bg-slate-800 w-full py-3 text-white rounded-t-md hover:bg-slate-700 font-semibold text-sm text-center uppercase'>Order Now : [{cartItems.length} Items]</button>
			  </div>
		</div>
  )
}

export default CartItems