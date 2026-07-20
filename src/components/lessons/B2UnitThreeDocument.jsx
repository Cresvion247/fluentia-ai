import React from "react";
import DocxTableDocument from "@/components/lessons/DocxTableDocument";

export default function B2UnitThreeDocument({ onSelect }) {
  return <DocxTableDocument sourceUrl="https://media.base44.com/files/public/6a5d04483fe35abf39399c85/ce5232168_B2DestinationUnit3QA.docx" onSelect={onSelect} fullWidth={false} />;
}