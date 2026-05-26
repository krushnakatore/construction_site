import React from 'react';
import { Mail, Phone, MapPin, Share2, Globe, MessageSquare, Info } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 text-white pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-black tracking-tighter">BUILD<span className="text-yellow-500">PRO</span></h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Constructing the future with precision, passion, and unparalleled expertise. Your vision, our build.
          </p>
          <div className="flex space-x-4">
            <Share2 size={20} className="text-neutral-400 hover:text-yellow-500 cursor-pointer transition" />
            <Globe size={20} className="text-neutral-400 hover:text-yellow-500 cursor-pointer transition" />
            <MessageSquare size={20} className="text-neutral-400 hover:text-yellow-500 cursor-pointer transition" />
            <Info size={20} className="text-neutral-400 hover:text-yellow-500 cursor-pointer transition" />
          </div>
        </div>
...existing code...
        <div>
           <h3 className="font-bold text-lg mb-6 text-yellow-500">Contact Us</h3>
           <ul className="space-y-4 text-neutral-400 text-sm">
             <li className="flex items-center gap-3"><MapPin size={18} className="text-yellow-500" /> 123 Builder Lane, NY 10001</li>
             <li className="flex items-center gap-3"><Phone size={18} className="text-yellow-500" /> +1 (555) 000-1234</li>
             <li className="flex items-center gap-3"><Mail size={18} className="text-yellow-500" /> info@buildpro.com</li>
           </ul>
        </div>
      </div>
...existing code...
      <div className="border-t border-neutral-800 mt-16 pt-8 text-center text-neutral-500 text-xs">
        <p>BUILDPRO &copy; {new Date().getFullYear()} - All Rights Reserved.</p>
      </div>
    </footer>
  );
}

