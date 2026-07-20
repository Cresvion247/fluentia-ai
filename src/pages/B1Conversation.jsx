import React from "react";
import { Link } from "react-router-dom";
import AppShell from "@/components/AppShell";

const units = Array.from({ length: 25 }, (_, index) => index + 1);

export default function B1Conversation() {
  return <AppShell><main className="mx-auto max-w-5xl px-5 py-10"><div className="mb-8 rounded-xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><h1 className="mb-2 font-heading text-xl font-bold text-slate-900 dark:text-white">B1 Conversation</h1><p className="leading-7">Elige una unidad para acceder a sus actividades de conversación.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{units.map((unit) => <Link key={unit} to={`/b1-conversation/unit-${unit}`} className="rounded-xl border border-slate-200 bg-white p-5 font-heading font-semibold text-slate-800 shadow-sm transition hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-white"><span className="text-sm text-slate-500 dark:text-slate-400">B1 Conversation</span><span className="mt-2 block text-lg">Unit {unit}</span></Link>)}</div></main></AppShell>;
}