import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppShell from "@/components/AppShell";
import InversionConditionalsDocument from "@/components/lessons/InversionConditionalsDocument";
import TtsControls from "@/components/lessons/TtsControls";

export default function InversionConditionals() {
  const [selection, setSelection] = useState("");
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><div className="mb-6 rounded-xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><h1 className="mb-2 font-heading text-xl font-bold text-slate-900 dark:text-white">Inversions with the Conditionals</h1><p className="leading-7">Practica las inversiones con los condicionales cero, primero, segundo y tercero. Selecciona cualquier fragmento para escucharlo, traducirlo o reformularlo.</p></div><div className="mb-6"><TtsControls text={selection} /></div><InversionConditionalsDocument onSelect={setSelection} /><Link to="/" className="mt-8 inline-block font-medium text-indigo-600 hover:text-indigo-700">← Volver al inicio</Link></main></AppShell>;
}