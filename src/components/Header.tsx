'use client'
import React, {useEffect, useState} from "react";
import {Menu, MessageCircle, X} from "lucide-react";
import Image from 'next/image';



// Header Component
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
              ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg'
              : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Image
                  src="/logo.png"
                  alt="Manacá Partners"
                  width={250}
                  height={250}
                  className="h-50 w-auto transition-all duration-300 hover:scale-105"
              />
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <a href="https://api.whatsapp.com/send?phone=5511971891894" className="bg-[#3c074e] text-white px-6 py-3 rounded-full hover:shadow-xl transition-all duration-300 font-medium transform hover:scale-105 hover:-translate-y-1" target={'_blank'}>
                Entre em Contato
              </a>
            </nav>
          </div>
        </div>
      </header>
  );
};

export default Header;