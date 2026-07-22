import React from "react";
import { affixGroups } from "@/lib/affixes-data";
import AffixesTable from "@/components/lessons/AffixesTable";

export default function AffixesDocument({ onSelect }) {
  const handleSelection = () => {
    const selected = window.getSelection().toString().trim();
    if (selected) onSelect(selected);
  };
  return <article onMouseUp={handleSelection} className="mx-auto max-w-[794px] select-text bg-white px-7 py-14 font-document text-black shadow-sm sm:px-12"><h1 className="mb-2 text-2xl font-bold sm:text-3xl">PREFIXES AND SUFFIXES: SUMMARY</h1>{affixGroups.map((group) => <AffixesTable key={group.title} group={group} />)}</article>;
}