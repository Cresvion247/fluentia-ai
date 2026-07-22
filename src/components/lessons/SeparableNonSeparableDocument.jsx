import React from "react";
import DocxTableDocument from "@/components/lessons/DocxTableDocument";

const sourceUrl = "https://media.base44.com/files/public/6a5d04483fe35abf39399c85/81432fe27_Separableandnonseparablephrasalverbs.docx";

export default function SeparableNonSeparableDocument({ onSelect }) {
  return <DocxTableDocument sourceUrl={sourceUrl} onSelect={onSelect} />;
}