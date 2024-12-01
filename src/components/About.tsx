import React from 'react';
import { Laptop, HeartHandshake, Users, Award } from 'lucide-react';

const features = [
  {
    name: 'Advanced Technology',
    description: 'State-of-the-art digital platform ensuring efficient and seamless appraisal management.',
    icon: Laptop
  },
  {
    name: 'Client-Centric Approach',
    description: 'Personalized service tailored to meet your specific valuation needs and requirements.',
    icon: HeartHandshake
  },
  {
    name: 'Expert Team',
    description: 'Experienced professionals dedicated to delivering accurate valuations.',
    icon: Users
  },
  {
    name: 'Quality Assured',
    description: 'Rigorous quality control processes ensuring accurate and reliable reports.',
    icon: Award
  },
];

export function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Avalu AMC
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a leading appraisal management company committed to delivering exceptional 
            valuation services through innovation, integrity, and excellence.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center text-center bg-white rounded-xl p-8">
                <dt className="flex flex-col items-center gap-y-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="text-base font-semibold leading-7 text-gray-900">
                    {feature.name}
                  </div>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}