import FlashSales from '@/components/FlashSales'
import Footer from '@/components/Footer'
import MainDisplay from '@/components/MainDisplay'
import ProductsDisplay from '@/components/ProductsDisplay'
import TopSelling from '@/components/TopSelling'
import React from 'react'

function page() {
  return (
    <div>
      <ProductsDisplay />
      <TopSelling />
      <FlashSales />
      <Footer />
    </div>
  )
}

export default page
