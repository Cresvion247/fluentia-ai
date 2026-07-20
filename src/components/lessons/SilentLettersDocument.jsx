import React from "react";
import { silentLettersSections } from "@/lib/silent-letters-data";

export default function SilentLettersDocument({ onSelect }) {
  const selectText = () => { const text = window.getSelection().toString().trim(); if (text) onSelect(text); };
  const formatLine = (line, section, highlight) => {
    if (!section.letter || !highlight) return line;
    const pieces = line.split(new RegExp(`(${section.letter})`, "gi"));
    return pieces.map((piece, index) => piece.toLowerCase() === section.letter ? <mark key={index} className={section.tone === "red" ? "bg-transparent p-0 text-red-600" : "bg-yellow-300 p-0 text-black"}>{piece}</mark> : piece);
  };
  return <article onMouseUp={selectText} className="mx-auto max-w-[794px] select-text bg-white text-black shadow-sm"><table className="w-full border-collapse"><thead><tr><th colSpan="1" className="border border-black px-3 py-1 text-center font-document text-xl font-bold">Silent Letters</th></tr></thead><tbody>{silentLettersSections.map((section) => <tr key={section.heading}><td className="border border-black px-3 py-1 align-top"><h2 className="font-document text-lg font-bold leading-6">{section.heading}</h2>{section.lines.map((line, index) => <p key={index} className="whitespace-pre-wrap font-document text-[15px] leading-6">{formatLine(line, section, index === 0)}</p>)}</td></tr>)}</tbody></table></article>;
}