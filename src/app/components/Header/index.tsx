'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="#" className="flex items-center space-x-2">
            <div className="text-xl font-bold text-gray-800">BAT<span className="text-red-600">ANDA</span>HUB</div>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="nav-link font-medium text-gray-700 hover:text-red-600 relative">
              Home
            </Link>
            <Link href="#experience" className="nav-link font-medium text-gray-700 hover:text-red-600 relative">
              About
            </Link>
            <Link href="#services" className="nav-link font-medium text-gray-700 hover:text-red-600 relative">
              Services
            </Link>
            <Link href="#publications" className="nav-link font-medium text-gray-700 hover:text-red-600 relative">
              Publications
            </Link>
            <Link href="#publications" className="nav-link font-medium text-gray-700 hover:text-red-600 relative">
              Multimedia
            </Link>
            <Link href="#contact" className="nav-link font-medium text-gray-700 hover:text-red-600 relative">
              Contact
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button className="text-gray-700" onClick={toggleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="mt-2 py-3 bg-white md:hidden">
            <Link href="#about" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
              Home
            </Link>
            <Link href="#experience" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
              About
            </Link>
            <Link href="#services" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
              Services
            </Link>
            <Link href="#publications" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
              Publications
            </Link>
            <Link href="#multimedia" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
              Multimedia
            </Link>
            <Link href="#contact" className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}