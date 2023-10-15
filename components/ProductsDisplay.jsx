import productPhone from '@/assets/Product-Phone.png'
import productComputer from '@/assets/Product-Computer.jpg'
import productGenerators from '@/assets/Product-Generators.gif';
import productGroceries from '@/assets/Product-Groceries.png'
import productN5000 from '@/assets/Product-N5000.png'
import productTV from '@/assets/Product-TV.png'
import productWatches from '@/assets/Product-Watches.png'
import productEarpiece from '@/assets/Product-Earpiece.png'
import productAuthentic from '@/assets/product-authentic.gif'
import productRefrigerator from '@/assets/Product-Refrigerator.png'
import productSneakers from '@/assets/Product-Sneakers.png'
import productOnSales from '@/assets/Product-ON-SALES.gif'


import Image from 'next/image'
function ProductsDisplay() {
	const products = [
		{
			id: 1,
			productImage: productPhone,
			title: 'Phones & Tablets',
		},
		{
			id: 2,
			productImage: productGroceries,
			title: 'Groceries',
		},
		{ 
			id: 3,
			productImage: productComputer,
			title: 'Computing Deals',
		},
		{
			id: 4,
			productImage: productN5000,
			title: 'N5, 000 Store',
		},
		{
			id: 5,
			productImage: productTV,
			title: 'Televisions',
		},
		{
			id: 6,
			productImage: productRefrigerator,
			title: 'Refrigerators',
		},
		{
			id: 7,
			productImage: productEarpiece,
			title: 'Mobile Accessories',
		},
		{
			id: 8,
			productImage: productGenerators,
			title: 'Generators',
		},
		{
			id: 9,
			productImage: productSneakers,
			title: "Men's Sneakers",
		},
		{
			id: 10,
			productImage: productWatches,
			title: 'Watches',
		},
		{
			id: 11,
			productImage: productOnSales,
			title: 'Clearance Sales',
		},
	]
  return (
	<div className ='w-full bg-gray-100 mt-2 rounded-md'>
		  <div className='grid grid-cols-2 md:grid-cols-4 space-x-5 sm:space-x-3 lg:grid-cols-6 place-items-center px-2 py-3'>
			  <div className='bg-white w-44 h-44 rounded-md hover:scale-105 duration-100 shadow-md cursor-pointer hover:-top-1 mt-5 relative flex flex-col items-center justify-center space-y-3'>
				  <Image src={productAuthentic} alt = 'Authentic Accessories' className = 'h-3/4 object-contain w-full' />
				  <h1 className = 'h-1/4 text-sm font-medium text-gray-700 capitalize'>Authentic Accessories</h1>
			  </div>
			  {products.map(({id, productImage, title}) => (
				  <div key = {id} className='mt-5 bg-white w-44 h-44 rounded-md hover:scale-105 duration-100 shadow-md cursor-pointer hover:-top-1 relative flex flex-col items-center justify-center space-y-3'>
				  <Image src = {productImage} alt = 'Authentic Accessories' className = 'h-3/4 object-contain w-full' />
				  <h1 className = 'h-1/4 text-sm font-medium text-gray-700 capitalize'>{title}</h1>
			  </div>
			  ))}
		</div>
	</div>
  )
}

export default ProductsDisplay
