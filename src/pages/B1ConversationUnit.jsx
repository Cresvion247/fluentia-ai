import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppShell from "@/components/AppShell";
import TtsControls from "@/components/lessons/TtsControls";
import B1UnitOneDocument from "@/components/lessons/B1UnitOneDocument";

export default function B1ConversationUnit() {
  const unit = new URLSearchParams(window.location.search).get("unit") || window.location.pathname.split("/").pop()?.replace("unit-", "");
  const [selection, setSelection] = useState("");
  if (unit === "1") return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><div className="mb-6 rounded-xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><h1 className="mb-2 font-heading text-xl font-bold text-slate-900 dark:text-white">B1 Conversation · Unit 1</h1><p className="leading-7">Practica el presente simple, el presente continuo y los verbos de estado con preguntas y respuestas modelo. Selecciona texto para escucharlo, traducirlo o reformularlo.</p></div><div className="mb-6"><TtsControls text={selection} /></div><B1UnitOneDocument onSelect={setSelection} /><Link to="/b1-conversation" className="mt-8 inline-block font-medium text-indigo-600 hover:text-indigo-700">← Volver a las unidades</Link></main></AppShell>;
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><article className="rounded-xl border border-slate-200 bg-white/80 p-8 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><p className="mb-2 text-sm font-medium text-indigo-600">B1 Conversation</p><h1 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">Unit {unit}</h1><p className="mt-5 leading-7">El contenido de esta unidad se añadirá próximamente.</p><Link to="/b1-conversation" className="mt-8 inline-block font-medium text-indigo-600 hover:text-indigo-700">← Volver a las unidades</Link></article></main></AppShell>;
}