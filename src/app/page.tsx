import Image from 'next/image';
import Link from 'next/link';
import { homeContent } from '../data/content';

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={homeContent.hero.image}
            alt="Construction site"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-28 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 font-bold mb-4">{homeContent.hero.label}</p>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-8">{homeContent.hero.title}</h1>
            <p className="text-slate-200 text-lg md:text-xl leading-8 mb-10">{homeContent.hero.description}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/projects" className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-yellow-300">
                View Projects
              </Link>
              <Link href="/planner" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/20">
                Start Planner
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-500 font-semibold">Our services</p>
            <h2 className="mt-4 text-4xl font-black">Modern construction built for every scale.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {homeContent.features.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-7">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white py-20 px-6 lg:px-10">
        <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 font-bold mb-4">Featured projects</p>
            <h2 className="text-4xl font-black leading-tight">Projects that define our reputation.</h2>
          </div>
          <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
            {homeContent.projects.map((project) => (
              <article key={project.title} className="rounded-3xl overflow-hidden bg-slate-900 shadow-2xl">
                <div className="relative h-72">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="p-8">
                  <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 font-semibold mb-3">{project.category}</p>
                  <h3 className="text-2xl font-black mb-3">{project.title}</h3>
                  <p className="text-slate-300 leading-7">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
