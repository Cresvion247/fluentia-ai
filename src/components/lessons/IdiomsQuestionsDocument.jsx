import React from "react";

export default function IdiomsQuestionsDocument({ questions, onSelect }) {
  const handleSelection = () => {
    const selected = window.getSelection().toString().trim();
    if (selected) onSelect(selected);
  };
  return <article onMouseUp={handleSelection} className="mx-auto max-w-[794px] select-text bg-secondary px-7 py-16 text-black shadow-sm sm:px-12"><div className="space-y-5">{questions.map((question, index) => <p key={`${index}-${question}`} className="flex gap-5 font-document text-lg leading-8"><span aria-hidden="true">•</span><span>{question}</span></p>)}</div></article>;
}