import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  const APPRAISER_SIGNUP = "https://avaluamc.spurams.com/AppraiserSelfRegistration.aspx";
  const CLIENT_PORTAL = "https://avaluamc.spurams.com/ClientSelfRegistration.aspx";

  return (
    <section id="home" className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="City skyline"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center py-32">
        <div className="max-w-4xl">
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-none mb-8">
            Intelligent Property
            <span className="block text-primary mt-2">Valuation Solutions</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed mb-12 max-w-3xl">
            Advanced technology platform trusted by financial institutions for accurate, compliant, and intelligent property valuations.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={CLIENT_PORTAL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-lg bg-primary py-4 px-8 text-base font-semibold text-black hover:bg-primary/90 transition-all"
            >
              Access Platform
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={APPRAISER_SIGNUP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-lg border-2 border-white/30 py-4 px-8 text-base font-semibold text-white hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              Join Our Network
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}