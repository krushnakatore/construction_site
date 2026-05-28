import Image from 'next/image';
import Link from 'next/link';
import { projectsContent } from '../../data/content';

export default function Projects() {
  return (
    <main className="bg-slate-50">
      <section className="bg-slate-950 text-white py-24 px-6 text-center lg:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 font-bold mb-4">Projects</p>
          <h1 className="text-5xl font-black leading-tight">{projectsContent.hero.heading}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">{projectsContent.hero.body}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {projectsContent.items.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-72">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" className="object-cover" />
              </div>
              <div className="p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-yellow-400 font-bold mb-3">{project.category}</p>
                <h2 className="text-2xl font-black mb-4">{project.title}</h2>
                <p className="text-slate-600 leading-7 mb-6">{project.description}</p>
                <Link href="/contact" className="text-sm font-bold uppercase tracking-[0.2em] text-slate-950 transition hover:text-yellow-500">
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-yellow-400 py-20 px-6 text-center text-slate-950 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black mb-6">{projectsContent.cta.heading}</h2>
          <Link href={projectsContent.cta.href} className="inline-flex rounded-full bg-slate-950 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-slate-800">
            {projectsContent.cta.button}
          </Link>
        </div>
      </section>
    </main>
  );
}
