import React from "react";
import { Headphones, ExternalLink, Lightbulb } from "lucide-react";
import AppShell from "@/components/AppShell";

const tips = [
  "Escucha un mismo vídeo varias veces: primero para captar la idea general y después para descubrir detalles.",
  "No pauses cada frase. Intenta comprender el contexto antes de buscar las palabras desconocidas.",
  "Activa los subtítulos en inglés después de la primera escucha y compara lo que entendiste.",
  "Anota expresiones útiles y repítelas en voz alta para conectar la escucha con tu pronunciación.",
  "Mantén una práctica breve y frecuente: diez o quince minutos al día crean progreso real."
];

export default function EasyEnglishConversation() {
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><section className="rounded-2xl border border-indigo-100 bg-white/70 p-7 shadow-sm dark:border-white/10 dark:bg-white/5"><p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">Watch · Listening</p><h1 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">Easy English Conversation</h1><p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">Mejorar la comprensión auditiva se consigue escuchando. No ocurre de inmediato: es un proceso en el que tu oído aprende poco a poco a reconocer sonidos, ritmo, vocabulario y expresiones dentro de conversaciones reales.</p><p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">Estos vídeos te permiten practicar inglés claro y cotidiano. Lo importante no es entender el 100 % desde el primer día, sino escuchar de forma constante y notar cómo tu comprensión crece con el tiempo.</p><a href="https://www.youtube.com/@englishlearnspeak/videos" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"><Headphones size={18}/> Ver vídeos de Easy English Conversation <ExternalLink size={16}/></a></section><section className="mt-10"><h2 className="flex items-center gap-2 font-heading text-2xl font-bold"><Lightbulb className="text-indigo-600" size={24}/> Cómo aprovechar los vídeos</h2><ol className="mt-5 space-y-3">{tips.map((tip, index) => <li key={tip} className="flex gap-4 rounded-xl border border-slate-200 bg-white/60 p-4 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">{index + 1}</span><p className="leading-7">{tip}</p></li>)}</ol></section></main></AppShell>;
}