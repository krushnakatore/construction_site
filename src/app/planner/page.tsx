'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Factory, Home, ShoppingBag } from 'lucide-react';
import { plannerContent } from '../../data/content';

const iconMap = {
  Residential: <Home size={28} className="text-slate-950" />,
  Commercial: <ShoppingBag size={28} className="text-slate-950" />,
  Industrial: <Factory size={28} className="text-slate-950" />,
};

export default function Planner() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState('Residential');
  const [projectScale, setProjectScale] = useState('Medium');

  const summaryText = plannerContent.summaryTemplate
    .replace('{type}', projectType)
    .replace('{scale}', projectScale);

  return (
    <main className="bg-slate-50 min-h-screen py-20 px-6 text-slate-900">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-white p-8 shadow-2xl md:p-14">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-yellow-500 font-bold">{plannerContent.pageTitle}</p>
            <h1 className="mt-4 text-4xl font-black">Plan your next build</h1>
            <p className="mt-4 max-w-2xl text-slate-600 leading-7">{plannerContent.intro}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.35em] text-slate-500">
            {plannerContent?.steps.map((label, index) => (
              <span key={label} className={index + 1 === step ? 'font-bold text-slate-900' : ''}>
                {index + 1}. {label}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
          {step === 1 && (
            <section className="space-y-8">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-yellow-500 font-bold mb-3">Step 1</p>
                <h2 className="text-3xl font-black">Choose a project type</h2>
                <p className="mt-3 text-slate-600 leading-7">{plannerContent.intro}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {plannerContent.projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`group rounded-[1.5rem] border px-6 py-10 text-left transition ${projectType === type ? 'border-yellow-500 bg-yellow-50 shadow-lg' : 'border-slate-200 bg-white hover:border-slate-400'}`}
                  >
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-200">
                      {iconMap[type as keyof typeof iconMap]}
                    </div>
                    <h3 className="text-xl font-black mb-2">{type}</h3>
                    <p className="text-slate-600 leading-6">Select the project type that matches your build.</p>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-slate-800"
              >
                Continue <ArrowRight size={18} />
              </button>
            </section>
          )}

          {step === 2 && (
            <section className="space-y-8">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 hover:text-slate-900"
              >
                <ArrowLeft size={18} /> Back
              </button>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-yellow-500 font-bold mb-3">Step 2</p>
                <h2 className="text-3xl font-black">Select project scale</h2>
                <p className="mt-3 text-slate-600 leading-7">Define the scale of your project before reviewing the plan.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {plannerContent.scales.map((scale) => (
                  <button
                    key={scale}
                    type="button"
                    onClick={() => setProjectScale(scale)}
                    className={`rounded-[1.5rem] border px-6 py-10 text-center font-black uppercase tracking-[0.2em] transition ${projectScale === scale ? 'border-yellow-500 bg-yellow-50 shadow-lg' : 'border-slate-200 bg-white hover:border-slate-400'}`}
                  >
                    {scale}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-slate-800"
              >
                Review plan <ArrowRight size={18} />
              </button>
            </section>
          )}

          {step === 3 && (
            <section className="space-y-8 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400">
                <Check size={32} className="text-slate-950" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-yellow-500 font-bold mb-3">Step 3</p>
                <h2 className="text-3xl font-black">Your plan summary</h2>
                <p className="mt-4 text-slate-600 leading-7">{summaryText}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Project type</p>
                  <p className="mt-3 text-2xl font-black">{projectType}</p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8">
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Scale</p>
                  <p className="mt-3 text-2xl font-black">{projectScale}</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:justify-center">
                <button className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-slate-800">
                  {plannerContent.submitButton}
                </button>
                <button onClick={() => setStep(1)} className="inline-flex items-center justify-center rounded-full border border-slate-300 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-slate-950 transition hover:border-slate-500">
                  {plannerContent.restartButton}
                </button>
              </div>
            </section>
          )}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-5xl text-center text-sm uppercase tracking-[0.35em] text-slate-500">
        <a href="/" className="hover:text-slate-900">{plannerContent.backLink}</a>
      </div>
    </main>
  );
}
