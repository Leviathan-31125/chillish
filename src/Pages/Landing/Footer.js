import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTiktok, BsXLg, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='flex gap-5 justify-around p-5'>
      <div className='flex flex-col gap-3'>
        <h2 className='text-4xl font-medium'>Ray Ilahude</h2>
        <p>© Chillish 2025. All rights reserved.</p>
        <div className='flex gap-2'>
          <div className='rounded-full bg-gray-300 p-2'><BsYoutube /></div>
          <div className='rounded-full bg-gray-300 p-2'><BsInstagram /></div>
          <div className='rounded-full bg-gray-300 p-2'><BsLinkedin /></div>
          <div className='rounded-full bg-gray-300 p-2'><BsTiktok /></div>
          <div className='rounded-full bg-gray-300 p-2'><BsXLg /></div>
          <div className='rounded-full bg-gray-300 p-2'><BsFacebook /></div>
        </div>
      </div>
      <div>
        <h3 className='font-bold text-lg mb-2'>More</h3>
        <ul className='space-y-2'>
          <li><a href='/#' className='underline text-gray-700 font-medium'>About</a></li>
          <li><a href='/#' className='underline text-gray-700 font-medium'>Jobs</a></li>
          <li><a href='/#' className='underline text-gray-700 font-medium'>Contact</a></li>
          <li><a href='/#' className='underline text-gray-700 font-medium'>My Account</a></li>
        </ul>
      </div>
      <div>
        <h3 className='font-bold text-lg mb-2'>Free Content</h3>
        <ul className='space-y-2'>
          <li><a href='/#' className='underline text-gray-700 font-medium'>Modul Gratis</a></li>
          <li><a href='/#' className='underline text-gray-700 font-medium'>Artikel dan Guidebook</a></li>
          <li><a href='/#' className='underline text-gray-700 font-medium'>Video</a></li>
          <li><a href='/#' className='underline text-gray-700 font-medium'>Catatan Buku</a></li>
        </ul>
      </div>
      <div>
        <h3 className='font-bold text-lg mb-2'>Product</h3>
        <ul className='space-y-2'>
          <li><a href='/#' className='underline text-gray-700 font-medium'>Teaching Classes</a></li>
          <li><a href='/#' className='underline text-gray-700 font-medium'>English Chill Academy</a></li>
          <li><a href='/#' className='underline text-gray-700 font-medium'>LifeOS</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
