import React from 'react';
import Link from 'next/link';
import { Bot, MessageSquare, Sparkles, Workflow } from 'lucide-react';

export default function AIAutomationPage() {
  return (
    <div className="min-h-screen pt-10 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-rephina-gold to-white">AI & Intelligent Automation</h1>
            <p className="text-xl text-gray-300">
                [cite_start]Leverage artificial intelligence to reduce labor requirements and improve customer experience without needing a data science team.[span_7](end_span)
            </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="glass p-8 rounded-3xl border-t-4 border-rephina-gold">
                <MessageSquare className="w-10 h-10 text-rephina-gold mb-4" />
                <h3 className="text-2xl font-bold mb-3">WhatsApp Chatbots</h3>
                <p className="text-gray-400 mb-4">
                    Extremely relevant for the SA market. [span_8](start_span)Automated customer support, FAQ responses, and intelligent lead qualification directly on WhatsApp.[span_8](end_span)
                </p>
            </div>

            <div className="glass p-8 rounded-3xl border-t-4 border-rephina-cyan">
                <Sparkles className="w-10 h-10 text-rephina-cyan mb-4" />
                <h3 className="text-2xl font-bold mb-3">Generative AI Integration</h3>
                <p className="text-gray-400 mb-4">
                    [span_9](start_span)We implement OpenAI/Claude APIs for content generation, document analysis, and automated email drafting specific to your business data.[span_9](end_span)
                </p>
            </div>

            <div className="glass p-8 rounded-3xl border-t-4 border-purple-400">
                <Bot className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">AI Agents</h3>
                <p className="text-gray-400 mb-4">
                    [span_10](start_span)Intelligent systems that handle tasks autonomously, such as appointment scheduling assistants and basic business intelligence reporting.[span_10](end_span)
                </p>
            </div>

            <div className="glass p-8 rounded-3xl border-t-4 border-green-400">
                <Workflow className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-3">Business Process Automation</h3>
                <p className="text-gray-400 mb-4">
                    [span_11](start_span)Streamline operations by automating invoicing, customer onboarding workflows, and inventory tracking.[span_11](end_span)
                </p>
            </div>
        </div>
        
        <div className="bg-black/20 p-8 rounded-3xl text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Tools We Use</h3>
            <div className="flex justify-center flex-wrap gap-4">
                <span className="glass px-4 py-2 rounded-lg">OpenAI API</span>
                <span className="glass px-4 py-2 rounded-lg">Claude</span>
                <span className="glass px-4 py-2 rounded-lg">Python</span>
                <span className="glass px-4 py-2 rounded-lg">Twilio</span>
                <span className="glass px-4 py-2 rounded-lg">Zapier</span>
            </div>
            <div className="mt-8">
                <Link href="/contact" className="px-10 py-4 bg-white text-rephina-dark font-bold rounded-full hover:bg-gray-200 transition">
                    Automate Your Business
                </Link>
            </div>
        </div>

      </div>
    </div>
  );
}
