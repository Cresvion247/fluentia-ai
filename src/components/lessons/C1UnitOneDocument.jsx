import React from "react";
import DocxTableDocument from "@/components/lessons/DocxTableDocument";

export default function C1UnitOneDocument({ onSelect }) {
  return <DocxTableDocument sourceUrl="https://media.base44.com/files/public/6a5d04483fe35abf39399c85/30649be2a_DestinationC1Unit1QA.docx" onSelect={onSelect} fullWidth={false} />;
}