import React from "react";
import { Link } from "react-router-dom";
import AppShell from "@/components/AppShell";

const lessons = [
  ["Idioms 1", "Preguntas de conversación con expresiones idiomáticas.", "/idioms-expressions/idioms-1"],
  ["Idioms 2", "Idioms in Questions: práctica oral contextual.", "/idioms-expressions/idioms-2"],
  ["Idioms 3", "Próxima lección de expresiones idiomáticas.", "/idioms-expressions/idioms-3"]
];

export default function IdiomsExpressions() {
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><div className="mb-6 rounded-xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><h1 className="mb-2 font-heading text-xl font-bold text-slate-900 dark:text-white">Idioms and Expressions</h1><p className="leading-7">Elige una lección para practicar expresiones idiomáticas en contexto.</p></div><div className="grid gap-4 sm:grid-cols-3">{lessons.map(([title, description, path]) => <Link key={title} to={path} className="rounded-xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm transition hover:border-indigo-300 hover:text-indigo-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><h2 className="font-heading text-lg font-bold text-slate-900 dark:text-white">{title}</h2><p className="mt-2 text-sm leading-6">{description}</p></Link>)}</div></main></AppShell>;
}