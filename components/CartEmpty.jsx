import Image from 'next/image'
import emptyCart from '@/assets/EmptyShoppingBag.png'

function CartEmpty() {
  return (
	<div className='w-full h-full flex flex-col items-center justify-center'>
		  <Image src={emptyCart} alt='Empty Shoppping Bag' width={200} height={200} />
		  <h1 className = 'text-lg text-gray-900 font-bold'>0 Items</h1>
		  <h1 className = 'text-base text-gray-900 font-semibold'>Your Cart is Empty</h1>
	</div>
  )
}

export default CartEmpty
