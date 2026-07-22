import React from "react";
import { Music, ExternalLink, Lightbulb } from "lucide-react";
import AppShell from "@/components/AppShell";

const tips = [
  "Escucha la canción una primera vez sin leer la letra y trata de identificar palabras o ideas conocidas.",
  "Lee la letra en inglés durante una segunda escucha para relacionar pronunciación, ritmo y escritura.",
  "Repite fragmentos cortos y canta en voz alta para practicar sonidos, acento y entonación.",
  "Elige canciones que te gusten: disfrutar del material ayuda a mantener la práctica constante.",
  "Vuelve a las mismas canciones después de unos días y observa cuánto más entiendes sin apoyo."
];

export default function LearnEnglishWithSongs() {
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><section className="rounded-2xl border border-indigo-100 bg-white/70 p-7 shadow-sm dark:border-white/10 dark:bg-white/5"><p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">Watch · Listening</p><h1 className="mt-3 font-heading text-3xl font-bold tracking-tight sm:text-4xl">Learn English With Songs</h1><p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">Mejorar la comprensión auditiva se consigue escuchando. Es un proceso en el que la exposición repetida ayuda a tu oído a reconocer palabras, sonidos conectados y ritmo natural en inglés.</p><p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">Las canciones son una herramienta excelente porque hacen que el vocabulario y la pronunciación sean memorables. No intentes comprender cada palabra de inmediato: escucha, disfruta y vuelve a escuchar para que la comprensión aparezca progresivamente.</p><a href="https://www.youtube.com/@LearnEnglishWithSongsOfficial/videos" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"><Music size={18}/> Ver vídeos de Learn English With Songs <ExternalLink size={16}/></a></section><section className="mt-10"><h2 className="flex items-center gap-2 font-heading text-2xl font-bold"><Lightbulb className="text-indigo-600" size={24}/> Cómo aprender con canciones</h2><ol className="mt-5 space-y-3">{tips.map((tip, index) => <li key={tip} className="flex gap-4 rounded-xl border border-slate-200 bg-white/60 p-4 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700">{index + 1}</span><p className="leading-7">{tip}</p></li>)}</ol></section></main></AppShell>;
}