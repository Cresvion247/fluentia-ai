import React from "react";
import { ExternalLink, Newspaper } from "lucide-react";
import AppShell from "@/components/AppShell";

export default function BreakingNewsEnglish() {
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5"><div className="mb-5 inline-flex rounded-xl bg-indigo-100 p-3 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300"><Newspaper size={28}/></div><h1 className="font-heading text-3xl font-bold tracking-tight">Breaking News English</h1><p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">Practica inglés con miles de lecciones gratuitas basadas en noticias actuales, organizadas en siete niveles e incluyendo lectura, audio y actividades.</p><a href="https://breakingnewsenglish.com/" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-700">Visitar Breaking News English <ExternalLink size={18}/></a></section></main></AppShell>;
}