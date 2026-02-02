import React from 'react';
import Link from 'next/link';
import { ShoppingCart, CreditCard, Rocket, Laptop } from 'lucide-react';

export default function EcommercePage() {
  return (
    <div className="min-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-white">SaaS & E-Commerce</h1>
            <p className="text-xl text-gray-300">
                [span_15](start_span)From launching online stores to building scalable software businesses. We provide the technical foundation for your digital revenue.[span_15](end_span)
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="glass p-8 rounded-3xl">
                <ShoppingCart className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">E-Commerce Stores</h3>
                <p className="text-gray-400 mb-4">
                    [span_16](start_span)We build WooCommerce-based online stores for product businesses, including marketplaces connecting buyers and sellers.[span_16](end_span)
                </p>
            </div>

            <div className="glass p-8 rounded-3xl">
                <Rocket className="w-10 h-10 text-rephina-gold mb-4" />
                <h3 className="text-2xl font-bold mb-3">SaaS MVP Development</h3>
                <p className="text-gray-400 mb-4">
                    [span_17](start_span)For entrepreneurs: We build your Minimum Viable Product (MVP), including subscription billing, user management, and multi-tenant architecture.[span_17](end_span)
                </p>
            </div>

            <div className="glass p-8 rounded-3xl">
                <CreditCard className="w-10 h-10 text-rephina-cyan mb-4" />
                <h3 className="text-2xl font-bold mb-3">SA Payment Integration</h3>
                <p className="text-gray-400 mb-4">
                    [span_18](start_span)Seamless integration with local payment gateways like PayFast, PayGate, and Ozow to ensure you get paid on time.[span_18](end_span)
                </p>
            </div>

            <div className="glass p-8 rounded-3xl">
                <Laptop className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Web Applications</h3>
                <p className="text-gray-400 mb-4">
                    [span_19](start_span)Booking systems, Client Portals, and Job Management systems that replace traditional desktop software.[span_19](end_span)
                </p>
            </div>
        </div>

        <div className="text-center">
            <Link href="/contact" className="px-10 py-4 bg-purple-600 text-white font-bold rounded-full hover:bg-purple-500 transition">
                Launch Your Platform
            </Link>
        </div>

      </div>
    </div>
  );
}
