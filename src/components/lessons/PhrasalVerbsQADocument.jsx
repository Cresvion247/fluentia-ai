import React from "react";
import { qaGroups } from "@/lib/phrasal-verbs-qa-data";

export default function PhrasalVerbsQADocument({ onSelect }) {
  const highlight = (text, words) => {
    const expression = new RegExp(`(${words.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
    return text.split(expression).map((part, index) => words.some((word) => word.toLowerCase() === part.toLowerCase()) ? <strong key={index}>{part}</strong> : part);
  };

  const handleSelection = () => {
    const selected = window.getSelection().toString().trim();
    if (selected) onSelect(selected);
  };

  return <article onMouseUp={handleSelection} className="select-text bg-white py-16 font-document text-[17px] leading-8 text-black shadow-sm">
    {qaGroups.map((group) => <section key={group.heading} className="px-7 pb-12 sm:px-12">
      <h2 className="mb-8 text-xl font-normal">{group.heading}</h2>
      {group.entries.map(([question, answer, verbs], index) => <div key={index} className="mb-10">
        <p className="mb-3">{highlight(question, verbs)}</p>
        <p>{highlight(answer, verbs)}</p>
      </div>)}
    </section>)}
  </article>;
}