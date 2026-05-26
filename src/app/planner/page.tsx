'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, Home, ShoppingBag, Building2, Factory } from 'lucide-react';
import Link from 'next/link';

export default function Planner() {
  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState({ type: '', size: '', budget: '' });

  const types = [
    { name: 'Home', icon: <Home size={24} /> },
    { name: 'Shop', icon: <ShoppingBag size={24} /> },
    { name: 'Building', icon: <Building2 size={24} /> },
    { name: 'Factory', icon: <Factory size={24} /> },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden border border-neutral-100">
        <div className="bg-black p-10 text-white flex justify-between items-center">
           <div>
              <h2 className="text-3xl font-black italic uppercase italic tracking-tighter">Project Builder</h2>
              <p className="text-neutral-400 text-sm italic">Step {step} of 3: {step === 1 ? 'Configuration' : step === 2 ? 'Scale' : 'Summary'}</p>
           </div>
           <div className="flex gap-2">
              {[1, 2, 3].map(s => (
                <div key={s} className={`h-2 w-12 rounded-full transition-all duration-500 ${step >= s ? 'bg-yellow-500' : 'bg-neutral-800'}`}></div>
              ))}
           </div>
        </div>

        <div className="p-10 md:p-16 min-h-[500px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <h3 className="text-4xl font-black text-neutral-900 italic uppercase italic">Select Project Type</h3>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {types.map(t => (
                    <button 
                      key={t.name} 
                      onClick={() => { setPlan({...plan, type: t.name}); setStep(2); }} 
                      className={`group p-8 border-2 rounded-2xl flex flex-col items-center gap-4 transition-all duration-300 ${plan.type === t.name ? 'border-yellow-500 bg-yellow-50 shadow-xl' : 'border-neutral-100 hover:border-yellow-200'}`}
                    >
                      <div className={`p-4 rounded-full transition ${plan.type === t.name ? 'bg-yellow-500 text-black' : 'bg-neutral-100 text-neutral-400 group-hover:bg-neutral-200'}`}>
                        {t.icon}
                      </div>
                      <span className="font-bold text-neutral-800 tracking-tight">{t.name}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 mb-4 cursor-pointer text-neutral-400 hover:text-black transition" onClick={() => setStep(1)}>
                   <ArrowLeft size={20} /> <span className="text-sm font-bold uppercase italic tracking-widest">Back to type</span>
                </div>
                <h3 className="text-4xl font-black text-neutral-900 italic uppercase italic">Project Scale (sq ft)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {['1000 - 2500', '2500 - 5000', '5000+'].map(s => (
                    <button 
                      key={s} 
                      onClick={() => { setPlan({...plan, size: s}); setStep(3); }} 
                      className={`p-10 border-2 rounded-2xl text-center font-black text-xl transition-all ${plan.size === s ? 'border-yellow-500 bg-yellow-50' : 'border-neutral-100 hover:border-yellow-500'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-10"
              >
                <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-yellow-200">
                  <Check size={48} className="text-black" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-4xl font-black text-neutral-900 italic uppercase italic">Configured Ready</h3>
                  <p className="text-neutral-500 italic">Your custom proposal for a <span className="text-black font-bold uppercase italic underline decoration-yellow-500 underline-offset-4">{plan.size} sq ft {plan.type}</span> is being generated.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto p-6 bg-neutral-50 rounded-2xl border border-neutral-100">
                   <div className="text-left">
                      <p className="text-xs font-bold text-neutral-400 uppercase italic">Category</p>
                      <p className="font-black text-neutral-900 uppercase italic">{plan.type}</p>
                   </div>
                   <div className="text-left">
                      <p className="text-xs font-bold text-neutral-400 uppercase italic">Scale</p>
                      <p className="font-black text-neutral-900 uppercase italic">{plan.size} sq ft</p>
                   </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center pt-6">
                   <button className="bg-black text-white px-12 py-5 font-black uppercase italic tracking-widest hover:bg-yellow-500 hover:text-black transition-all shadow-xl shadow-neutral-200 flex items-center justify-center gap-3">
                      Submit for Quote <ArrowRight size={20} />
                   </button>
                   <button onClick={() => setStep(1)} className="border-2 border-neutral-200 text-neutral-400 px-10 py-5 font-bold uppercase italic tracking-widest hover:border-black hover:text-black transition">
                      Start Over
                   </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto mt-12 text-center">
         <Link href="/" className="text-neutral-400 hover:text-black transition font-bold uppercase italic text-xs tracking-widest border-b border-transparent hover:border-black">
           Back to home
         </Link>
      </div>
    </div>
  );
}
