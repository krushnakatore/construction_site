import React from 'react';
import { ExternalLink, Search } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'The Obsidian Villa',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      description: 'A masterpiece of minimalism and luxury, featuring cantilevered floors and smart integration.'
    },
    {
      title: 'Neon Hub Plaza',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
      description: 'A 45-story commercial skyscraper with LEED Platinum certification and dynamic workspace design.'
    },
    {
      title: 'Craft & Co Retail',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
      description: 'Specialized retail outlet designed for maximum customer engagement and thermal efficiency.'
    },
    {
      title: 'Summit Factory',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      description: 'Automated manufacturing facility featuring 200,000 sq ft of optimized logistical space.'
    },
    {
      title: 'Azure Apartments',
      category: 'Residential',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
      description: 'Eco-friendly apartment complex with rooftop gardens and communal living spaces.'
    },
    {
      title: 'Metro Logistics',
      category: 'Industrial',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
      description: 'Cold storage warehouse facility with advanced climate control and solar harvesting.'
    }
  ];

  return (
    <main className="bg-white min-h-screen">
       <div className="bg-yellow-500 py-24 px-6 md:px-20">
          <h1 className="text-6xl md:text-8xl font-black text-black uppercase tracking-tighter italic mb-4">OUR WORK.</h1>
          <p className="text-black font-medium text-lg max-w-xl italic">A curated showcase of our most complex and iconic construction projects worldwide.</p>
       </div>

       <div className="container mx-auto px-6 md:px-12 py-20">
          <div className="flex flex-col md:flex-row justify-between mb-12 gap-6">
             <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                {['All', 'Residential', 'Commercial', 'Industrial'].map(cat => (
                  <button key={cat} className="px-6 py-2 border-2 border-black font-bold hover:bg-black hover:text-white transition whitespace-nowrap">
                    {cat}
                  </button>
                ))}
             </div>
             <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
                <input type="text" placeholder="Search projects..." className="pl-10 pr-4 py-2 border-2 border-neutral-200 focus:border-black outline-none transition" />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white group cursor-pointer border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-lg overflow-hidden">
                <div className="relative h-72 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                  <div className="absolute top-4 right-4 bg-yellow-500 text-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition translate-y-2 group-hover:translate-y-0">
                    <ExternalLink size={20} />
                  </div>
                  <div className="absolute bottom-0 left-0 bg-black text-white px-4 py-1 text-xs font-bold uppercase tracking-widest">
                    {project.category}
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-black mb-4 uppercase tracking-tight text-neutral-900 group-hover:text-yellow-600 transition">{project.title}</h2>
                  <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <button className="text-sm font-black uppercase tracking-widest border-b-2 border-black hover:border-yellow-500 transition-colors">
                    Explore Details
                  </button>
                </div>
              </div>
            ))}
          </div>
       </div>

       <div className="bg-neutral-950 py-24 text-center">
          <h2 className="text-white text-3xl font-black italic uppercase italic mb-8">Ready to see your project here?</h2>
          <button className="bg-white text-black px-10 py-4 font-bold rounded-full hover:bg-yellow-500 transition">
             Get a Proposal
          </button>
       </div>
    </main>
  );
}

