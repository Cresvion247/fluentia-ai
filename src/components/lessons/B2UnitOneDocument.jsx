import React from "react";
import DocxTableDocument from "@/components/lessons/DocxTableDocument";

export default function B2UnitOneDocument({ onSelect }) {
  return <DocxTableDocument sourceUrl="https://media.base44.com/files/public/6a5d04483fe35abf39399c85/5d03c0747_B2DestinationUnit1QA.docx" onSelect={onSelect} fullWidth={false} headingOverride="B2 Destination Unit 1 Questions" />;
}