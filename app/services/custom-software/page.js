import React from 'react';
import Link from 'next/link';
import { Layers, Server, Layout, Smartphone, Code2 } from 'lucide-react';

export default function CustomSoftwarePage() {
  return (
    <div className="min-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Custom Software Development</h1>
            <p className="text-xl text-gray-300">
                [cite_start]We build tailored solutions designed specifically for your unique business workflows, not generic templates.[span_5](end_span)
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="glass p-8 rounded-3xl">
                <Layout className="w-10 h-10 text-rephina-cyan mb-4" />
                <h3 className="text-2xl font-bold mb-3">Frontend & UI</h3>
                <p className="text-gray-400 mb-4">
                    Responsive websites and dashboards that work on any device. [span_6](start_span)We prioritize intuitive design that requires minimal training. [cite: 76-77]
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                    <li>• React & Next.js Applications</li>
                    <li>• Progressive Web Apps (PWA)</li>
                    <li>• Admin Dashboards</li>
                </ul>
            </div>

            <div className="glass p-8 rounded-3xl">
                <Server className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Backend & API</h3>
                <p className="text-gray-400 mb-4">
                    The engine of your business. [cite_start]Secure database design, user authentication, and payment processing integration.[span_6](end_span)
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                    <li>• Node.js & Python APIs</li>
                    <li>• PostgreSQL & MongoDB</li>
                    <li>• PayFast & PayGate Integration</li>
                </ul>
            </div>

            <div className="glass p-8 rounded-3xl">
                <Smartphone className="w-10 h-10 text-rephina-gold mb-4" />
                <h3 className="text-2xl font-bold mb-3">Mobile Development</h3>
                <p className="text-gray-400 mb-4">
                    [span_7](start_span)Cross-platform mobile apps for iOS and Android built from a single codebase to save costs. [cite: 78-79]
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                    <li>• React Native Development</li>
                    <li>• Mobile-Responsive Web Apps</li>
                    <li>• App Store Deployment</li>
                </ul>
            </div>
            
            <div className="glass p-8 rounded-3xl">
                <Code2 className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Our Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Tailwind'].map(tech => (
                        <span key={tech} className="bg-white/10 px-3 py-1 rounded-full text-xs text-white">{tech}</span>
                    ))}
                </div>
                [cite_start]<p className="text-xs text-gray-500 mt-4">Selected for performance and maintainability. [cite: 156-160]</p>
            </div>
        </div>

        <div className="text-center">
            <Link href="/contact" className="px-10 py-4 bg-rephina-cyan text-white font-bold rounded-full hover:bg-rephina-blue transition">
                Start Your Project
            </Link>
        </div>

      </div>
    </div>
  );
}
