import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppShell from "@/components/AppShell";
import TtsControls from "@/components/lessons/TtsControls";
import C1UnitOneDocument from "@/components/lessons/C1UnitOneDocument";
import C1UnitTwoDocument from "@/components/lessons/C1UnitTwoDocument";
import C1UnitThreeDocument from "@/components/lessons/C1UnitThreeDocument";
import C1UnitFourDocument from "@/components/lessons/C1UnitFourDocument";
import C1UnitFiveDocument from "@/components/lessons/C1UnitFiveDocument";
import C1UnitSixDocument from "@/components/lessons/C1UnitSixDocument";
import C1UnitSevenDocument from "@/components/lessons/C1UnitSevenDocument";
import C1UnitEightDocument from "@/components/lessons/C1UnitEightDocument";
import C1UnitNineDocument from "@/components/lessons/C1UnitNineDocument";
import C1UnitTenDocument from "@/components/lessons/C1UnitTenDocument";
import C1UnitElevenDocument from "@/components/lessons/C1UnitElevenDocument";

export default function C1ConversationUnit() {
  const unit = window.location.pathname.split("/").pop()?.replace("unit-", "");
  const [selection, setSelection] = useState("");
  const content = unit === "1" ? <C1UnitOneDocument onSelect={setSelection} /> : unit === "2" ? <C1UnitTwoDocument onSelect={setSelection} /> : unit === "3" ? <C1UnitThreeDocument onSelect={setSelection} /> : unit === "4" ? <C1UnitFourDocument onSelect={setSelection} /> : unit === "5" ? <C1UnitFiveDocument onSelect={setSelection} /> : unit === "6" ? <C1UnitSixDocument onSelect={setSelection} /> : unit === "7" ? <C1UnitSevenDocument onSelect={setSelection} /> : unit === "8" ? <C1UnitEightDocument onSelect={setSelection} /> : unit === "9" ? <C1UnitNineDocument onSelect={setSelection} /> : unit === "10" ? <C1UnitTenDocument onSelect={setSelection} /> : unit === "11" ? <C1UnitElevenDocument onSelect={setSelection} /> : null;

  if (content) return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><div className="mb-6 rounded-xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><h1 className="mb-2 font-heading text-xl font-bold text-slate-900 dark:text-white">C1 Conversation · Unit {unit}</h1><p className="leading-7">Practica vocabulario avanzado para expresar opiniones, actitudes y perspectivas. Selecciona texto para escucharlo, traducirlo o reformularlo.</p></div><div className="mb-6"><TtsControls text={selection} /></div>{content}<Link to="/c1-conversation" className="mt-8 inline-block font-medium text-indigo-600 hover:text-indigo-700">← Volver a las unidades</Link></main></AppShell>;

  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><article className="rounded-xl border border-slate-200 bg-white/80 p-8 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><p className="mb-2 text-sm font-medium text-indigo-600">C1 Conversation</p><h1 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">Unit {unit}</h1><p className="mt-5 leading-7">El contenido de esta unidad se añadirá próximamente.</p><Link to="/c1-conversation" className="mt-8 inline-block font-medium text-indigo-600 hover:text-indigo-700">← Volver a las unidades</Link></article></main></AppShell>;
}