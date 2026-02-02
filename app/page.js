import React from 'react';
import { Code, Cpu, BarChart, ShoppingCart, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="font-sans">
      
      {/* --- NAVBAR --- */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold text-2xl text-blue-900">Rephina</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-900 pt-2">Services</a>
              <a href="#pricing" className="text-gray-600 hover:text-blue-900 pt-2">Pricing</a>
              <a href="#contact" className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Enterprise Quality at</span>
              <span className="block text-blue-600">SME Scale & Budget</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              We democratize access to professional software development and AI technology for South African businesses. 
              Custom solutions to help you compete effectively and grow sustainably.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 md:py-4 md:text-lg md:px-10">
                  Book Free Consultation
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="#services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">What We Do</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Tech Solutions
            </p>
          </div>
  
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Custom Software */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <Code className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900">Custom Software</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Full-stack web and mobile applications tailored to your unique business workflows. From concept to deployment.
              </p>
            </div>
            {/* AI & Automation */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <Cpu className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900">AI & Automation</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Intelligent agents, WhatsApp chatbots, and generative AI integration to reduce labor and improve customer service.
              </p>
            </div>
             {/* Power Platform */}
             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <BarChart className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900">Power Platform</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Rapid, cost-effective business apps and workflow automation leveraging your existing Microsoft 365 license.
              </p>
            </div>
             {/* SaaS & E-commerce */}
             <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <ShoppingCart className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-gray-900">SaaS & E-commerce</h3>
              <p className="mt-2 text-gray-600 text-sm">
                Scalable online stores (WooCommerce) and subscription-based software product development for startups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Transparent Pricing</h2>
            <p className="mt-4 text-xl text-blue-200">
              No hidden fees. Professional quality at accessible rates.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Package 1 */}
            <div className="bg-white text-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-center">Starter Website</h3>
                <p className="text-center mt-4 text-4xl font-extrabold text-blue-900">R18,500</p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"/> 5-Page WordPress Site</li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"/> Mobile Responsive</li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"/> Basic SEO Setup</li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"/> Content Management</li>
                </ul>
              </div>
            </div>

            {/* Package 2 */}
            <div className="bg-white text-gray-900 rounded-lg overflow-hidden shadow-lg border-4 border-blue-400 transform hover:scale-105 transition duration-300 relative">
              <div className="px-6 py-8">
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 uppercase rounded-bl">Popular</div>
                <h3 className="text-2xl font-bold text-center">E-Commerce</h3>
                <p className="text-center mt-4 text-4xl font-extrabold text-blue-900">R45,000</p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"/> WooCommerce Store</li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"/> Payment Gateway Integration</li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"/> Up to 50 Products</li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"/> Inventory Management</li>
                </ul>
              </div>
            </div>

            {/* Package 3 */}
            <div className="bg-white text-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-center">Custom App</h3>
                <p className="text-center mt-4 text-xl font-bold text-blue-900">From R95,000</p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"/> Custom Web Application</li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"/> Discovery & Design Phase</li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"/> Admin Dashboards</li>
                  <li className="flex items-start"><CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"/> Full Training Included</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Ready to Transform Your Business?</h2>
          <div className="bg-gray-50 p-8 rounded-xl shadow-inner border border-gray-100">
            <div className="flex flex-col gap-6 items-center justify-center">
               <div className="flex items-center space-x-3">
                 <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-blue-600" />
                 </div>
                 <a href="mailto:Rephinasoftware@gmail.com" className="text-lg md:text-xl font-medium text-gray-700 hover:text-blue-900 transition">Rephinasoftware@gmail.com</a>
               </div>
               
               <div className="flex items-center space-x-3">
                 <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-blue-600" />
                 </div>
                 <span className="text-lg md:text-xl font-medium text-gray-700">071 927 9462</span>
               </div>

               <div className="flex items-center space-x-3">
                 <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-blue-600" />
                 </div>
                 <span className="text-lg md:text-xl font-medium text-gray-700">Durban, South Africa</span>
               </div>
            </div>
            
            <div className="mt-10">
              <a href="mailto:Rephinasoftware@gmail.com" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800">
                Email Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-gray-300 py-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-white">Rephina</span>
            <p className="text-sm text-gray-400 mt-1">Software Solutions</p>
          </div>
          <div className="text-sm">
            &copy; 2025 Rephina Software Solutions. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
