import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";

const sourceUrl = "https://media.base44.com/files/public/6a5d04483fe35abf39399c85/b044ef8a5_verbsandpreps.pdf";
const schema = { type: "object", properties: { title: { type: "string" }, subtitle: { type: "string" }, sections: { type: "array", items: { type: "object", properties: { heading: { type: "string" }, questions: { type: "array", items: { type: "string" } } }, required: ["heading", "questions"] } } }, required: ["title", "sections"] };

export default function VerbsPrepositionsDocument({ onSelect }) {
  const [lesson, setLesson] = useState(null);
  useEffect(() => { base44.integrations.Core.ExtractDataFromUploadedFile({ file_url: sourceUrl, json_schema: schema }).then(({ output }) => setLesson(output)); }, []);
  const selectText = () => { const text = window.getSelection().toString().trim(); if (text) onSelect(text); };
  if (!lesson) return <p className="py-16 text-center text-sm text-slate-500">Cargando la lección…</p>;
  return <article onMouseUp={selectText} className="mx-auto min-h-[1123px] max-w-[794px] select-text bg-white px-8 py-24 text-black shadow-sm sm:px-[120px]"><h2 className="text-center font-document text-2xl">{lesson.title}</h2>{lesson.subtitle && <p className="mb-10 mt-6 text-center font-document text-xl">{lesson.subtitle}</p>}<div className="space-y-9">{lesson.sections.map((section) => <section key={section.heading}><h3 className="mb-5 font-document text-lg font-bold">{section.heading}</h3>{section.questions.map((question, index) => <p key={index} className="font-document text-[15px] leading-6">{question}</p>)}</section>)}</div></article>;
}