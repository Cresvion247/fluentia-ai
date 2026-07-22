import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return <section className="relative overflow-hidden px-5 pb-24 pt-20 text-center sm:pt-28"><div className="absolute inset-x-0 top-0 -z-10 mx-auto h-96 max-w-4xl rounded-full bg-indigo-300/30 blur-3xl dark:bg-cyan-500/10" />
    <div className="mx-auto max-w-4xl"><p className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm dark:border-indigo-400/20 dark:bg-white/5 dark:text-indigo-300"><Sparkles size={15}/> Inglés diseñado a tu medida</p>
      <h1 className="text-balance font-heading text-4xl font-bold tracking-tight sm:text-6xl">Aprende inglés con un curso diseñado exclusivamente para ti.</h1>
      <p className="mx-auto mt-6 max-w-3xl text-pretty text-lg leading-8 text-slate-600 dark:text-slate-300">Nuestro programa está especialmente diseñado para ayudar a los hispanohablantes a identificar los errores más comunes al aprender inglés y corregirlos mediante un aprendizaje totalmente personalizado.</p>
      <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Link to="/comenzar" className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:bg-indigo-700">Comenzar <ArrowRight size={18}/></Link><a href="#metodologia" className="rounded-xl border border-slate-200 bg-white/70 px-6 py-3 font-semibold transition hover:bg-white dark:border-white/15 dark:bg-white/5">Descubrir cómo funciona</a></div>
    </div></section>;
}