import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const BenefitCard = ({img=null, title, description }) => {
  return (
    <div className='bg-[#FFF0EC]/80 rounded-xl p-8'>
      <div className='flex justify-end gap-3'>
        <div className='max-w-[1rem] max-h-[1rem] w-[1rem] h-[1rem] bg-orange-600 rounded-full'></div>
        <div className='max-w-[1rem] max-h-[1rem] w-[1rem] h-[1rem] bg-green-600 rounded-full'></div>
        <div className='max-w-[1rem] max-h-[1rem] w-[1rem] h-[1rem] bg-black rounded-full'></div>
      </div>
      <img src={img} alt='Benefit Items' className='max-h-[5rem] mb-1' />
      <h2 className='text-2xl font-medium mb-1'>{title}</h2>
      <p className='text-sm mb-2'>{description}</p>
      <a href='/#' className='underline flex gap-3 items-center'>Mulai disini <FaArrowRightLong /></a>
    </div>
  )
}

export default BenefitCard
