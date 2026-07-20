import React, { useState } from "react";
import AppShell from "@/components/AppShell";
import PhrasalVerbsDocument from "@/components/lessons/PhrasalVerbsDocument";
import TtsControls from "@/components/lessons/TtsControls";

export default function PhrasalVerbs() {
  const [selection, setSelection] = useState("");
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><div className="mb-6 rounded-xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><h1 className="mb-2 font-heading text-xl font-bold text-slate-900 dark:text-white">Phrasal Verbs</h1><p className="leading-7">Practica los <em>phrasal verbs</em> mediante preguntas basadas en historias. Selecciona cualquier fragmento del documento para escucharlo, traducirlo o reformularlo.</p></div><div className="mb-6"><TtsControls text={selection} /></div><PhrasalVerbsDocument onSelect={setSelection} /></main></AppShell>;
}