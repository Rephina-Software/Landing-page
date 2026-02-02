import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, Zap, Database, Smartphone, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-float">
             <span className="h-2 w-2 rounded-full bg-rephina-gold animate-pulse"></span>
             <span className="text-sm font-medium text-gray-200">Democratizing Tech for SA SMEs</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Enterprise Quality at <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rephina-cyan to-white">SME Scale & Budget</span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10">
            We partner with South African startups and businesses to build custom software, AI integrations, and automation tools that generate real ROI.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="group relative px-8 py-4 bg-rephina-gold text-rephina-dark font-bold rounded-full text-lg shadow-xl shadow-rephina-gold/20 hover:scale-105 transition duration-200">
              Get Your Free Quote
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
            </Link>
            <Link href="/about" className="px-8 py-4 glass rounded-full text-lg font-medium hover:bg-white/10 transition duration-200">
              Our Mission
            </Link>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section id="services" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-rephina-cyan font-semibold tracking-wide uppercase text-sm">Our Expertise</h2>
            <p className="mt-2 text-3xl md:text-4xl font-bold">Explore Our Solutions</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <Link href="/services/custom-software" className="glass glass-card p-8 rounded-3xl relative overflow-hidden group block cursor-pointer">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                <Globe className="w-24 h-24 text-white" />
              </div>
              <div className="bg-rephina-blue/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="text-rephina-cyan w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-rephina-cyan transition">Custom Software &rarr;</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tailored web and mobile applications built to solve your specific business problems.
              </p>
            </Link>

            {/* Card 2 */}
            <Link href="/services/ai-automation" className="glass glass-card p-8 rounded-3xl relative overflow-hidden group block cursor-pointer">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                <Zap className="w-24 h-24 text-white" />
              </div>
              <div className="bg-rephina-blue/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="text-rephina-gold w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-rephina-gold transition">AI & Automation &rarr;</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                WhatsApp chatbots and AI agents that automate customer service and workflows.
              </p>
            </Link>

            {/* Card 3 */}
            <Link href="/services/power-platform" className="glass glass-card p-8 rounded-3xl relative overflow-hidden group block cursor-pointer">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                <Database className="w-24 h-24 text-white" />
              </div>
              <div className="bg-rephina-blue/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Database className="text-green-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-green-400 transition">Power Platform &rarr;</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Rapid business apps integrated with Microsoft 365. High value, lower cost.
              </p>
            </Link>

            {/* Card 4 */}
            <Link href="/services/ecommerce" className="glass glass-card p-8 rounded-3xl relative overflow-hidden group block cursor-pointer">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                <Smartphone className="w-24 h-24 text-white" />
              </div>
              <div className="bg-rephina-blue/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="text-purple-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition">SaaS & E-Commerce &rarr;</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Online stores and MVP development for startups launching new digital products.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* --- WHY US SECTION (Replaced Pricing) --- */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <h2 className="text-3xl font-bold mb-6">Why South African Businesses Trust Rephina</h2>
                  <div className="space-y-6">
                      <div className="flex gap-4">
                          <CheckCircle className="text-rephina-gold flex-shrink-0" />
                          <div>
                              <h4 className="font-bold text-lg">Local Understanding</h4>
                              <p className="text-gray-400 text-sm">We know the SA market, from POPIA compliance to local payment gateways like PayFast.</p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <CheckCircle className="text-rephina-gold flex-shrink-0" />
                          <div>
                              <h4 className="font-bold text-lg">Accessible Pricing</h4>
                              <p className="text-gray-400 text-sm">Our rates are 30-50% below large consulting firms, designed for SME budgets.</p>
                          </div>
                      </div>
                      <div className="flex gap-4">
                          <CheckCircle className="text-rephina-gold flex-shrink-0" />
                          <div>
                              <h4 className="font-bold text-lg">Full Partnership</h4>
                              <p className="text-gray-400 text-sm">We don't just write code; we provide strategy, training, and long-term support.</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="glass p-8 rounded-3xl text-center">
                  <h3 className="text-2xl font-bold mb-4">Start Your Project</h3>
                  <p className="text-gray-300 mb-8">Not sure where to begin? We offer a free technology needs assessment.</p>
                  <Link href="/contact" className="inline-block w-full py-4 bg-white text-rephina-dark font-bold rounded-xl hover:bg-gray-200 transition">
                      Book Free Consultation
                  </Link>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
