import React from "react";
import DocxTableDocument from "@/components/lessons/DocxTableDocument";

const sourceUrl = "https://media.base44.com/files/public/6a5d04483fe35abf39399c85/bdb1d6ebd_QuestionBank1.docx";

export default function IngSpanDocument({ onSelect }) {
  return <DocxTableDocument sourceUrl={sourceUrl} onSelect={onSelect} />;
}