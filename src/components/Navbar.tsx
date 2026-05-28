'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/content';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="rounded-2xl bg-yellow-400 p-3 text-slate-950 shadow-sm">H</div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Herambh</p>
            <p className="font-black text-lg">Construction</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-700 transition hover:text-slate-950">
              {link.label}
            </Link>
          ))}
          <Link href="/planner" className="rounded-full bg-slate-950 px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-slate-800">
            Planner
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-lg border border-slate-200 p-3 text-slate-700 transition hover:bg-slate-100"
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-700 transition hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/planner"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-slate-950 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-slate-800"
            >
              Planner
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
