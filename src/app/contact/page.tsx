import { contactContent } from '../../data/content';

export default function Contact() {
  return (
    <main className="bg-slate-50">
      <section className="bg-slate-950 py-24 px-6 text-center text-white lg:px-10">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-5xl font-black leading-tight">{contactContent.hero.heading}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300">{contactContent.hero.body}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-10 shadow-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 font-bold mb-6">Contact info</p>
            <div className="space-y-6">
              {contactContent.details.map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-200 p-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500 font-semibold">{item.label}</p>
                  <p className="mt-3 text-base font-bold text-slate-900">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-10 text-white shadow-xl">
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 font-bold mb-6">Send a request</p>
            <form className="space-y-6">
              <label className="block">
                <span className="text-sm text-slate-300">{contactContent.form.name}</span>
                <input type="text" className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-5 py-4 text-white outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20" />
              </label>
              <label className="block">
                <span className="text-sm text-slate-300">{contactContent.form.email}</span>
                <input type="email" className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-5 py-4 text-white outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20" />
              </label>
              <label className="block">
                <span className="text-sm text-slate-300">{contactContent.form.subject}</span>
                <input type="text" className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-5 py-4 text-white outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20" />
              </label>
              <label className="block">
                <span className="text-sm text-slate-300">{contactContent.form.message}</span>
                <textarea rows={6} className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-5 py-4 text-white outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20"></textarea>
              </label>
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-yellow-400 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-950 transition hover:bg-yellow-300">
                {contactContent.form.button}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
