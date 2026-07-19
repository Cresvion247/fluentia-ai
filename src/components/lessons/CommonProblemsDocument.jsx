import React, { useEffect, useState } from "react";
import { parseDocx } from "@/lib/docx-parser";

const sourceUrl = "https://media.base44.com/files/public/6a5d04483fe35abf39399c85/448597b30_Commonproblems.docx";

export default function CommonProblemsDocument({ onSelect }) {
  const [paragraphs, setParagraphs] = useState(null);
  useEffect(() => { parseDocx(sourceUrl).then(setParagraphs); }, []);
  const selectText = () => { const text = window.getSelection().toString().trim(); if (text) onSelect(text); };
  if (!paragraphs) return <p className="py-16 text-center text-sm text-slate-500">Cargando el documento…</p>;
  return <article onMouseUp={selectText} className="min-h-[80vh] select-text bg-white px-8 py-10 text-black shadow-sm sm:px-14">
    {paragraphs.map((paragraph) => <p key={paragraph.id} style={paragraph.style} className="whitespace-pre-wrap font-document text-[15px] leading-5">{paragraph.runs.map((run) => <span key={run.id} style={run.style}>{run.text}</span>)}</p>)}
  </article>;
}