import React, { useEffect, useState } from "react";
import { parseDocx } from "@/lib/docx-parser";

const sourceUrl = "https://media.base44.com/files/public/6a5d04483fe35abf39399c85/66b39ec39_Commonproblems.docx";

export default function CommonProblemsDocument({ onSelect }) {
  const [paragraphs, setParagraphs] = useState(null);
  useEffect(() => { parseDocx(sourceUrl).then(setParagraphs); }, []);
  const selectText = () => { const text = window.getSelection().toString().trim(); if (text) onSelect(text); };
  if (!paragraphs) return <p className="py-16 text-center text-sm text-slate-500">Cargando el documento…</p>;
  return <article onMouseUp={selectText} className="mx-auto min-h-[1123px] max-w-[794px] select-text bg-white px-8 py-24 text-black shadow-sm sm:px-[120px]">
    {paragraphs.map((paragraph) => { const text = paragraph.runs.map((run) => run.text).join("").trim(), isNewSection = /^\d+$/.test(text) && Number(text) > 1; return <p key={paragraph.id} style={paragraph.style} className={`min-h-[14px] whitespace-pre-wrap font-document leading-normal ${isNewSection ? "mt-10" : ""}`}>{paragraph.runs.map((run) => <span key={run.id} style={run.style}>{run.text}</span>)}</p>; })}
  </article>;
}