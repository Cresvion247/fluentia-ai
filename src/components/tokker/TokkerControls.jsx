import React from "react";

const voices = [
  ["honey", "Americana · voz cálida"],
  ["river", "Británica · voz clara"],
  ["spark", "Australiana · voz dinámica"],
  ["storm", "Masculina · voz formal"],
  ["sunny", "Femenina · voz alegre"]
];

export default function TokkerControls({ voice, speed, onVoiceChange, onSpeedChange }) {
  return <div className="grid gap-4 rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5 sm:grid-cols-2">
    <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Voz en inglés<select value={voice} onChange={(event) => onVoiceChange(event.target.value)} className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 font-normal dark:border-white/15 dark:bg-slate-900">{voices.map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
    <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Velocidad: {speed}x<input value={speed} onChange={(event) => onSpeedChange(event.target.value)} className="mt-3 w-full accent-indigo-600" type="range" min="0.6" max="1.2" step="0.1" /></label>
  </div>;
}