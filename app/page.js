import React from 'react';
import Image from 'next/image';
import { Mail, Phone, ArrowRight, Check, Zap, Globe, Smartphone, Database } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-rephina-dark text-white">
      
      {/* --- ANIMATED BACKGROUND --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-rephina-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-rephina-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-rephina-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 top-0 transition-all duration-300 backdrop-blur-md bg-rephina-dark/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-3">
              {/* LOGO HERE */}
              <div className="bg-white rounded-full p-1 h-12 w-12 flex items-center justify-center shadow-lg shadow-rephina-cyan/20">
                 <img src="/logo.png" alt="Rephina Logo" className="h-full w-full object-contain rounded-full" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-white">Rephina</span>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#services" className="text-gray-300 hover:text-white transition">Services</a>
              <a href="#tech" className="text-gray-300 hover:text-white transition">Tech Stack</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition">Pricing</a>
              <a href="#contact" className="bg-gradient-to-r from-rephina-cyan to-rephina-blue text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-rephina-cyan/30 transition">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 animate-float">
             <span className="h-2 w-2 rounded-full bg-rephina-gold animate-pulse"></span>
             <span className="text-sm font-medium text-gray-200">Accepting New Clients for 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            We Build The <span className="text-transparent bg-clip-text bg-gradient-to-r from-rephina-cyan to-white">Future</span> <br/>
            Of Your Business
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10">
            Enterprise-grade software, AI integration, and digital transformation tailored for South African SMEs.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="group relative px-8 py-4 bg-rephina-gold text-rephina-dark font-bold rounded-full text-lg shadow-xl shadow-rephina-gold/20 hover:scale-105 transition duration-200">
              Book Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"/>
            </a>
            <a href="#pricing" className="px-8 py-4 glass rounded-full text-lg font-medium hover:bg-white/10 transition duration-200">
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* --- REAL TECH LOGOS SECTION --- */}
      <section id="tech" className="relative z-10 py-10 border-y border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-8">Powered by Modern Technology</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
            {/* React */}
            <div className="flex flex-col items-center gap-2">
               <svg viewBox="0 0 24 24" className="w-12 h-12 fill-rephina-cyan animate-spin-slow" style={{animationDuration: '10s'}}>
                 <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z"/>
                 <circle cx="12" cy="12" r="2" />
               </svg>
               <span className="text-xs font-semibold">React</span>
            </div>

            {/* OpenAI */}
            <div className="flex flex-col items-center gap-2">
               <svg viewBox="0 0 24 24" className="w-10 h-10 fill-white">
                 <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1195 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1 .6765 8.1643l-.142-.0805-4.783-2.7582a.7713.7713 0 0 0-.7806 0l-5.8428 3.3685v-2.3324a.0804.0804 0 0 1 .0332-.0615zM8.933 4.2155a.0804.0804 0 0 1 .0332-.0615l4.9892-2.8763a4.4944 4.4944 0 0 1 6.1408 1.6464 4.4708 4.4708 0 0 1 .5346 3.0137l-.142-.0852-4.783-2.7582a.7712.7712 0 0 0-.7806 0L9.132 6.5479zM7.3024 4.0825l5.027 2.9048a1.5338 1.5338 0 0 1 .0285 2.6525l-5.027 2.9049a1.5338 1.5338 0 0 1-1.5583 0l-5.027-2.9049a1.5338 1.5338 0 0 1-.0285-2.6525l5.027-2.9049a1.5338 1.5338 0 0 1 1.5583 0z"/>
               </svg>
               <span className="text-xs font-semibold">OpenAI</span>
            </div>

            {/* Microsoft Power Platform */}
            <div className="flex flex-col items-center gap-2">
               <div className="grid grid-cols-2 gap-1 w-10 h-10">
                  <div className="bg-red-500 rounded-sm"></div>
                  <div className="bg-green-500 rounded-sm"></div>
                  <div className="bg-blue-500 rounded-sm"></div>
                  <div className="bg-yellow-500 rounded-sm"></div>
               </div>
               <span className="text-xs font-semibold">Microsoft</span>
            </div>

            {/* WooCommerce */}
            <div className="flex flex-col items-center gap-2">
               <svg viewBox="0 0 24 24" className="w-10 h-10 fill-purple-500">
                  <path d="M16.92 6.56c-.85 0-1.63.15-2.28.43-.87-1.35-2.33-2.22-4.04-2.22-1.89 0-3.48 1.07-4.28 2.64-.53-.19-1.07-.29-1.6-.29C2.06 7.12 0 9.17 0 11.9s2.06 4.79 4.72 4.79c.63 0 1.25-.13 1.83-.37a4.93 4.93 0 004.05 2.06c1.8 0 3.39-.93 4.28-2.32.7.74 1.7 1.22 2.76 1.22 2.21 0 4.2-1.79 4.2-4.51s-1.99-4.21-4.92-4.21z"/>
               </svg>
               <span className="text-xs font-semibold">WooCommerce</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section id="services" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-rephina-cyan font-semibold tracking-wide uppercase text-sm">Our Expertise</h2>
            <p className="mt-2 text-3xl md:text-4xl font-bold">Solutions Built For Growth</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="glass glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                <Globe className="w-24 h-24 text-white" />
              </div>
              <div className="bg-rephina-blue/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="text-rephina-cyan w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Software</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full-stack web & mobile apps tailored to your workflow. Built with React & Node.js.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                <Zap className="w-24 h-24 text-white" />
              </div>
              <div className="bg-rephina-blue/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="text-rephina-gold w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI & Automation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Intelligent agents & WhatsApp chatbots powered by OpenAI to automate support.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                <Database className="w-24 h-24 text-white" />
              </div>
              <div className="bg-rephina-blue/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Database className="text-green-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Power Platform</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Cost-effective business apps integrated directly with your Microsoft 365.
              </p>
            </div>

            {/* Card 4 */}
            <div className="glass glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition">
                <Smartphone className="w-24 h-24 text-white" />
              </div>
              <div className="bg-rephina-blue/50 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="text-purple-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">E-Commerce</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Scalable online stores with PayFast integration to sell effectively in SA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Transparent Pricing</h2>
            <p className="mt-4 text-gray-400">Professional quality at accessible rates.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 items-center">
            {/* Starter */}
            <div className="glass p-8 rounded-3xl border border-white/5 hover:border-white/20 transition">
              <h3 className="text-xl font-medium text-gray-300">Starter Website</h3>
              <div className="my-6">
                <span className="text-4xl font-bold text-white">R18,500</span>
                <span className="text-gray-500 block text-sm mt-1">Once-off</span>
              </div>
              <ul className="space-y-4 mb-8 text-gray-400 text-sm">
                <li className="flex items-center"><Check className="w-4 h-4 text-rephina-cyan mr-3"/> 5-Page WordPress Site</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-rephina-cyan mr-3"/> Mobile Responsive</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-rephina-cyan mr-3"/> Basic SEO Setup</li>
              </ul>
              <a href="#contact" className="block w-full py-3 rounded-xl border border-white/20 text-center hover:bg-white/10 transition">Select Plan</a>
            </div>

            {/* Featured */}
            <div className="glass p-8 rounded-3xl border border-rephina-cyan/50 relative transform scale-105 shadow-2xl shadow-rephina-cyan/20">
              <div className="absolute top-0 right-0 bg-rephina-cyan text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">POPULAR</div>
              <h3 className="text-xl font-bold text-white">E-Commerce</h3>
              <div className="my-6">
                <span className="text-5xl font-bold text-white">R45,000</span>
                <span className="text-gray-400 block text-sm mt-1">Once-off</span>
              </div>
              <ul className="space-y-4 mb-8 text-gray-300 text-sm">
                <li className="flex items-center"><Check className="w-5 h-5 text-rephina-gold mr-3"/> WooCommerce Store</li>
                <li className="flex items-center"><Check className="w-5 h-5 text-rephina-gold mr-3"/> PayFast Integration</li>
                <li className="flex items-center"><Check className="w-5 h-5 text-rephina-gold mr-3"/> Up to 50 Products</li>
                <li className="flex items-center"><Check className="w-5 h-5 text-rephina-gold mr-3"/> Inventory Management</li>
              </ul>
              <a href="#contact" className="block w-full py-3 rounded-xl bg-rephina-cyan text-white font-bold text-center hover:bg-blue-500 transition">Get Started</a>
            </div>

            {/* Custom */}
            <div className="glass p-8 rounded-3xl border border-white/5 hover:border-white/20 transition">
              <h3 className="text-xl font-medium text-gray-300">Custom App</h3>
              <div className="my-6">
                <span className="text-4xl font-bold text-white">R95,000+</span>
                <span className="text-gray-500 block text-sm mt-1">Starting from</span>
              </div>
              <ul className="space-y-4 mb-8 text-gray-400 text-sm">
                <li className="flex items-center"><Check className="w-4 h-4 text-rephina-cyan mr-3"/> Custom Web Application</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-rephina-cyan mr-3"/> Discovery & Design Phase</li>
                <li className="flex items-center"><Check className="w-4 h-4 text-rephina-cyan mr-3"/> Admin Dashboards</li>
              </ul>
              <a href="#contact" className="block w-full py-3 rounded-xl border border-white/20 text-center hover:bg-white/10 transition">Contact Us</a>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="glass rounded-3xl p-8 md:p-12 text-center border border-white/10">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
              Whether you need a simple website or a complex AI integration, we are your partners in growth.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mb-10">
               <a href="mailto:Rephinasoftware@gmail.com" className="flex items-center justify-center gap-3 text-lg hover:text-rephina-cyan transition">
                 <div className="bg-white/10 p-3 rounded-full">
                    <Mail className="h-6 w-6" />
                 </div>
                 Rephinasoftware@gmail.com
               </a>
               <div className="flex items-center justify-center gap-3 text-lg">
                 <div className="bg-white/10 p-3 rounded-full">
                    <Phone className="h-6 w-6" />
                 </div>
                 071 927 9462
               </div>
            </div>
            
            <a href="mailto:Rephinasoftware@gmail.com" className="inline-block px-10 py-4 bg-white text-rephina-dark font-bold rounded-full hover:bg-gray-200 transition shadow-lg shadow-white/10">
              Send an Email
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative z-10 bg-black/40 backdrop-blur-lg border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center gap-2 justify-center md:justify-start">
               {/* Small Footer Logo */}
               <div className="h-8 w-8 bg-white rounded-full p-0.5">
                   <img src="/logo.png" alt="Logo" className="h-full w-full object-contain rounded-full" />
               </div>
               <span className="text-xl font-bold text-white">Rephina</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">Durban, South Africa</p>
          </div>
          <div className="text-sm text-gray-500">
            &copy; 2025 Rephina Software Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
