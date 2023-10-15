import { TicketIcon } from '@heroicons/react/24/solid'
import image1 from '@/assets/flash-sales-image1.jpg'
import image2 from '@/assets/flash-sales-image2.jpg'
import image3 from '@/assets/flash-sales-image3.jpg'
import image4 from '@/assets/flash-sales-image4.jpg'
import image5 from '@/assets/flash-sales-image5.jpg'
import image6 from '@/assets/flash-sales-image6.jpg'
import Image from 'next/image'
// import Countdown from 'react-countdown'

function FlashSales() {
	const flashSalesProducts = [
		{
			id: 1,
			image: image1,
			name: 'Ace Elec Power Banks 20000 MAh Utra Slim Portable Fast Charger (ACE ELEC)',
			price: 6950,
		},
		{
			id: 2,
			image: image2,
			name: 'XIAOMI Redmi A2+ 6.52 Inches 3GB RAM 64GB ROM,,, 5000mAh - Black',
			price: 58000,
		},
		{
			id: 3,
			image: image3,
			name: 'Ace Elec WL82 Bluetooth 5.0 Stereo Headsets',
			price: 5999,
		},
		{
			id: 4,
			image: image4,
			name: 'Bluetti EB3A 600w 268wh Portable Power Station',
			price: 269550,
		},
		{
			id: 5,
			image: image5,
			name: "T-Shirts +Shorts 100% Cotton Men's Short Sleeve Set-White",
			price: 6350,
		},
		{
			id: 6,
			image: image6,
			name: 'NIVEA Perfect & Radiant 400ml Body Lotion + 50ml Roll-on',
			price: 3455,
		},
	]
	return (
	  <div className = 'flex w-full bg-white rounded-lg overflow-hidden flex-col items-start justify-center'>

		  <div className = 'bg-red-600 flex items-center justify-between w-full py-3 px-5 '>
			  <h1 className = 'text-lg text-white capitalize font-medium space-x-3 flex items-center justify-center whitespace-nowrap'>
				  <TicketIcon className = 'h-7 text-gray-100' />
				  <span>Flash Sales</span>
			  </h1>
			  <div className = 'text-white text-base flex items-center justify-center space-x-2 md:text-xl'>
				  <h1 className = 'font-light'>Time Left:</h1>
				  <h2 className='font-bold'>00h : 00m : 00s</h2>
				  {/* <Countdown date={Date.now() + 10000} /> */}
			  </div>
			  <h1 className = 'text-white uppercase text-sm font-semibold'>SEE ALL &gt;</h1>
	  </div>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-items-center w-full py-2 px-3 space-x-3'>
				{flashSalesProducts.map((product) => (
					<div key={product.id} className = 'flex flex-col items-start justify-center gap-1 cursor-pointer h-72 md:h-96 group hover:-top-1 duration-100 relative bg-gray-100 w-48 rounded-lg md:w-56'>
						<div className = 'relative h-2/3 w-11/12 overflow-hidden'>
							<div className = 'absolute right-2  top-3 text-red-600 shadow-md bg-amber-100/50 text-sm flex items-center justify-center w-9 z-50 h-7'>-13</div>
							<Image src = {product.image} alt = {product.image} className = 'w-72 group-hover:scale-105 duration-200 h-full object-contain' />
						</div>
						<div className = 'flex flex-col items-start justify-center w-[85%] overflow-hidden truncate mx-auto'>
							<h1 className = 'text-sm font-normal'>{product.name}</h1>
							<h2 className='font-medium text-base tracking-wider'>$ {product.price}</h2>
							<h3 className = 'ml-3 text-gray-800 font-light text-xs tracking-wide line-through'>{`$ ${Math.round(product.price * 2)}`}</h3>
						</div>
					</div>
				))}
	  </div>
	  </div>
   )
}

export default FlashSales
