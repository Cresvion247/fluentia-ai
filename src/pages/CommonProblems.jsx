import React, { useState } from "react";
import AppShell from "@/components/AppShell";
import CommonProblemsDocument from "@/components/lessons/CommonProblemsDocument";
import TtsControls from "@/components/lessons/TtsControls";

export default function CommonProblems() {
  const [selection, setSelection] = useState("");
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><div className="mb-6 rounded-xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><h1 className="mb-2 font-heading text-xl font-bold text-slate-900 dark:text-white">Common Problems</h1><p className="leading-7">Estos son algunos de los problemas gramaticales y estructurales más habituales que tienen los hispanohablantes al aprender inglés. Dominar estos puntos te dará una base sólida para iniciar un efecto dominó positivo y te ayudará a intuir correctamente nuevas estructuras cuando las escuches o las leas.</p></div><div className="mb-6"><TtsControls text={selection} /></div><CommonProblemsDocument onSelect={setSelection} /></main></AppShell>;
}