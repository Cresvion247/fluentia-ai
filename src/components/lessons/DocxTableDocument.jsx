import React, { useEffect, useState } from "react";
import { parseDocx } from "@/lib/docx-parser";

export default function DocxTableDocument({ sourceUrl, onSelect, fullWidth = true }) {
  const [document, setDocument] = useState(null);
  useEffect(() => { parseDocx(sourceUrl).then(setDocument); }, [sourceUrl]);
  const selectText = () => { const text = window.getSelection().toString().trim(); if (text && onSelect) onSelect(text); };
  if (!document) return <p className="py-16 text-center text-sm text-slate-500">Cargando el documento…</p>;
  return <article onMouseUp={selectText} className={`mx-auto min-h-[1123px] max-w-[794px] select-text bg-white py-24 text-black shadow-sm ${fullWidth ? "px-0" : "px-8 sm:px-[120px]"}`}>
    <table className="w-full border-collapse"><tbody>{document.rows.map((row) => <tr key={row.id}>{row.cells.map((cell) => <td key={cell.id} colSpan={cell.colSpan} className="border border-black px-[7px] py-0 align-top">{cell.paragraphs.map((paragraph) => <p key={paragraph.id} style={paragraph.style} className="min-h-[14px] whitespace-pre-wrap font-document leading-normal">{paragraph.runs.map((run) => <span key={run.id} style={run.style}>{run.text}</span>)}</p>)}</td>)}</tr>)}</tbody></table>
  </article>;
}