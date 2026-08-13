import React from "react";
import { Bot, Volume2 } from "lucide-react";
import AppShell from "@/components/AppShell";
import TokkerCoach from "@/components/tokker/TokkerCoach";

export default function Tokker() {
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><section className="rounded-3xl bg-gradient-to-br from-indigo-600 to-cyan-500 p-8 text-white shadow-xl shadow-indigo-500/20 sm:p-10"><div className="flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15"><Bot size={25}/></span><div><p className="text-sm font-bold uppercase tracking-[.18em] text-indigo-100">Tutor de IA</p><h1 className="font-heading text-4xl font-bold">Tokker</h1></div></div><p className="mt-5 max-w-2xl text-lg leading-8 text-indigo-50">Practica inglés con un profesor que escucha, corrige y te ayuda a construir respuestas más completas.</p><p className="mt-3 flex items-center gap-2 text-sm font-semibold text-white"><Volume2 size={17}/>Escribe o usa el micrófono; Tokker responderá por escrito y con voz.</p></section><section className="mt-8"><TokkerCoach /></section></main></AppShell>;
}