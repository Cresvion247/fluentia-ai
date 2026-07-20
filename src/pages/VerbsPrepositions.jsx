import React, { useState } from "react";
import AppShell from "@/components/AppShell";
import TtsControls from "@/components/lessons/TtsControls";
import VerbsPrepositionsDocument from "@/components/lessons/VerbsPrepositionsDocument";

export default function VerbsPrepositions() {
  const [selection, setSelection] = useState("");
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><div className="mb-6 rounded-xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><h1 className="mb-2 font-heading text-xl font-bold text-slate-900 dark:text-white">Verbs + Prepositions</h1><p className="leading-7">Los verbos y las preposiciones forman combinaciones fijas en inglés, como <em>agree with</em>, <em>depend on</em> o <em>interested in</em>. Esta lista reúne las más útiles para que las memorices mediante preguntas reales.</p><p className="mt-3 leading-7">La forma más divertida e interactiva de aprenderlas es usarlas en tus respuestas tantas veces como puedas. Vuelve a ver la lista a intervalos regulares: esa repetición espaciada ayuda a que el vocabulario pase a tu memoria a largo plazo. Selecciona texto para escucharlo, traducirlo o reformularlo.</p></div><div className="mb-6"><TtsControls text={selection} /></div><VerbsPrepositionsDocument onSelect={setSelection} /></main></AppShell>;
}