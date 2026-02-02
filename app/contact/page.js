import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12">
           
           {/* Info Side */}
           <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Great</h1>
              <p className="text-xl text-gray-300 mb-10">
                Ready to digitize your business? Book a free 30-minute consultation to discuss your needs.
              </p>

              <div className="space-y-8">
                  <div className="flex items-start gap-4">
                      <div className="bg-rephina-blue/40 p-3 rounded-full">
                          <Mail className="w-6 h-6 text-rephina-cyan" />
                      </div>
                      <div>
                          <h4 className="font-bold text-lg">Email Us</h4>
                          <a href="mailto:Rephinasoftware@gmail.com" className="text-gray-400 hover:text-white transition">Rephinasoftware@gmail.com</a>
                          <p className="text-xs text-gray-500 mt-1">Response within 24 hours</p>
                      </div>
                  </div>

                  <div className="flex items-start gap-4">
                      <div className="bg-rephina-blue/40 p-3 rounded-full">
                          <Phone className="w-6 h-6 text-rephina-gold" />
                      </div>
                      <div>
                          <h4 className="font-bold text-lg">Call or WhatsApp</h4>
                          <p className="text-gray-400">071 927 9462</p>
                          <p className="text-xs text-gray-500 mt-1">Mon-Fri, 8am - 5pm</p>
                      </div>
                  </div>

                  <div className="flex items-start gap-4">
                      <div className="bg-rephina-blue/40 p-3 rounded-full">
                          <MapPin className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                          <h4 className="font-bold text-lg">Location</h4>
                          <p className="text-gray-400">Durban, KwaZulu-Natal</p>
                          <p className="text-xs text-gray-500 mt-1">Serving clients nationwide</p>
                      </div>
                  </div>
              </div>
           </div>

           {/* Form Side */}
           <div className="glass p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-4">
                  <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                      <input type="text" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-rephina-cyan outline-none" placeholder="Your Name" />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                      <input type="email" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-rephina-cyan outline-none" placeholder="john@company.co.za" />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Service Interest</label>
                      <select className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-rephina-cyan outline-none">
                          <option>Custom Software Development</option>
                          <option>AI & Automation</option>
                          <option>Power Platform / Microsoft 365</option>
                          <option>E-Commerce / Website</option>
                          <option>Consulting / Other</option>
                      </select>
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                      <textarea rows="4" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:ring-2 focus:ring-rephina-cyan outline-none" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button type="button" className="w-full py-4 bg-gradient-to-r from-rephina-cyan to-rephina-blue font-bold rounded-lg hover:shadow-lg hover:shadow-rephina-cyan/20 transition">
                      Send Inquiry
                  </button>
              </form>
           </div>

        </div>
      </div>
    </div>
  );
}
