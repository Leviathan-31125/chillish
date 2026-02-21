import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const ProductCard = ({ title, description, productImg }) => {
  return (
    <div className='border-2 bg-[#F9F6F3] hover:scale-105 transform duration-200'>
      <div className='bg-black flex justify-center items-center'>
        <img src={productImg} alt={title} />
      </div>
      <div className='p-3 space-y-3'>
        <h3 className='text-2xl font-medium'>{title}</h3>
        <p>{description}</p>
        <a href='/#' className='underline flex gap-3 items-center'>Lihat <FaArrowRightLong /></a>
      </div>
    </div>
  )
}

export default ProductCard
