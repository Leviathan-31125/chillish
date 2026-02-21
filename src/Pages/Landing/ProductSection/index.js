import React from 'react'
import ProductCard from '../../../components/ProductCard'

const Product = () => {
  return (
    <div id='product' className='px-20 py-5 space-y-4'>
      <div className='flex justify-between items-center'>
        <div className='relative w-max'>
          <h1 className='text-4xl'>Intip Dulu</h1>
          <h1 className='text-4xl font-medium'>Kelas dan Modul Gratis!</h1>
          <img src='/img/line.png' alt='Chillish Line' className='max-w-[13rem] w-full absolute -bottom-3 right-0 -z-10' />
        </div>
        <div className='flex gap-3'>
          <div className='max-w-[2.5rem] max-h-[2.5rem] w-[2.5rem] h-[2.5rem] bg-gray-900 rounded-full'></div>
          <div className='max-w-[2.5rem] max-h-[2.5rem] w-[2.5rem] h-[2.5rem] bg-gray-400 rounded-full'></div>
          <div className='max-w-[2.5rem] max-h-[2.5rem] w-[2.5rem] h-[2.5rem] bg-black rounded-full'></div>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <ProductCard title="Viral Thumnail Pack" productImg={'/products/image 3.png'} description="Supercharge your YouTube videos with a complete toolkit to make thumbnails easy and effective." />
        <ProductCard title="Viral Thumnail Pack" productImg={'/products/image 4.png'} description="Supercharge your YouTube videos with a complete toolkit to make thumbnails easy and effective." />
        <ProductCard title="Viral Thumnail Pack" productImg={'/products/image 5.png'} description="Supercharge your YouTube videos with a complete toolkit to make thumbnails easy and effective." />
      </div>
    </div>
  )
}

export default Product
