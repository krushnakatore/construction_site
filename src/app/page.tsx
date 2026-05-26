'use client';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col justify-center px-6 md:px-20 bg-neutral-950 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb1930060" className="w-full h-full object-cover" alt="Construction" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-neutral-950"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl"
        >
          <span className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-4 block">Premier Construction Firm</span>
          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
            WE BUILD <br /> <span className="text-yellow-500 underline decoration-4 underline-offset-8">EXCELLENCE.</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-xl mb-10 leading-relaxed">
            From modern luxury homes to industrial-scale factories, we turn blueprints into lasting legacies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/projects" className="bg-yellow-500 text-black px-8 py-4 font-bold flex items-center gap-2 hover:bg-white transition-all transform hover:-translate-y-1">
              View Portfolio <ArrowRight size={20} />
            </Link>
            <Link href="/planner" className="border-2 border-white text-white px-8 py-4 font-bold hover:bg-white hover:text-black transition-all">
              Start Your Plan
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-black text-neutral-900 mb-4 uppercase tracking-tighter">Our Flagship Projects</h2>
            <p className="text-neutral-500 max-w-md italic">Exploring our latest achievements in architectural brilliance and structural integrity.</p>
          </div>
          <Link href="/projects" className="text-yellow-600 font-bold flex items-center gap-1 hover:underline group">
            All Projects <ChevronRight size={20} className="group-hover:translate-x-1 transition" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <motion.div 
              key={p.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="relative overflow-hidden h-[450px] group cursor-pointer shadow-2xl"
            >
              <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 brightness-75 group-hover:brightness-50" alt={p.title} />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-2 transform opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">{p.category}</span>
                <h3 className="text-3xl font-black mb-4 drop-shadow-md">{p.title}</h3>
                <div className="w-12 h-1 bg-yellow-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 md:px-20 bg-neutral-50 border-t border-b border-neutral-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd" className="rounded-lg shadow-2xl relative z-10" alt="Work" />
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-500 -z-0 hidden md:block"></div>
          </div>
          <div>
             <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter">Why Partner With Us?</h2>
             <div className="space-y-8">
                {[
                  { title: "Uncompromising Quality", desc: "We use only the finest materials and vetted professionals for every beam and brick." },
                  { title: "Innovative Engineering", desc: "Cutting-edge techniques and sustainable practices led by industry experts." },
                  { title: "On-Time Delivery", desc: "Rigorous project management ensures your timeline is respected, always." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle className="text-yellow-500 shrink-0" size={28} />
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-20 text-center bg-yellow-500">
        <h2 className="text-5xl font-black text-black mb-8 uppercase tracking-tighter italic">Ready to build your dream?</h2>
        <p className="text-black/70 text-lg mb-12 max-w-2xl mx-auto font-medium">Get a custom quote today and let's start planning your project with our expert team.</p>
        <Link href="/contact" className="bg-black text-white px-12 py-5 font-bold uppercase tracking-widest hover:bg-neutral-800 transition shadow-xl inline-block">
          Contact Us Now
        </Link>
      </section>
    </main>
  );
}
