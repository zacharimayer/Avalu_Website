import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <div className="flex items-center text-sm text-gray-400">
            <img 
              src="https://i.ibb.co/8784jqK/logo-removebg.png" 
              alt="Avalu AMC Logo" 
              className="h-8 w-auto"
            />
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <Mail className="h-5 w-5 mr-2" />
            <a href="mailto:info@avaluamc.com" className="hover:text-primary transition-colors">
              info@avaluamc.com
            </a>
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <a 
              href="https://www.linkedin.com/company/avalu-amc/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; 2025 Avalu Appraisal Management Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}