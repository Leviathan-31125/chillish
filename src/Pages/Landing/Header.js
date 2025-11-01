import React from 'react'

const Header = () => {
  return (
    <header className="bg-[#f8f8f8] px-36 py-3 flex items-center justify-between">
      <h2 className="font-bold text-xl">
        <span className="text-orange-600">Ray</span>
        <span className="text-gray-600">Skill</span>
      </h2>

      <nav>
        <ul className="flex gap-8 items-center text-lg font-medium text-gray-500">
          <li><a href="Home" className="text-orange-600">Home</a></li>
          <li><a href="freegift" className="hover:text-orange-600">freegift</a></li>
          <li><a href="product" className="hover:text-orange-600">Product</a></li>
          <li><a href="blog" className="hover:text-orange-600">Blog</a></li>
        </ul>
      </nav>

      <button className="bg-black px-1 py-1 text-white font-semibold rounded-full">
        Login
      </button>
    </header>
  );
};

export default Header