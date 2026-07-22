import React, { useState } from "react";
import AppShell from "@/components/AppShell";
import TtsControls from "@/components/lessons/TtsControls";
import DocxTableDocument from "@/components/lessons/DocxTableDocument";

const sourceUrl = "https://media.base44.com/files/public/6a5d04483fe35abf39399c85/9f1c46a5d_infinitiveofpurpose.docx";

export default function InfinitiveOfPurpose() {
  const [selection, setSelection] = useState("");
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><div className="mb-6 rounded-xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><h1 className="mb-2 font-heading text-xl font-bold text-slate-900 dark:text-white">Infinitive of Purpose</h1><p className="leading-7">Practica el infinitivo de propósito en contexto. Selecciona cualquier fragmento para escucharlo, traducirlo o reformularlo.</p></div><div className="mb-6"><TtsControls text={selection} /></div><DocxTableDocument sourceUrl={sourceUrl} onSelect={setSelection} /></main></AppShell>;
}