import React from "react";
import { CheckCircle2 } from "lucide-react";

const items = ["Profesor cualificado con Cambridge CELTA.", "No existe un curso estándar: construimos el tuyo juntos.", "Revisamos tus avances y los errores que más se repiten.", "El contenido se orienta a tus metas personales, profesionales o académicas."];

export default function Methodology() {
 return <section id="metodologia" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-center"><div><p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">Nuestra metodología</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">La enseñanza se adapta a ti, no al revés.</h2><p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">Cada decisión se toma contigo y con tu profesor. El curso evoluciona según tu progreso para que cada lección responda a algo que realmente necesitas comunicar.</p></div><div className="rounded-3xl border border-white/70 bg-white/70 p-6 shadow-xl shadow-indigo-950/5 backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8"><div className="space-y-5">{items.map(item=><div key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-cyan-600" size={20}/><p className="font-medium leading-6">{item}</p></div>)}</div></div></section>;
}