import React, { useEffect, useState } from "react";
import { parseDocx } from "@/lib/docx-parser";

export default function DocxTableDocument({ sourceUrl, onSelect, fullWidth = true, headingOverride, highlightWords = [], showParagraphs = true, getSectionHeading }) {
  const [document, setDocument] = useState(null);
  useEffect(() => { parseDocx(sourceUrl).then(setDocument); }, [sourceUrl]);
  const selectText = () => { const text = window.getSelection().toString().trim(); if (text && onSelect) onSelect(text); };
  const highlightText = (text) => {
    if (!highlightWords.length) return text;
    const pattern = new RegExp(`(${highlightWords.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
    return text.split(pattern).map((part, index) => highlightWords.some((word) => word.toLowerCase() === part.toLowerCase()) ? <strong key={index}>{part}</strong> : part);
  };
  if (!document) return <p className="py-16 text-center text-sm text-slate-500">Cargando el documento…</p>;
  const renderParagraph = (paragraph) => {
    const paragraphText = paragraph.runs.map((run) => run.text).join("");
    const isOverriddenHeading = headingOverride && /(B1 Destination Unit|B2: Unit)/.test(paragraphText);
    const sectionMatch = getSectionHeading && paragraphText.match(/^(\d{1,2})(?=[A-Z])/);
    const sectionTitle = sectionMatch && getSectionHeading(sectionMatch[1], paragraphText.slice(sectionMatch[1].length));
    return <React.Fragment key={paragraph.id}>{sectionTitle && <h2 className="mb-2 mt-3 font-heading text-base font-bold text-indigo-700">{sectionMatch[1]} · {sectionTitle}</h2>}<p style={paragraph.style} className="min-h-[14px] whitespace-pre-wrap font-document leading-normal">{isOverriddenHeading ? <span style={paragraph.runs[0]?.style}>{headingOverride}</span> : paragraph.runs.map((run, index) => <span key={run.id} style={run.style}>{highlightText(index === 0 && sectionMatch ? run.text.replace(sectionMatch[1], "") : run.text)}</span>)}</p></React.Fragment>;
  };
  return <article onMouseUp={selectText} className="mx-auto min-h-[1123px] max-w-[794px] select-text bg-white px-0 py-24 text-black shadow-sm">
    {(document.tables || [document.rows]).map((table, tableIndex) => table.length > 0 && <table key={tableIndex} className="w-full border-collapse"><tbody>{table.map((row) => <tr key={row.id}>{row.cells.map((cell) => <td key={cell.id} colSpan={cell.colSpan} className="border border-black px-[7px] py-0 align-top">{cell.paragraphs.map(renderParagraph)}</td>)}</tr>)}</tbody></table>)}
    {showParagraphs && document.paragraphs.length > 0 && <div>{document.paragraphs.map(renderParagraph)}</div>}
  </article>;
}