import React from 'react';
import { ClipboardCheck, Clock, Home, Building } from 'lucide-react';

const services = [
  {
    title: 'Residential Appraisals',
    description: 'Comprehensive valuations for single-family homes, condos, and multi-family properties.',
    icon: Home
  },
  {
    title: 'Commercial Appraisals',
    description: 'Expert valuations for office buildings, retail spaces, and industrial properties.',
    icon: Building
  },
  {
    title: 'Quality Assurance',
    description: 'Rigorous review process ensuring accuracy and compliance with all regulations.',
    icon: ClipboardCheck
  },
  {
    title: 'Fast Turnaround',
    description: 'Quick and efficient service without compromising on quality.',
    icon: Clock
  }
];

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive appraisal management solutions tailored to your needs
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4 lg:gap-x-16">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col items-center text-center bg-white rounded-xl shadow-sm p-8 transition-all hover:shadow-md">
                <dt className="flex flex-col items-center gap-y-4">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <div className="text-lg font-semibold leading-7 text-gray-900">
                    {service.title}
                  </div>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}