import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";

const pdfUrl = "https://media.base44.com/files/public/6a5d04483fe35abf39399c85/b820f62be_psvQA.pdf";

export default function PhrasalVerbsQADocument({ onSelect }) {
  const [groups, setGroups] = useState(null);
  useEffect(() => {
    base44.integrations.Core.ExtractDataFromUploadedFile({ file_url: pdfUrl, json_schema: { type: "object", properties: { groups: { type: "array", items: { type: "object", properties: { heading: { type: "string" }, entries: { type: "array", items: { type: "object", properties: { question: { type: "string" }, answer: { type: "string" }, phrasal_verbs: { type: "array", items: { type: "string" } } }, required: ["question", "answer"] } } }, required: ["entries"] } } }, required: ["groups"] } }).then((result) => setGroups(result.output.groups));
  }, []);
  const formatText = (text, verbs = []) => {
    if (!verbs.length) return text;
    const pattern = new RegExp(`(${verbs.map((verb) => verb.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
    return text.split(pattern).map((part, index) => verbs.some((verb) => verb.toLowerCase() === part.toLowerCase()) ? <strong key={index}>{part}</strong> : part);
  };
  if (!groups) return <p className="py-16 text-center text-sm text-slate-500">Cargando el documento…</p>;
  return <article onMouseUp={() => { const text = window.getSelection().toString().trim(); if (text) onSelect(text); }} className="select-text bg-white px-0 py-16 font-document text-[17px] leading-8 text-black shadow-sm">
    {groups.map((group, groupIndex) => <section key={groupIndex} className="px-7 pb-12 sm:px-12">{group.heading && <h2 className="mb-8 text-xl font-normal">{group.heading}</h2>}{group.entries.map((entry, entryIndex) => <div key={entryIndex} className="mb-10"><p className="mb-3">{formatText(entry.question, entry.phrasal_verbs)}</p><p>{formatText(entry.answer, entry.phrasal_verbs)}</p></div>)}</section>)}
  </article>;
}