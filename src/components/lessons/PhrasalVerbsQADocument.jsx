import React, { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import { qaGroups } from "@/lib/phrasal-verbs-qa-data";

export default function PhrasalVerbsQADocument({ onSelect }) {
  const [storedEntries, setStoredEntries] = useState([]);

  useEffect(() => {
    base44.entities.PhrasalVerbsQAItem.list("position", 500).then(setStoredEntries);
  }, []);

  const groups = [...qaGroups.map((group) => ({ ...group, entries: group.entries.map(([question, answer, phrasal_verbs]) => ({ question, answer, phrasal_verbs })) })), ...Object.values(storedEntries.reduce((collection, entry) => {
    const section = entry.section;
    if (!collection[section]) collection[section] = { heading: section, entries: [] };
    collection[section].entries.push(entry);
    return collection;
  }, {}))].sort((first, second) => Number(first.heading) - Number(second.heading));

  const highlight = (text, words = []) => {
    if (!words.length) return text;
    const expression = new RegExp(`(${words.map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
    return text.split(expression).map((part, index) => words.some((word) => word.toLowerCase() === part.toLowerCase()) ? <strong key={index}>{part}</strong> : part);
  };

  const handleSelection = () => {
    const selected = window.getSelection().toString().trim();
    if (selected) onSelect(selected);
  };

  return <article onMouseUp={handleSelection} className="select-text bg-white py-16 font-document text-[17px] leading-8 text-black shadow-sm">
    {groups.map((group) => <section key={group.heading} className="px-7 pb-12 sm:px-12">
      <h2 className="mb-8 text-xl font-normal">{group.heading}</h2>
      {group.entries.map(({ question, answer, phrasal_verbs }, index) => <div key={index} className="mb-10">
        <p className="mb-3">{highlight(question, phrasal_verbs)}</p>
        <p>{highlight(answer, phrasal_verbs)}</p>
      </div>)}
    </section>)}
  </article>;
}