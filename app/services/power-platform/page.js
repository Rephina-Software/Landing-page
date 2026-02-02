import React from 'react';
import Link from 'next/link';
import { Database, Zap, FileSpreadsheet, ShieldCheck } from 'lucide-react';

export default function PowerPlatformPage() {
  return (
    <div className="min-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">Microsoft Power Platform</h1>
            <p className="text-xl text-gray-300">
                [span_12](start_span)Enterprise-grade capabilities at SME-appropriate cost. We build custom business apps using your existing Microsoft 365 licenses.[span_12](end_span)
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="glass p-8 rounded-3xl">
                <Database className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Power Apps</h3>
                <p className="text-gray-400 mb-4">
                    Rapid development of mobile apps for field workers, data collection apps, and inspection tools. [span_13](start_span)Costs 10-20% of traditional development. [cite: 95-97]
                </p>
            </div>

            <div className="glass p-8 rounded-3xl">
                <Zap className="w-10 h-10 text-rephina-gold mb-4" />
                <h3 className="text-2xl font-bold mb-3">Power Automate</h3>
                <p className="text-gray-400 mb-4">
                    [cite_start]Automate repetitive tasks like approval workflows (leave requests, expenses), document routing, and social media triggers.[span_13](end_span)
                </p>
            </div>

            <div className="glass p-8 rounded-3xl">
                <FileSpreadsheet className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Excel & SharePoint Integration</h3>
                <p className="text-gray-400 mb-4">
                    [span_14](start_span)We turn your messy Excel sheets into structured, secure applications with proper data validation and history.[span_14](end_span)
                </p>
            </div>

            <div className="glass p-8 rounded-3xl">
                <ShieldCheck className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Why Choose This?</h3>
                <ul className="text-gray-400 space-y-2 mt-2">
                    <li>• Rapid Deployment (Weeks, not months)</li>
                    <li>• Mobile-ready out of the box</li>
                    <li>• Secure (Uses Microsoft security)</li>
                    <li>• Cost-effective for internal tools</li>
                </ul>
            </div>
        </div>

        <div className="text-center">
            <Link href="/contact" className="px-10 py-4 bg-green-600 text-white font-bold rounded-full hover:bg-green-500 transition">
                Consult on Power Platform
            </Link>
        </div>

      </div>
    </div>
  );
}
