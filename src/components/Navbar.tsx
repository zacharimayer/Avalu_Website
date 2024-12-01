import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const APPRAISER_PORTAL = "https://app.connectvl.com/index.html#/vendorInterimScreen?clientToken=US9Cb3JqaVdPVGF1bER4dk5VYWUzSkd3bm9GQTArS281SzU0eGxwRW5Ucz06YXZhbHVhbWM6NjM4NjY0MTQwNTU0NjEwMzU0";
  const CLIENT_PORTAL = "https://avaluamc.spurams.com/ClientSelfRegistration.aspx";

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="flex items-center">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="flex items-center"
            >
              <img 
                src="https://i.ibb.co/8784jqK/logo-removebg.png" 
                alt="Avalu AMC Logo" 
                className="h-16 w-auto"
              />
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8 mr-8">
              <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-gray-700 hover:text-primary">Home</a>
              <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-gray-700 hover:text-primary">Services</a>
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-gray-700 hover:text-primary">About</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-gray-700 hover:text-primary">Contact</a>
            </div>
            
            <div className="flex space-x-4">
              <a
                href={APPRAISER_PORTAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Appraiser Portal
              </a>
              <a
                href={CLIENT_PORTAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
              >
                Client Portal
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="block px-3 py-2 text-gray-700 hover:text-primary">Home</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="block px-3 py-2 text-gray-700 hover:text-primary">Services</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="block px-3 py-2 text-gray-700 hover:text-primary">About</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="block px-3 py-2 text-gray-700 hover:text-primary">Contact</a>
            <div className="flex flex-col space-y-2 px-3 pt-4">
              <a
                href={APPRAISER_PORTAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Appraiser Portal
              </a>
              <a
                href={CLIENT_PORTAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors"
              >
                Client Portal
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}