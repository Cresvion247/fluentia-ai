import React from "react";
import { Link } from "react-router-dom";
import AppShell from "@/components/AppShell";

const lessons = [
  ["Conditionals 1, 2 and 3", "Practica los tres tipos de condicionales.", "/inversion-conditionals/conditionals-1-2-3"],
  ["Inversion With Conditionals", "Practica inversiones con estructuras condicionales.", "/inversion-conditionals/inversion-with-conditionals"]
];

export default function InversionConditionals() {
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><div className="mb-6 rounded-xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><h1 className="mb-2 font-heading text-xl font-bold text-slate-900 dark:text-white">Conditionals</h1><p className="leading-7">Elige una lección para practicar condicionales e inversiones.</p></div><div className="grid gap-4 sm:grid-cols-2">{lessons.map(([title, description, path]) => <Link key={path} to={path} className="rounded-xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm transition hover:border-indigo-300 hover:text-indigo-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><h2 className="font-heading text-lg font-bold text-slate-900 dark:text-white">{title}</h2><p className="mt-2 text-sm leading-6">{description}</p></Link>)}</div></main></AppShell>;
}