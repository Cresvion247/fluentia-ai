import React from "react";
import DocxTableDocument from "@/components/lessons/DocxTableDocument";

const sourceUrl = "https://media.base44.com/files/public/6a5d04483fe35abf39399c85/b6743ff4d_ingorinfQA.docx";

export default function IngOrInfinitiveDocument({ onSelect }) {
  return <DocxTableDocument sourceUrl={sourceUrl} onSelect={onSelect} />;
}