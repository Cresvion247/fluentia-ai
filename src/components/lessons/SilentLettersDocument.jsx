import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";

const fileUrl = "https://media.base44.com/files/public/6a5d04483fe35abf39399c85/38472ec59_SilentLetters1rtf1.pdf";
const schema = { type: "object", properties: { title: { type: "string" }, sections: { type: "array", items: { type: "object", properties: { heading: { type: "string" }, content: { type: "string" } }, required: ["heading", "content"] } } }, required: ["title", "sections"] };

export default function SilentLettersDocument({ onSelect }) {
  const [lesson, setLesson] = useState(null);
  useEffect(() => { base44.integrations.Core.ExtractDataFromUploadedFile({ file_url: fileUrl, json_schema: schema }).then(({ output }) => setLesson(output)); }, []);
  const selectText = () => { const text = window.getSelection().toString().trim(); if (text) onSelect(text); };
  if (!lesson) return <p className="py-16 text-center text-sm text-slate-500">Cargando el documento…</p>;
  return <div className="space-y-8" onMouseUp={selectText}>
    <h1 className="text-center font-document text-2xl font-bold text-black">{lesson.title}</h1>
    {lesson.sections.map((section) => <section key={section.heading} className="document-section"><h2 className="font-bold">{section.heading}</h2><p>{section.content}</p></section>)}
  </div>;
}