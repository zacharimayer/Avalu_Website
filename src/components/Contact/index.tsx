import React from 'react';
import { Mail, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get in touch with our team for professional valuation services
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            <a
              href="mailto:contact@avaluamc.com"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-lg font-medium">contact@avaluamc.com</span>
            </a>

            <a
              href="tel:+17862588479"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors group"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-lg font-medium">(786) 258-8479</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}