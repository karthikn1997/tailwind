import React, { useState } from 'react';
import './navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="nav bg-[#4f1c4c] z-10 top-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 ">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex-shrink-0 text-white">
                            <img src="src/assets/logos/agr logo.png" alt="" className='agr-logo' />
                        </div>
                        <div className="hidden lg:block">
                            <div className=" nav-link ml-10 flex items-baseline space-x-4">
                                <a href="/" className="text-white hover:bg-[#613864] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                <a href="/about" className="text-white hover:bg-[#613864] hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                                <a href="/scheme" className="text-white hover:bg-[#613864] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Scheme</a>
                                <a href="/gallery" className="text-white hover:bg-[#613864] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Gallery</a>
                                <a href="/contact" className="text-white hover:bg-[#613864] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                            </div>
                        </div>
                        <div className="btn hidden lg:block">
                            <button className='btn sign-in'>Sign In</button>
                            <button className='btn sign-up'>Sign Up</button>
                        </div>
                    </div>
                    <div className="-mr-2 flex lg:hidden">
                        <button onClick={toggleNavbar} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#613864] focus:outline-none focus:bg-[#613864] focus:text-white">
                            {/* Icon when the menu is closed */}
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            ) : (
                                // Icon when the menu is open
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, toggle className based on menu state. */}
            {isOpen && (
                <div className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="/" className="text-white hover:bg-[#613864] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                        <a href="/about" className="text-white hover:bg-[#613864] hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
                        <a href="/scheme" className="text-white hover:bg-[#613864] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Scheme</a>
                        <a href="/gallery" className="text-white hover:bg-[#613864] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Gallery</a>
                        <a href="/contact" className="text-white hover:bg-[#613864] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                    </div>
                    <div className=" btn lg:hidden pb-6">
                        <button className='btn sign-in'>Sign In</button>
                        <button className='btn sign-up'>Sign Up</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
