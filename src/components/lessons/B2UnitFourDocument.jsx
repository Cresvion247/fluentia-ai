import React from "react";
import DocxTableDocument from "@/components/lessons/DocxTableDocument";

export default function B2UnitFourDocument({ onSelect }) {
  return <DocxTableDocument sourceUrl="https://media.base44.com/files/public/6a5d04483fe35abf39399c85/214ba637e_B2DestinationUnit4QA.docx" onSelect={onSelect} fullWidth={false} />;
}