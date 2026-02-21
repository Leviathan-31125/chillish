import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTiktok, BsTwitter, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='flex flex-col md:flex-row gap-10 justify-around p-10 border-t border-gray-200 bg-white mt-auto'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-3xl font-bold tracking-tight'>Ray Ilahude</h2>
                <p className="text-gray-500 text-sm">© Chillish 2025. All rights reserved.</p>
                <div className='flex gap-4 text-gray-500'>
                    <a href='#' className='hover:text-[#FF0000] transition-colors'><BsYoutube size={20} /></a>
                    <a href='#' className='hover:text-[#E4405F] transition-colors'><BsInstagram size={20} /></a>
                    <a href='#' className='hover:text-[#0A66C2] transition-colors'><BsLinkedin size={20} /></a>
                    <a href='#' className='hover:text-black transition-colors'><BsTiktok size={20} /></a>
                    <a href='#' className='hover:text-[#1DA1F2] transition-colors'><BsTwitter size={20} /></a>
                    <a href='#' className='hover:text-[#1877F2] transition-colors'><BsFacebook size={20} /></a>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12">
                <div>
                    <h3 className='font-bold text-gray-900 mb-4'>Umum</h3>
                    <ul className='space-y-3 text-sm text-gray-600'>
                        <li><Link to='/about' className='hover:text-gray-900 hover:underline'>Tentang</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-bold text-gray-900 mb-4'>Konten</h3>
                    <ul className='space-y-3 text-sm text-gray-600'>
                        <li><Link to='/articles' className='hover:text-gray-900 hover:underline'>Artikel</Link></li>
                        <li><Link to='/books' className='hover:text-gray-900 hover:underline'>Buku & Produk</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-bold text-gray-900 mb-4'>Produk</h3>
                    <ul className='space-y-3 text-sm text-gray-600'>
                        <li><Link to='/levelup' className='hover:text-gray-900 hover:underline'>Kelas LevelUP</Link></li>
                        <li><Link to='/focus-academy' className='hover:text-gray-900 hover:underline'>Focus Academy</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer