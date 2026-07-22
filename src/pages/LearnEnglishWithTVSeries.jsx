import React from "react";
import { Clapperboard, ExternalLink, Lightbulb } from "lucide-react";
import AppShell from "@/components/AppShell";

const tips = [
  "Mira primero un fragmento sin subtítulos para entrenar tu oído y captar el contexto visual.",
  "Vuelve a verlo con subtítulos en inglés para relacionar los sonidos con la escritura.",
  "Elige escenas cortas y repítelas hasta reconocer frases completas sin leer.",
  "Imita la entonación, el ritmo y las expresiones de los personajes en voz alta.",
  "Revisa con frecuencia tus escenas favoritas: la repetición convierte lo nuevo en comprensión automática."
];

export default function LearnEnglishWithTVSeries() {
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><section className="rounded-2xl border border-indigo-100 bg-white/70 p-7 shadow-sm dark:border-white/10 dark:bg-white/5"><p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">Watch · Listening</p><h1 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">Learn English With TV Series</h1><p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">Mejorar la comprensión auditiva se consigue escuchando. Es un proceso: tu oído necesita exposición constante para identificar sonidos, conectarlos con palabras y comprender conversaciones naturales cada vez con mayor facilidad.</p><p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">Las series son una forma entretenida de practicar porque combinan diálogo, contexto, emociones y lenguaje cotidiano. No necesitas entenderlo todo al principio; la constancia y la repetición harán que tu comprensión avance.</p><a href="https://www.youtube.com/@LearnEnglishWithTVSeries" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"><Clapperboard size={18}/> Ver Learn English With TV Series <ExternalLink size={16}/></a></section><section className="mt-10"><h2 className="flex items-center gap-2 font-heading text-2xl font-bold"><Lightbulb className="text-indigo-600" size={24}/> Cómo aprender con series</h2><ol className="mt-5 space-y-3">{tips.map((tip, index) => <li key={tip} className="flex gap-4 rounded-xl border border-slate-200 bg-white/60 p-4 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">{index + 1}</span><p className="leading-7">{tip}</p></li>)}</ol></section></main></AppShell>;
}