import Image from 'next/image';
import { servicesContent } from '../../data/content';

const iconMap = {
  home: 'Home',
  building: 'Building',
  factory: 'Factory',
};

export default function Services() {
  return (
    <main className="bg-slate-50">
      <section className="bg-slate-950 text-white py-24 px-6 text-center lg:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 font-bold mb-4">Services</p>
          <h1 className="text-5xl font-black leading-tight">{servicesContent.hero.heading}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">{servicesContent.hero.subheading}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          {servicesContent.services.map((service) => (
            <article key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-950">
                {iconMap[service.icon as keyof typeof iconMap]}
              </div>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-slate-600 leading-7">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20 px-6 text-center text-white lg:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black mb-6">{servicesContent.cta.heading}</h2>
          <a href={servicesContent.cta.href} className="inline-flex rounded-full bg-yellow-400 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-yellow-300">
            {servicesContent.cta.button}
          </a>
        </div>
      </section>
    </main>
  );
}
