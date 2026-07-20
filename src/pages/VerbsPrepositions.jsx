import React, { useState } from "react";
import AppShell from "@/components/AppShell";
import TtsControls from "@/components/lessons/TtsControls";
import VerbsPrepositionsDocument from "@/components/lessons/VerbsPrepositionsDocument";

export default function VerbsPrepositions() {
  const [selection, setSelection] = useState("");
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><div className="mb-6 rounded-xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><h1 className="mb-2 font-heading text-xl font-bold text-slate-900 dark:text-white">Verbs + Prepositions</h1><p className="leading-7">Practica las combinaciones de verbos y preposiciones con preguntas organizadas por cada preposición. Selecciona texto para escucharlo, traducirlo o reformularlo.</p></div><div className="mb-6"><TtsControls text={selection} /></div><VerbsPrepositionsDocument onSelect={setSelection} /></main></AppShell>;
}