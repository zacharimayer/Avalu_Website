import React from 'react';
import { Mail, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get in touch with our team for professional appraisal services
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="inline-flex items-center justify-center gap-x-2 text-lg text-gray-700">
              <Mail className="h-6 w-6 text-primary" />
              <a 
                href="mailto:contact@avaluamc.com" 
                className="hover:text-primary transition-colors"
              >
                contact@avaluamc.com
              </a>
            </div>
            <div className="inline-flex items-center justify-center gap-x-2 text-lg text-gray-700">
              <Phone className="h-6 w-6 text-primary" />
              <a 
                href="tel:+18889281312" 
                className="hover:text-primary transition-colors"
              >
                (888) 928-1312
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}