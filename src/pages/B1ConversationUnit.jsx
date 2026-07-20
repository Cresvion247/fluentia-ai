import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppShell from "@/components/AppShell";
import TtsControls from "@/components/lessons/TtsControls";
import B1UnitOneDocument from "@/components/lessons/B1UnitOneDocument";
import B1UnitTwoDocument from "@/components/lessons/B1UnitTwoDocument";
import B1UnitThreeDocument from "@/components/lessons/B1UnitThreeDocument";
import B1UnitFourDocument from "@/components/lessons/B1UnitFourDocument";
import B1UnitFiveDocument from "@/components/lessons/B1UnitFiveDocument";
import B1UnitSixDocument from "@/components/lessons/B1UnitSixDocument";
import B1UnitSevenDocument from "@/components/lessons/B1UnitSevenDocument";
import B1UnitEightDocument from "@/components/lessons/B1UnitEightDocument";
import B1UnitNineDocument from "@/components/lessons/B1UnitNineDocument";
import B1UnitTenDocument from "@/components/lessons/B1UnitTenDocument";
import B1UnitElevenDocument from "@/components/lessons/B1UnitElevenDocument";
import B1UnitTwelveDocument from "@/components/lessons/B1UnitTwelveDocument";

export default function B1ConversationUnit() {
  const unit = new URLSearchParams(window.location.search).get("unit") || window.location.pathname.split("/").pop()?.replace("unit-", "");
  const [selection, setSelection] = useState("");
  const content = unit === "1" ? <B1UnitOneDocument onSelect={setSelection} /> : unit === "2" ? <B1UnitTwoDocument onSelect={setSelection} /> : unit === "3" ? <B1UnitThreeDocument onSelect={setSelection} /> : unit === "4" ? <B1UnitFourDocument onSelect={setSelection} /> : unit === "5" ? <B1UnitFiveDocument onSelect={setSelection} /> : unit === "6" ? <B1UnitSixDocument onSelect={setSelection} /> : unit === "7" ? <B1UnitSevenDocument onSelect={setSelection} /> : unit === "8" ? <B1UnitEightDocument onSelect={setSelection} /> : unit === "9" ? <B1UnitNineDocument onSelect={setSelection} /> : unit === "10" ? <B1UnitTenDocument onSelect={setSelection} /> : unit === "11" ? <B1UnitElevenDocument onSelect={setSelection} /> : unit === "12" ? <B1UnitTwelveDocument onSelect={setSelection} /> : null;
  const description = unit === "1" ? "Practica el presente simple, el presente continuo y los verbos de estado con preguntas y respuestas modelo." : unit === "2" ? "Practica el pasado simple, el pasado continuo y la estructura used to con preguntas y respuestas modelo." : unit === "3" ? "Amplía tu vocabulario de deporte, música y entretenimiento con preguntas y respuestas modelo." : unit === "4" ? "Practica el present perfect y el present perfect continuous con preguntas y respuestas modelo." : unit === "5" ? "Practica el past perfect y el past perfect continuous con preguntas y respuestas modelo." : unit === "6" ? "Practica vocabulario y expresiones sobre educación, exámenes, aprendizaje y logros." : unit === "7" ? "Practica formas de futuro, planes, predicciones, horarios y decisiones espontáneas." : unit === "8" ? "Practica expresiones de tiempo, preposiciones, planes y vocabulario de viajes." : unit === "9" ? "Practica vocabulario de viajes, transporte, vacaciones y situaciones cotidianas en ruta." : unit === "10" ? "Practica la voz pasiva, permisos, premios, normas y vocabulario de sociedad." : "Profundiza en la voz pasiva con preguntas sobre celebraciones, cultura y actividades cotidianas.";
  if (content) return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><div className="mb-6 rounded-xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><h1 className="mb-2 font-heading text-xl font-bold text-slate-900 dark:text-white">B1 Conversation · Unit {unit}</h1><p className="leading-7">{description} Selecciona texto para escucharlo, traducirlo o reformularlo.</p></div><div className="mb-6"><TtsControls text={selection} /></div>{content}<Link to="/b1-conversation" className="mt-8 inline-block font-medium text-indigo-600 hover:text-indigo-700">← Volver a las unidades</Link></main></AppShell>;
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><article className="rounded-xl border border-slate-200 bg-white/80 p-8 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><p className="mb-2 text-sm font-medium text-indigo-600">B1 Conversation</p><h1 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">Unit {unit}</h1><p className="mt-5 leading-7">El contenido de esta unidad se añadirá próximamente.</p><Link to="/b1-conversation" className="mt-8 inline-block font-medium text-indigo-600 hover:text-indigo-700">← Volver a las unidades</Link></article></main></AppShell>;
}