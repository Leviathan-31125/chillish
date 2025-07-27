import React from 'react'
import ProductCard from './ProductCard'

const Product = () => {
  return (
    <div className='px-20 py-5 space-y-3'>
      <h1 className='text-4xl'>Intip Dulu</h1>
      <h1 className='text-4xl font-medium'>Kelas dan Modul Gratis!</h1>
      <div className='grid grid-cols-3 gap-4'>
        <ProductCard title="Viral Thumnail Pack" productImg={'/products/image 3.png'} description="Supercharge your YouTube videos with a complete toolkit to make thumbnails easy and effective." />
        <ProductCard title="Viral Thumnail Pack" productImg={'/products/image 4.png'} description="Supercharge your YouTube videos with a complete toolkit to make thumbnails easy and effective." />
        <ProductCard title="Viral Thumnail Pack" productImg={'/products/image 5.png'} description="Supercharge your YouTube videos with a complete toolkit to make thumbnails easy and effective." />
      </div>
    </div>
  )
}

export default Product
