import React from 'react';
import { Home, ShoppingBag, Building2, Factory, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Customize() {
  const options = [
    { 
      type: 'Home', 
      icon: <Home size={40} className="text-yellow-500" />, 
      title: 'Residential Luxury',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      desc: 'Customize every detail of your dream home, from floor plans to finishings.'
    },
    { 
      type: 'Shop', 
      icon: <ShoppingBag size={40} className="text-yellow-500" />, 
      title: 'Retail Spaces',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
      desc: 'Design high-traffic retail environments that reflect your brand identity.'
    },
    { 
      type: 'Building', 
      icon: <Building2 size={40} className="text-yellow-500" />, 
      title: 'Corporate Complexes',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
      desc: 'Plan scaleable office buildings with modern architecture and smart features.'
    },
    { 
      type: 'Factory', 
      icon: <Factory size={40} className="text-yellow-500" />, 
      title: 'Industrial Units',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      desc: 'Optimize for workflow efficiency and industrial-grade safety standards.'
    }
  ];

  return (
    <main className="bg-neutral-50 min-h-screen">
      <div className="bg-neutral-900 py-24 px-6 md:px-20 text-white text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter italic">CREATE YOUR <span className="text-yellow-500">LEGACY.</span></h1>
        <p className="text-neutral-400 max-w-2xl mx-auto text-lg italic">Select a category below to start customizing your construction project with our interactive design engine.</p>
      </div>

      <div className="container mx-auto px-6 md:px-12 -mt-16 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((opt, i) => (
            <div key={i} className="bg-white rounded-xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 flex flex-col group border border-neutral-100">
              <div className="h-48 overflow-hidden relative">
                 <img src={opt.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" alt={opt.type} />
                 <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-lg shadow-lg">
                    {opt.icon}
                 </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h2 className="text-2xl font-black mb-4 uppercase tracking-tight text-neutral-900">{opt.title}</h2>
                <p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-1">
                  {opt.desc}
                </p>
                <Link href={`/planner?type=${opt.type.toLowerCase()}`} className="flex items-center gap-2 font-bold text-black border-b-2 border-yellow-500 w-fit hover:gap-4 transition-all">
                  Get Started <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-black rounded-2xl p-12 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23" className="w-full h-full object-cover" alt="Draft" />
           </div>
           <h3 className="text-3xl font-black mb-4 uppercase italic">Not sure where to start?</h3>
           <p className="text-neutral-400 mb-8 max-w-xl mx-auto">Our consultants are available 24/7 to guide you through the process and help you define your requirements.</p>
           <Link href="/contact" className="bg-yellow-500 text-black px-10 py-4 font-bold rounded-full hover:bg-white transition inline-block">
             Schedule a Consultation
           </Link>
        </div>
      </div>
    </main>
  );
}

