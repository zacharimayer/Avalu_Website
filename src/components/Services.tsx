import React from 'react';
import { Zap, Target, Shield, Network } from 'lucide-react';

const features = [
  {
    title: 'Streamlined Workflows',
    description: 'Automated processes and real-time tracking keep your valuations moving efficiently from order to completion.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Precision Analytics',
    description: 'Advanced algorithms and market intelligence ensure institutional-grade accuracy on every valuation.',
    icon: Target,
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Compliant & Secure',
    description: 'PCI-DSS and SOC 2 compliant platform with bank-level security. Built-in compliance monitoring and audit trails.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop'
  },
  {
    title: 'Expert Network',
    description: 'Access to thousands of certified professionals. Performance-monitored and quality-assured.',
    icon: Network,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
  }
];

export function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Why leading institutions choose Avalu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade platform delivering speed, accuracy, and intelligence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl bg-black h-[400px]"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-lg text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Comprehensive Coverage</h3>
            <p className="text-lg text-gray-600">All property types, comprehensive valuation capabilities</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">Residential</div>
              <p className="text-sm text-gray-600">Single-family, condos, townhomes</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">Commercial</div>
              <p className="text-sm text-gray-600">Office, retail, hospitality, industrial</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">Multi-Family</div>
              <p className="text-sm text-gray-600">Apartments, complexes, mixed-use</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">Specialized</div>
              <p className="text-sm text-gray-600">Land, agricultural, unique properties</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}