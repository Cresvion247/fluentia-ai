import React from "react";
import { idiomQuestions } from "@/lib/idioms-data";

export default function IdiomsDocument({ onSelect }) {
  const selectText = () => { const text = window.getSelection().toString().trim(); if (text) onSelect(text); };
  return <article onMouseUp={selectText} className="mx-auto min-h-[1123px] max-w-[794px] select-text bg-white px-8 py-24 text-black shadow-sm sm:px-[120px]"><h2 className="mb-10 text-center font-document text-2xl">Idioms in Questions</h2><div className="space-y-5">{idiomQuestions.map((question) => <p key={question} className="font-document text-[15px] leading-6">{question}</p>)}</div></article>;
}