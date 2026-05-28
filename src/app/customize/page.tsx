import Link from 'next/link';
import { customizeContent } from '../../data/content';

export default function Customize() {
  return (
    <main className="bg-slate-50">
      <section className="bg-slate-950 py-24 px-6 text-center text-white lg:px-10">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl font-black leading-tight">{customizeContent.hero.heading}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">{customizeContent.hero.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-3">
          {customizeContent.options.map((option) => (
            <Link
              key={option.title}
              href={option.href}
              className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={option.image} alt={option.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-black mb-3">{option.title}</h2>
                <p className="text-slate-600 leading-7">{option.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
