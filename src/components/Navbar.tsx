import Link from 'next/link';
import { LayoutGrid, Hammer } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-5 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <Link href="/" className="flex items-center gap-2">
        <div className="bg-yellow-500 p-1.5 rounded-lg">
          <Hammer size={24} className="text-black" />
        </div>
        <h1 className="text-2xl font-black tracking-tighter text-black">BUILD<span className="text-yellow-500">PRO</span></h1>
      </Link>
      
      <div className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-wider text-gray-700">
        <Link href="/" className="hover:text-yellow-500 transition-colors">Home</Link>
        <Link href="/projects" className="hover:text-yellow-500 transition-colors">Projects</Link>
        <Link href="/services" className="hover:text-yellow-500 transition-colors">Services</Link>
        <Link href="/customize" className="hover:text-yellow-500 transition-colors">Customize</Link>
        <Link href="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
        <Link href="/planner" className="bg-black text-white hover:bg-yellow-500 hover:text-black px-6 py-2.5 rounded-sm transition-all duration-300">
          Build Planner
        </Link>
      </div>

      <div className="md:hidden text-black">
         <LayoutGrid size={28} />
      </div>
    </nav>
  );
}
