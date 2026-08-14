import React from "react";
import { MessageCircleMore } from "lucide-react";
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
        <iframe title="Tokker, compañero de conversación con IA" src="https://tokker-fluent-flow.base44.app" className="mt-6 h-[78vh] min-h-[600px] w-full rounded-3xl border border-indigo-100 bg-white shadow-sm dark:border-white/10" />
      </section>
    </main>
  </AppShell>;
}