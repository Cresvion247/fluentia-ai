import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppShell from "@/components/AppShell";
import AffixesDocument from "@/components/lessons/AffixesDocument";
import TtsControls from "@/components/lessons/TtsControls";

export default function Affixes() {
  const [selection, setSelection] = useState("");
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><div className="mb-6 rounded-xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><h1 className="mb-2 font-heading text-xl font-bold text-slate-900 dark:text-white">Affixes</h1><p className="leading-7">Repasa prefijos y sufijos frecuentes con sus significados y ejemplos. Selecciona cualquier fragmento para escucharlo, traducirlo o reformularlo.</p></div><div className="mb-6"><TtsControls text={selection} /></div><AffixesDocument onSelect={setSelection} /><Link to="/" className="mt-8 inline-block font-medium text-indigo-600 hover:text-indigo-700">← Volver al inicio</Link></main></AppShell>;
}