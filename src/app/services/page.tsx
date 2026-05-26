import React from 'react';
import { Home, Building2, Factory, HardHat, Ruler, ShieldCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Residential Construction',
      icon: <Home size={40} />,
      desc: 'Expertly crafted custom homes and high-end residential complexes with a focus on modern design and luxury.'
    },
    {
      title: 'Commercial Infrastructure',
      icon: <Building2 size={40} />,
      desc: 'Sophisticated office spaces, shopping malls, and mixed-use buildings engineered for business growth.'
    },
    {
      title: 'Industrial Scaling',
      icon: <Factory size={40} />,
      desc: 'Robust factories, warehouses, and industrial units designed for maximum productivity and safety compliance.'
    },
    {
      title: 'Project Management',
      icon: <HardHat size={40} />,
      desc: 'End-to-end oversight ensuring every phase of construction meets our stringent quality and safety standards.'
    },
    {
      title: 'Architectural Planning',
      icon: <Ruler size={40} />,
      desc: 'Precision blueprints and detailed 3D modeling to visualize and optimize your structure before the first brick is laid.'
    },
    {
      title: 'Safety Auditing',
      icon: <ShieldCheck size={40} />,
      desc: 'Comprehensive structural integrity assessments and safety drills to ensure zero-compromise security.'
    }
  ];

  return (
    <main className="bg-neutral-50 min-h-screen">
      <div className="relative h-[50vh] flex flex-col justify-center items-center text-center px-6 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
           <img src="https://images.unsplash.com/photo-1541913054-9463286881d3" className="w-full h-full object-cover" alt="Services" />
        </div>
        <h1 className="relative z-10 text-6xl md:text-8xl font-black italic uppercase italic tracking-tighter mb-4">OUR EXPERTISE.</h1>
        <p className="relative z-10 text-yellow-500 font-bold max-w-xl italic uppercase tracking-widest">Mastering the art of building since 1995.</p>
      </div>

      <div className="container mx-auto px-6 md:px-12 py-24 -mt-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, i) => (
            <div key={i} className="bg-white p-10 shadow-xl border border-neutral-100 hover:border-yellow-500 transition-all group">
              <div className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform origin-left">
                {svc.icon}
              </div>
              <h2 className="text-2xl font-black mb-4 uppercase tracking-tight text-neutral-900">{svc.title}</h2>
              <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                {svc.desc}
              </p>
              <div className="h-1 w-12 bg-neutral-900 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-500 py-20 px-6 text-center">
         <h2 className="text-4xl font-black mb-8 italic uppercase tracking-tight">Need a customized service?</h2>
         <a href="/contact" className="bg-black text-white px-10 py-4 font-bold rounded-lg hover:bg-neutral-800 transition shadow-xl inline-block">
            Talk to an Expert
         </a>
      </div>
    </main>
  );
}

