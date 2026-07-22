import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";

export default function SoftSkillsDocument({ onSelect }) {
  const [sections, setSections] = useState([]);
  useEffect(() => { base44.entities.SoftSkillsSection.list("position", 50).then(setSections); }, []);
  const selectText = () => { const text = window.getSelection().toString().trim(); if (text) onSelect(text); };
  if (!sections.length) return <p className="py-16 text-center text-sm text-slate-500">Cargando la lección…</p>;
  return <div onMouseUp={selectText} className="space-y-8 select-text">{sections.map((section) => <article key={section.id} className="overflow-hidden border border-slate-400 bg-slate-200 text-black shadow-sm"><header className="border-b border-dashed border-slate-400 bg-white px-6 py-12 text-center"><h2 className="font-document text-4xl text-slate-500 sm:text-6xl">{section.title}</h2><div className="mx-auto mt-6 h-10 w-10 rounded-full border-4 border-slate-400 bg-white ring-4 ring-white" /></header><div className="min-h-[560px] px-7 py-8 sm:px-12"><ul className="space-y-3">{section.questions.map((question, index) => <li key={index} className="flex gap-5 font-document text-xl leading-8 sm:text-2xl sm:leading-10"><span className="text-orange-600">•</span><span>{question}</span></li>)}</ul></div><div className="h-8 bg-slate-400" /></article>)}</div>;
}