import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppShell from "@/components/AppShell";
import TtsControls from "@/components/lessons/TtsControls";
import IdiomsQuestionsDocument from "@/components/lessons/IdiomsQuestionsDocument";
import { idiomsInQuestions } from "@/lib/idioms-in-questions-data";

export default function IdiomsTwo() {
  const [selection, setSelection] = useState("");
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><div className="mb-6 rounded-xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><h1 className="mb-2 font-heading text-xl font-bold text-slate-900 dark:text-white">Idioms 2 · Idioms in Questions</h1><p className="leading-7">Responde preguntas de conversación y practica expresiones idiomáticas en contexto. Selecciona texto para escucharlo, traducirlo o reformularlo.</p></div><div className="mb-6"><TtsControls text={selection} /></div><IdiomsQuestionsDocument questions={idiomsInQuestions} onSelect={setSelection} /><Link to="/idioms-expressions" className="mt-8 inline-block font-medium text-indigo-600 hover:text-indigo-700">← Volver a Idioms and Expressions</Link></main></AppShell>;
}