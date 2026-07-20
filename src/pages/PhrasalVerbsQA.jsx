import React from "react";
import { Link } from "react-router-dom";
import AppShell from "@/components/AppShell";

const pdfUrl = "https://media.base44.com/files/public/6a5d04483fe35abf39399c85/b820f62be_psvQA.pdf";

export default function PhrasalVerbsQA() {
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><div className="mb-6 rounded-xl border border-slate-200 bg-white/80 p-5 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><h1 className="mb-2 font-heading text-xl font-bold text-slate-900 dark:text-white">Phrasal Verbs · Q&amp;A</h1><p className="leading-7">Practica las preguntas y respuestas con <em>phrasal verbs</em> del documento.</p></div><iframe title="Phrasal Verbs Questions and Answers" src={pdfUrl} className="h-[80vh] w-full rounded-sm bg-white shadow-sm" /><Link to="/phrasal-verbs" className="mt-8 inline-block font-medium text-indigo-600 hover:text-indigo-700">← Volver a Phrasal Verbs</Link></main></AppShell>;
}