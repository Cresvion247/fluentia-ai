import React from "react";
import { Radio, ExternalLink, Lightbulb } from "lucide-react";
import AppShell from "@/components/AppShell";

const tips = [
  "Escucha primero sin apoyo visual para entrenar tu capacidad de reconocer palabras y el sentido general.",
  "Utiliza los subtítulos o transcripciones en una segunda escucha para aclarar lo que no entendiste.",
  "Presta atención a la pronunciación de expresiones completas, no solo a palabras aisladas.",
  "Repite frases breves en voz alta para mejorar tu oído, ritmo y confianza al hablar.",
  "Crea una rutina frecuente: escuchar pocos minutos cada día es más eficaz que una sesión larga ocasional."
];

export default function BbcLearningEnglishWithSongs() {
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><section className="rounded-2xl border border-indigo-100 bg-white/70 p-7 shadow-sm dark:border-white/10 dark:bg-white/5"><p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">Watch · Listening</p><h1 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">BBC Learning English</h1><p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">Mejorar la comprensión auditiva se consigue escuchando. Es un proceso en el que tu oído se acostumbra gradualmente a los sonidos, el ritmo y las formas naturales de expresarse en inglés.</p><p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">Los vídeos de BBC Learning English ofrecen material claro y útil para practicar de forma regular. No busques una comprensión perfecta desde el primer intento: escucha con atención, vuelve a escuchar y permite que tu comprensión mejore paso a paso.</p><a href="https://www.youtube.com/@bbclearningenglish" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"><Radio size={18}/> Ver BBC Learning English <ExternalLink size={16}/></a></section><section className="mt-10"><h2 className="flex items-center gap-2 font-heading text-2xl font-bold"><Lightbulb className="text-indigo-600" size={24}/> Cómo aprovechar los vídeos</h2><ol className="mt-5 space-y-3">{tips.map((tip, index) => <li key={tip} className="flex gap-4 rounded-xl border border-slate-200 bg-white/60 p-4 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">{index + 1}</span><p className="leading-7">{tip}</p></li>)}</ol></section></main></AppShell>;
}