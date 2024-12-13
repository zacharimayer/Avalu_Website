import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ContactForm } from './ContactForm';

export function Contact() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <Toaster position="top-center" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get in touch with our team for professional appraisal services
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}