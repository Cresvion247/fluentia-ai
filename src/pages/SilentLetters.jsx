import React, { useState } from "react";
import AppShell from "@/components/AppShell";
import SilentLettersDocument from "@/components/lessons/SilentLettersDocument";
import TtsControls from "@/components/lessons/TtsControls";

export default function SilentLetters() {
  const [selection, setSelection] = useState("");
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><div className="mb-6 rounded-xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><h1 className="mb-2 font-heading text-xl font-bold text-slate-900 dark:text-white">Letras mudas</h1><p className="leading-7">Estas son algunas de las palabras más frecuentes que contienen letras mudas. La lista no es completamente exhaustiva, pero te ofrece las herramientas y referencias adecuadas para comprender y aplicar este concepto correctamente.</p></div><div className="mb-6"><TtsControls text={selection} /></div><SilentLettersDocument onSelect={setSelection} /></main></AppShell>;
}