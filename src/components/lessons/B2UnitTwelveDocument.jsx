import React from "react";
import DocxTableDocument from "@/components/lessons/DocxTableDocument";

export default function B2UnitTwelveDocument({ onSelect }) {
  return <DocxTableDocument sourceUrl="https://media.base44.com/files/public/6a5d04483fe35abf39399c85/f1b97c0b6_B2DestinationUnit12QA.docx" onSelect={onSelect} fullWidth={false} />;
}