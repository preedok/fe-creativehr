import React, { useState, useEffect } from 'react';
import logo from '../../../assets/logo.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/login')
    }
    const handleRegister = () => {
        navigate('/register')
    }
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <nav className={` ${isScrolled ? 'shadow-md fixed w-full bg-white' : ''}`} style={{ transition: 'opacity 0.6s, height 0.6s', zIndex: 99 }}>
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="w-[100px] h-[90px]" />
                        <span className="text-gray-800 ms-[-20px] text-xl font-semibold">Creativehr</span>
                    </div>
                    <div className="md:hidden me-6">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:flex items-center space-x-9">
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out">Home</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out">About Us</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out">Products</a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out">Blog</a>
                        <div className="relative">
                            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 transition-colors duration-200 ease-in-out focus:outline-none flex items-center">
                                Training <ArrowDropDownIcon className="ml-1" />
                            </button>
                            {isOpen && (
                                <ul className="absolute bg-white shadow-md mt-2 py-2 rounded w-48">
                                    <li><a href="#" className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100">Regular Training</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100">In House Training</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100">Video Training</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100">Webinar</a></li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <button onClick={handleLogin} className="text-white bg-[#feba5b] hover:bg-blue-600 transition-colors duration-200 ease-in-out px-9 rounded-full py-2">Login</button>
                        <button onClick={handleRegister} className="text-gray-800 bg-gray-200 hover:bg-gray-300 transition-colors duration-200 ease-in-out px-7 rounded-full py-2">Register</button>
                    </div>
                </div>
                {isOpen && (
                    <div className='bg-white shadow-md md:hidden py-2 px-4'>
                        <div >
                            <a href="#" className="block py-1 text-gray-600 hover:text-gray-900">Home</a>
                            <a href="#" className="block py-1 text-gray-600 hover:text-gray-900">About Us</a>
                            <a href="#" className="block py-1 text-gray-600 hover:text-gray-900">Products</a>
                            <a href="#" className="block py-1 text-gray-600 hover:text-gray-900">Blog</a>
                            <a href="#" className="block py-1 text-gray-600 hover:text-gray-900">Regular Training</a>
                            <a href="#" className="block py-1 text-gray-600 hover:text-gray-900">In House Training</a>
                            <a href="#" className="block py-1 text-gray-600 hover:text-gray-900">Video Training</a>
                            <a href="#" className="block py-1 text-gray-600 hover:text-gray-900">Webinar</a>
                        </div>
                        <div>
                            <button onClick={handleLogin} className="block mt-4 w-full text-white bg-[#feba5b] hover:bg-blue-600 transition-colors duration-200 ease-in-out px-9 rounded-full py-2">Login</button>
                            <button onClick={handleRegister} className="block mt-2 w-full text-gray-800 bg-gray-200 hover:bg-gray-300 transition-colors duration-200 ease-in-out px-7 rounded-full py-2">Register</button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
