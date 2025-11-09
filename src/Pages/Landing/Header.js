import React from 'react'

const Header = () => {
  return (
    <header className='bg-[#F8F8F8] px-36 py-3 flex items-center justify-between'>
      <h2 className="font-bold text-3xl">Rey<span className="text-orange-600">Skill</span></h2>
      <nav>
        <ul className="flex gap-8 items-center text-lg font-medium text-gray-500">
          <li className="hover:text-orange-600"><a href="#home">Home</a></li>
          <li className="hover:text-orange-600"><a href="#freegift">Freegift</a></li>
          <li className="hover:text-orange-600"><a href="#product">Product</a></li>
          <li className="hover:text-orange-600"><a href="#blog">Blog</a></li>
          <li><button className="bg-black py-1 px-5 text-white font-semibold rounded-full">Login</button></li>
        </ul>  
      </nav>
    </header>
  )
}

export default Header