import './globals.css'
import Link from 'next/link';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export const metadata = {
  title: 'Rephina Software Solutions',
  description: 'Enterprise quality software for South African SMEs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-rephina-gold selection:text-rephina-dark bg-rephina-dark text-white min-h-screen flex flex-col">
        
        {/* --- GLOBAL BACKGROUND ANIMATION --- */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-rephina-blue rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-96 h-96 bg-rephina-cyan rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-rephina-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* --- GLOBAL NAVBAR --- */}
        <nav className="fixed w-full z-50 top-0 transition-all duration-300 backdrop-blur-md bg-rephina-dark/50 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
                <div className="bg-white rounded-full p-1 h-10 w-10 flex items-center justify-center shadow-lg shadow-rephina-cyan/20 group-hover:scale-110 transition">
                   <img src="/logo.png" alt="Rephina Logo" className="h-full w-full object-contain rounded-full" />
                </div>
                <span className="font-bold text-2xl tracking-tight text-white">Rephina</span>
              </Link>
              <div className="hidden md:flex space-x-8 items-center">
                <Link href="/about" className="text-gray-300 hover:text-white transition hover:scale-105">About Us</Link>
                <Link href="/services/custom-software" className="text-gray-300 hover:text-white transition hover:scale-105">Services</Link>
                <Link href="/contact" className="bg-gradient-to-r from-rephina-cyan to-rephina-blue text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-rephina-cyan/30 transition transform hover:-translate-y-0.5">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* --- PAGE CONTENT --- */}
        <main className="flex-grow relative z-10 pt-20">
            {children}
        </main>

        {/* --- GLOBAL FOOTER --- */}
        <footer className="relative z-10 bg-black/40 backdrop-blur-lg border-t border-white/5 py-10 mt-auto">
          <div className="max-w-7xl mx-auto px-4 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold text-white block">Rephina Software Solutions</span>
              <p className="text-sm text-gray-500 mt-2">Durban, South Africa</p>
            </div>
            <div className="flex gap-6">
                <a href="mailto:Rephinasoftware@gmail.com" className="text-gray-400 hover:text-rephina-gold"><Mail size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-rephina-gold"><Linkedin size={20} /></a>
            </div>
          </div>
          <div className="text-center text-xs text-gray-600 mt-8">
            &copy; 2025 Rephina Software Solutions. All rights reserved.
          </div>
        </footer>

      </body>
    </html>
  )
}
