import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900 hover:text-gray-700 transition-colors">
                            Ray Ilahude
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link to="/articles" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                            Artikel
                        </Link>
                        <Link to="/books" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                            Buku & Produk
                        </Link>
                        <Link to="/levelup" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                            Kelas LevelUP
                        </Link>
                        <Link to="/focus-academy" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                            Focus Academy
                        </Link>

                        {/* CTA Button */}
                        <button className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all transform hover:scale-105">
                            Gabung 370rb+ Pelanggan
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
                        >
                            {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
                    <div className="flex flex-col px-4 pt-4 pb-6 space-y-4">
                        <Link to="/articles" onClick={() => setIsOpen(false)} className="text-base font-medium text-gray-600 hover:text-gray-900">
                            Artikel
                        </Link>
                        <Link to="/books" onClick={() => setIsOpen(false)} className="text-base font-medium text-gray-600 hover:text-gray-900">
                            Buku & Produk
                        </Link>
                        <Link to="/levelup" onClick={() => setIsOpen(false)} className="text-base font-medium text-gray-600 hover:text-gray-900">
                            Kelas LevelUP
                        </Link>
                        <Link to="/focus-academy" onClick={() => setIsOpen(false)} className="text-base font-medium text-gray-600 hover:text-gray-900">
                            Focus Academy
                        </Link>
                        <button className="bg-gray-900 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-gray-800 w-full">
                            Gabung 370rb+ Pelanggan
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;