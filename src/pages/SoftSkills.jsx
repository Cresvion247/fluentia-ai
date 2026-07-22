import React, { useState } from "react";
import AppShell from "@/components/AppShell";
import TtsControls from "@/components/lessons/TtsControls";
import SoftSkillsDocument from "@/components/lessons/SoftSkillsDocument";

export default function SoftSkills() {
  const [selection, setSelection] = useState("");
  return <AppShell><main className="mx-auto max-w-6xl px-5 py-10"><div className="mb-6 rounded-xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><h1 className="mb-2 font-heading text-xl font-bold text-slate-900 dark:text-white">Soft Skills</h1><p className="leading-7">Practica preguntas de conversación profesional. Selecciona texto para escucharlo, traducirlo o reformularlo.</p></div><div className="mb-6"><TtsControls text={selection} /></div><SoftSkillsDocument onSelect={setSelection} /></main></AppShell>;
}