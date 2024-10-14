/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import React, { useState } from 'react';
import { Button } from './ui/button';
import { MenuIcon, XIcon } from 'lucide-react'; 
import Link from 'next/link';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <a className="text-2xl font-bold">FNAXIOM</a>
        <div className="hidden md:flex space-x-4">
          <a href="#home" className="hover:text-gray-500">HOME</a>
          <a href="#about" className="hover:text-gray-500">ABOUT</a>
          <a href="#contact" className="hover:text-gray-500">CONTACT</a>
        </div>
        
      </div>
      <div className="hidden md:block">
        <h1 className="text-2xl font-bold">FULL INTERNSHIP ASSESSMENT</h1>
      </div>

      <div className="hidden md:flex space-x-4">
      <Link href="/form">
      <button className="mt-4 px-8 py-3 bg-red-500 rounded-full font-bold">GET STARTED</button>
      </Link>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full shadow-lg z-50 md:hidden bg-white/0 backdrop-blur-sm">
          <div className="flex flex-col items-start space-y-4 p-4">
            <a href="#home" className="hover:text-gray-500" onClick={toggleMenu}>Home</a>
            <a href="#about" className="hover:text-gray-500" onClick={toggleMenu}>About</a>
            <a href="#contact" className="hover:text-gray-500" onClick={toggleMenu}>Contact</a>
            <Link href="/form">
      <button className="mt-4 px-8 py-3 bg-red-500 rounded-full font-bold">GET STARTED</button>
      </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
