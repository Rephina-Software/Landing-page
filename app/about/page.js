import React from 'react';
import { Target, Heart, Users, Shield } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            To democratize access to professional software development and AI technology for South African SMEs, startups, and freelancers. 
            [span_0](start_span)We believe every business deserves enterprise-grade tools to compete effectively.[span_0](end_span)
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
           <div className="glass p-8 rounded-3xl">
              <Target className="w-10 h-10 text-rephina-cyan mb-4" />
              <h3 className="text-xl font-bold mb-2">Accessibility First</h3>
              [span_1](start_span)<p className="text-gray-400 text-sm">We structure services and pricing to remove barriers that traditionally exclude small businesses from quality tech.[span_1](end_span)</p>
           </div>
           <div className="glass p-8 rounded-3xl">
              <Heart className="w-10 h-10 text-rephina-gold mb-4" />
              <h3 className="text-xl font-bold mb-2">Practical Solutions</h3>
              <p className="text-gray-400 text-sm">We avoid over-engineering. [span_2](start_span)We focus on maintainable solutions that solve real business problems and generate ROI.[span_2](end_span)</p>
           </div>
           <div className="glass p-8 rounded-3xl">
              <Users className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Partnership & Education</h3>
              [span_3](start_span)<p className="text-gray-400 text-sm">We don't just deliver software; we educate our clients and build their capacity to leverage digital tools.[span_3](end_span)</p>
           </div>
           <div className="glass p-8 rounded-3xl">
              <Shield className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Quality Without Compromise</h3>
              <p className="text-gray-400 text-sm">Affordability doesn't mean "cheap." [span_4](start_span)We deliver secure, professional code built to last.[span_4](end_span)</p>
           </div>
        </div>

        {/* Founder Section */}
        <div className="glass p-10 rounded-3xl border-l-4 border-rephina-gold">
            <h3 className="text-2xl font-bold mb-4">A Note from the Founder</h3>
            <p className="text-gray-300 italic mb-6">
              [span_5](start_span)"Rephina was founded to address a gap in the South African market. While big firms serve corporates and outsourcing targets the bottom, we are here for the SMEs—the backbone of our economy. We bring large-firm quality to your business scale." [cite: 27-28]
            </p>
            <p className="font-bold text-white">— Mthobisi Nxumalo</p>
        </div>
      </div>
    </div>
  );
}
