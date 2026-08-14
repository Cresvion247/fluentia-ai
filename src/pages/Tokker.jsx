import React from "react";
import { ArrowUpRight, MessageCircleMore } from "lucide-react";
import AppShell from "@/components/AppShell";

export default function Tokker() {
  return <AppShell>
    <main className="px-5 pb-4">
      <section className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-indigo-100 bg-white/70 p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo-600 text-white"><MessageCircleMore size={22}/></span>
            <div><p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-600">Herramientas</p><h1 className="mt-1 font-heading text-3xl font-bold tracking-tight sm:text-4xl">Tokker</h1></div>
          </div>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">Tokker es tu compañero de conversación con IA para practicar idiomas. Mantén diálogos naturales, gana confianza al hablar y recibe apoyo adaptado a tu aprendizaje.</p>
        </div>
        <div className="mt-6 rounded-3xl border border-indigo-100 bg-white/70 p-8 text-center shadow-sm dark:border-white/10 dark:bg-white/5">
          <p className="text-lg font-bold">¿Listo para practicar?</p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Abre Tokker en una nueva pestaña para comenzar tu conversación.</p>
          <a href="https://tokker-fluent-flow.base44.app" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:bg-indigo-700">Abrir Tokker <ArrowUpRight size={18}/></a>
        </div>
      </section>
    </main>
  </AppShell>;
}