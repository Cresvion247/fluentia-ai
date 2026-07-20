import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppShell from "@/components/AppShell";
import TtsControls from "@/components/lessons/TtsControls";
import B2UnitOneDocument from "@/components/lessons/B2UnitOneDocument";
import B2UnitTwoDocument from "@/components/lessons/B2UnitTwoDocument";
import B2UnitThreeDocument from "@/components/lessons/B2UnitThreeDocument";
import B2UnitFourDocument from "@/components/lessons/B2UnitFourDocument";
import B2UnitFiveDocument from "@/components/lessons/B2UnitFiveDocument";
import B2UnitSixDocument from "@/components/lessons/B2UnitSixDocument";
import B2UnitSevenDocument from "@/components/lessons/B2UnitSevenDocument";
import B2UnitEightDocument from "@/components/lessons/B2UnitEightDocument";

export default function B2ConversationUnit() {
  const unit = window.location.pathname.split("/").pop()?.replace("unit-", "");
  const [selection, setSelection] = useState("");
  const content = unit === "1" ? <B2UnitOneDocument onSelect={setSelection} /> : unit === "2" ? <B2UnitTwoDocument onSelect={setSelection} /> : unit === "3" ? <B2UnitThreeDocument onSelect={setSelection} /> : unit === "4" ? <B2UnitFourDocument onSelect={setSelection} /> : unit === "5" ? <B2UnitFiveDocument onSelect={setSelection} /> : unit === "6" ? <B2UnitSixDocument onSelect={setSelection} /> : unit === "7" ? <B2UnitSevenDocument onSelect={setSelection} /> : unit === "8" ? <B2UnitEightDocument onSelect={setSelection} /> : null;
  if (content) return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><div className="mb-6 rounded-xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><h1 className="mb-2 font-heading text-xl font-bold text-slate-900 dark:text-white">B2 Conversation · Unit {unit}</h1><p className="leading-7">Practica vocabulario de viajes, desplazamientos y experiencias turísticas con preguntas y respuestas modelo. Selecciona texto para escucharlo, traducirlo o reformularlo.</p></div><div className="mb-6"><TtsControls text={selection} /></div>{content}<Link to="/b2-conversation" className="mt-8 inline-block font-medium text-indigo-600 hover:text-indigo-700">← Volver a las unidades</Link></main></AppShell>;
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><article className="rounded-xl border border-slate-200 bg-white/80 p-8 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><p className="mb-2 text-sm font-medium text-indigo-600">B2 Conversation</p><h1 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">Unit {unit}</h1><p className="mt-5 leading-7">El contenido de esta unidad se añadirá próximamente.</p><Link to="/b2-conversation" className="mt-8 inline-block font-medium text-indigo-600 hover:text-indigo-700">← Volver a las unidades</Link></article></main></AppShell>;
}