import React from "react";
import DocxTableDocument from "@/components/lessons/DocxTableDocument";

export default function B1UnitTwelveDocument({ onSelect }) {
  return <DocxTableDocument sourceUrl="https://media.base44.com/files/public/6a5d04483fe35abf39399c85/23b997676_B1DestinationUnit12Questions.docx" onSelect={onSelect} fullWidth={false} />;
}