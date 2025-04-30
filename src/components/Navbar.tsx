import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';
import { useActiveSection } from '../hooks/useActiveSection';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollTo = useScrollTo();
  const activeSection = useActiveSection();

  const LOGIN_URL = "https://avaluamc.spurams.com/login.aspx";

  const handleNavClick = (sectionId: string) => {
    scrollTo(sectionId);
    setIsMenuOpen(false);
  };

  const getLinkClasses = (sectionId: string) => {
    return `text-gray-700 hover:text-primary transition-colors ${
      activeSection === sectionId ? 'text-primary font-medium' : ''
    }`;
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center"
              aria-label="Go to homepage"
            >
              <img 
                src="https://i.ibb.co/8784jqK/logo-removebg.png" 
                alt="Avalu Appraisals Logo" 
                className="h-16 w-auto"
              />
            </button>
          </div>
          
          {/* Navigation - Center */}
          <div className="hidden md:flex flex-1 justify-center items-center mx-8">
            <div className="flex items-center space-x-8">
              <button onClick={() => handleNavClick('home')} className={getLinkClasses('home')}>Home</button>
              <button onClick={() => handleNavClick('services')} className={getLinkClasses('services')}>Services</button>
              <button onClick={() => handleNavClick('about')} className={getLinkClasses('about')}>About</button>
              <button onClick={() => handleNavClick('contact')} className={getLinkClasses('contact')}>Contact</button>
            </div>
          </div>

          {/* Right side button */}
          <div className="hidden md:flex items-center">
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-full bg-primary py-3 px-6 text-sm font-semibold text-white hover:bg-primary/90 active:bg-primary/80 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Login
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex-shrink-0 md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <button onClick={() => handleNavClick('home')} className={`block w-full text-left px-3 py-2 ${getLinkClasses('home')}`}>Home</button>
            <button onClick={() => handleNavClick('services')} className={`block w-full text-left px-3 py-2 ${getLinkClasses('services')}`}>Services</button>
            <button onClick={() => handleNavClick('about')} className={`block w-full text-left px-3 py-2 ${getLinkClasses('about')}`}>About</button>
            <button onClick={() => handleNavClick('contact')} className={`block w-full text-left px-3 py-2 ${getLinkClasses('contact')}`}>Contact</button>
            <div className="flex flex-col space-y-2 px-3 pt-4">
              <a
                href={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center rounded-full bg-primary py-3 px-6 text-sm font-semibold text-white hover:bg-primary/90 active:bg-primary/80 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Login
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}