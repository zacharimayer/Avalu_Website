import React from 'react';

export function About() {
  return (
    <section id="about" className="bg-gray-900 text-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-8">
              Trusted by financial leaders
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Banks, lenders, and institutional investors depend on our platform for mission-critical property valuations.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="border-l-4 border-primary pl-6">
                <div className="text-3xl font-bold text-primary mb-2">Fast Turnaround</div>
                <div className="text-gray-400">Quick and efficient collateral valuation delivery</div>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <div className="text-3xl font-bold text-primary mb-2">Expert Network</div>
                <div className="text-gray-400">Certified professional appraisers</div>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <div className="text-3xl font-bold text-primary mb-2">Compliance First</div>
                <div className="text-gray-400">USPAP standards adherence</div>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <div className="text-3xl font-bold text-primary mb-2">Quality Assured</div>
                <div className="text-gray-400">Rigorous review process</div>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop"
              alt="Business professionals"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
          </div>
        </div>

        <div className="mt-32 border-t border-gray-800 pt-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Seamless Integrations</h3>
            <p className="text-xl text-gray-400">
              Connect with the industry's leading platforms and networks
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            <div className="flex items-center justify-center p-8 bg-white rounded-xl border border-gray-700 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 group">
              <img
                src="/fannie-mae-logo.png"
                alt="Fannie Mae"
                className="h-20 w-auto object-contain transition-all"
              />
            </div>
            <div className="flex items-center justify-center p-8 bg-white rounded-xl border border-gray-700 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 group">
              <img
                src="/freddie-mac-logo.png"
                alt="Freddie Mac"
                className="h-20 w-auto object-contain transition-all"
              />
            </div>
            <div className="flex items-center justify-center p-8 bg-white rounded-xl border border-gray-700 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 group">
              <img
                src="/seal_of_the_united_states_department_of_housing_and_urban_development.svg.png"
                alt="HUD"
                className="h-20 w-auto object-contain transition-all"
              />
            </div>
            <div className="flex items-center justify-center p-8 bg-white rounded-xl border border-gray-700 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 group">
              <img
                src="/ellie_mae-logo.wine.png"
                alt="Ellie Mae"
                className="h-20 w-auto object-contain transition-all"
              />
            </div>
            <div className="flex items-center justify-center p-8 bg-white rounded-xl border border-gray-700 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 group">
              <img
                src="/data.png"
                alt="Data Analytics"
                className="h-20 w-auto object-contain transition-all"
              />
            </div>
            <div className="flex items-center justify-center p-8 bg-white rounded-xl border border-gray-700 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20 group">
              <img
                src="/cotality_logo_rgb_black-2-scaled.png"
                alt="Cotality"
                className="h-20 w-auto object-contain transition-all"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}