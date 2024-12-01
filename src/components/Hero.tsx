import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-center lg:pt-48">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl">
          Intelligent{' '}
          <span className="relative whitespace-nowrap">
            <span className="relative text-primary">Property Valuation</span>
          </span>{' '}
          Solutions
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-100">
          Revolutionizing real estate appraisals with cutting-edge technology and unmatched expertise. Fast, accurate, and fully compliant.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, 'contact')}
            className="group inline-flex items-center justify-center rounded-full bg-primary py-3 px-6 text-sm font-semibold text-white hover:bg-primary/90 active:bg-primary/80 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, 'services')}
            className="group inline-flex items-center justify-center rounded-full border border-white py-3 px-6 text-sm font-semibold text-white hover:bg-white/10 active:bg-white/20 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}