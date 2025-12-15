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
    <nav className="bg-white/95 backdrop-blur-md shadow-sm fixed w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center transition-opacity hover:opacity-80"
              aria-label="Go to homepage"
            >
              <img
                src="https://i.ibb.co/8784jqK/logo-removebg.png"
                alt="Avalu Logo"
                className="h-14 w-auto"
              />
            </button>
          </div>

          {/* Navigation - Center */}
          <div className="hidden md:flex flex-1 justify-center items-center mx-8">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => handleNavClick('home')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${getLinkClasses('home')}`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('services')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${getLinkClasses('services')}`}
              >
                Platform
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${getLinkClasses('about')}`}
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${getLinkClasses('contact')}`}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Right side button */}
          <div className="hidden md:flex items-center">
            <a
              href={LOGIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-lg bg-primary py-2.5 px-5 text-sm font-semibold text-white hover:bg-primary/90 active:bg-primary/80 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all shadow-sm hover:shadow"
            >
              Client Login
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex-shrink-0 md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary p-2 rounded-lg hover:bg-gray-50 transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-1 bg-white">
            <button
              onClick={() => handleNavClick('home')}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${getLinkClasses('home')}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${getLinkClasses('services')}`}
            >
              Platform
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${getLinkClasses('about')}`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${getLinkClasses('contact')}`}
            >
              Contact
            </button>
            <div className="pt-4">
              <a
                href={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center rounded-lg bg-primary py-3 px-6 text-sm font-semibold text-white hover:bg-primary/90 active:bg-primary/80 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
              >
                Client Login
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}