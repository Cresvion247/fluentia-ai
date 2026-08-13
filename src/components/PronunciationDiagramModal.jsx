import React from "react";
import { X } from "lucide-react";
import { getPhonemeGuide } from "@/lib/phoneme-diagrams";

function Diagram({ type }) {
  const tongue = type === "front" ? "M88 111 Q126 62 182 87 Q161 129 103 132Z" : type === "open" ? "M80 133 Q127 92 187 116 Q150 157 89 151Z" : type === "rounded" ? "M94 121 Q137 83 190 108 Q165 143 101 143Z" : "M91 119 Q132 77 185 103 Q158 137 101 140Z";
  return <svg viewBox="0 0 260 180" role="img" aria-label="Diagrama de posición de boca y lengua" className="mx-auto w-full max-w-sm"><path d="M35 62 Q84 21 174 38 Q224 48 229 91 Q225 144 175 156 L70 154 Q40 139 35 105Z" fill="#fef3c7" stroke="#4338ca" strokeWidth="4"/><path d="M49 73 L110 73" stroke="#f8fafc" strokeWidth="12" strokeLinecap="round"/><path d="M50 89 L108 89" stroke="#f8fafc" strokeWidth="10" strokeLinecap="round"/><path d={tongue} fill="#f472b6" stroke="#be185d" strokeWidth="3"/><path d="M184 48 Q205 66 205 92" fill="none" stroke="#7c3aed" strokeWidth="5" strokeLinecap="round"/><circle cx="208" cy="94" r="5" fill="#7c3aed"/><text x="38" y="174" fill="#4f46e5" fontSize="12" fontWeight="700">lengua</text><text x="171" y="28" fill="#4f46e5" fontSize="12" fontWeight="700">paladar</text></svg>;
}

export default function PronunciationDiagramModal({ group, onClose }) {
  if (!group) return null;
  const guide = getPhonemeGuide(group);
  return <div onClick={onClose} className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/55 p-4"><section onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-label="Guía de pronunciación" className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl dark:bg-slate-900 sm:p-8"><div className="flex items-start justify-between gap-4"><div><p className="text-sm font-bold uppercase tracking-[.16em] text-indigo-600">Posición articulatoria</p><h2 className="mt-2 font-heading text-3xl font-bold text-slate-900 dark:text-white">{guide.ipa}</h2></div><button onClick={onClose} aria-label="Cerrar" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10"><X size={20}/></button></div><div className="my-5 rounded-2xl bg-indigo-50 p-4 dark:bg-indigo-400/10"><Diagram type={guide.diagram}/></div><p className="leading-7 text-slate-600 dark:text-slate-300">{guide.description}</p></section></div>;
}