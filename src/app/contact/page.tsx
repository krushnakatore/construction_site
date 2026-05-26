import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <main className="bg-neutral-50 min-h-screen">
       <div className="bg-neutral-900 py-24 px-6 text-center text-white">
          <h1 className="text-6xl font-black italic uppercase italic tracking-tighter mb-4">GET IN TOUCH.</h1>
          <p className="text-neutral-400 italic">We are ready to start building your future today.</p>
       </div>

       <div className="container mx-auto px-6 md:px-12 -mt-20 pb-24">
          <div className="bg-white shadow-2xl rounded-2xl overflow-hidden grid lg:grid-cols-2">
             <div className="p-12 bg-yellow-500 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-black mb-10 text-black">CONTACT INFO</h2>
                  <div className="space-y-8">
                     <div className="flex items-start gap-4 text-black">
                        <MapPin size={24} className="shrink-0" />
                        <div>
                           <p className="font-bold">Headquarters</p>
                           <p className="text-sm opacity-80">123 Builder Lane, Manhattan, NY 10001</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4 text-black">
                        <Phone size={24} className="shrink-0" />
                        <div>
                           <p className="font-bold">Call Us</p>
                           <p className="text-sm opacity-80">+1 (555) 000-1234 / +1 (555) 999-0000</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4 text-black">
                        <Mail size={24} className="shrink-0" />
                        <div>
                           <p className="font-bold">Email Us</p>
                           <p className="text-sm opacity-80">info@buildpro.com / sales@buildpro.com</p>
                        </div>
                     </div>
                  </div>
                </div>
                
                <div className="mt-20">
                   <p className="font-black text-black text-6xl opacity-10">BUILDPRO</p>
                </div>
             </div>

             <div className="p-12">
                <h2 className="text-3xl font-black mb-10 text-neutral-900 uppercase italic">Send a Message</h2>
                <form className="space-y-6">
                   <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Full Name</label>
                         <input type="text" className="w-full bg-neutral-100 border-0 p-4 outline-none focus:ring-2 ring-yellow-500 transition" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Email Address</label>
                         <input type="email" className="w-full bg-neutral-100 border-0 p-4 outline-none focus:ring-2 ring-yellow-500 transition" placeholder="john@example.com" />
                      </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Subject</label>
                      <input type="text" className="w-full bg-neutral-100 border-0 p-4 outline-none focus:ring-2 ring-yellow-500 transition" placeholder="Interested in Residential Build" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Your Message</label>
                      <textarea rows={6} className="w-full bg-neutral-100 border-0 p-4 outline-none focus:ring-2 ring-yellow-500 transition" placeholder="Tell us more about your project goals..." />
                   </div>
                   <button className="bg-black text-white px-10 py-4 font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-yellow-500 hover:text-black transition-all">
                      Send Inquiry <Send size={20} />
                   </button>
                </form>
             </div>
          </div>
       </div>
    </main>
  );
}

