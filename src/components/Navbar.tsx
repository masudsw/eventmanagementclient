// src/components/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <h1 className="text-gold font-bold text-xl">MyLogo</h1>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        <Link to="/" className="text-white hover:text-gold px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                        <Link to="/about" className="text-white hover:text-gold px-3 py-2 rounded-md text-sm font-medium">About</Link>
                        <Link to="/services" className="text-white hover:text-gold px-3 py-2 rounded-md text-sm font-medium">Services</Link>
                        <Link to="/contact" className="text-white hover:text-gold px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                    </div>
                    <div className="flex items-center">
                        <Link to="/profile" className="text-white hover:text-gold relative">
                            {/* User Icon */}
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm0 0c-4.418 0-8 3.582-8 8v2h16v-2c0-4.418-3.582-8-8-8z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="flex md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            {/* Hamburger Icon */}
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-black`}>
                <Link to="/" className="block text-white hover:text-gold px-4 py-2">Home</Link>
                <Link to="/about" className="block text-white hover:text-gold px-4 py-2">About</Link>
                <Link to="/services" className="block text-white hover:text-gold px-4 py-2">Services</Link>
                <Link to="/contact" className="block text-white hover:text-gold px-4 py-2">Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;
