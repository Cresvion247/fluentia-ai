import React from "react";
import DocxTableDocument from "@/components/lessons/DocxTableDocument";

export default function B1UnitTwentyDocument({ onSelect }) {
  return <DocxTableDocument sourceUrl="https://media.base44.com/files/public/6a5d04483fe35abf39399c85/fa57d3734_B1DestinationUnit20Questions.docx" onSelect={onSelect} fullWidth={false} headingOverride="B1 Destination Unit 20 Questions" />;
}