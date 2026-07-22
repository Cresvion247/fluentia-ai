import React from "react";
import { Link } from "react-router-dom";
import AppShell from "@/components/AppShell";

const lessons = [
  ["Business 1", "Conversación sobre negocios, negociaciones, entrevistas y trabajo internacional.", "/business/business-1"],
  ["Business 2", "Próxima lección de conversación profesional.", "/business/business-2"],
  ["Business 3", "Próxima lección de conversación profesional.", "/business/business-3"]
];

export default function Business() {
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><div className="mb-8"><p className="text-sm font-semibold text-indigo-600">Business English</p><h1 className="mt-2 font-heading text-3xl font-bold text-slate-900 dark:text-white">Business</h1><p className="mt-3 text-slate-600 dark:text-slate-300">Mejora tu fluidez con temas y preguntas para contextos profesionales.</p></div><div className="grid gap-5 md:grid-cols-3">{lessons.map(([title, description, path]) => <Link key={title} to={path} className="rounded-xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:border-indigo-300 hover:shadow-md dark:border-white/10 dark:bg-white/5"><h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">{title}</h2><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p><span className="mt-5 inline-block text-sm font-semibold text-indigo-600">Abrir lección →</span></Link>)}</div></main></AppShell>;
}