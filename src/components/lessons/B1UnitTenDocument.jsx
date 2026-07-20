import React from "react";
import DocxTableDocument from "@/components/lessons/DocxTableDocument";

export default function B1UnitTenDocument({ onSelect }) {
  return <DocxTableDocument sourceUrl="https://media.base44.com/files/public/6a5d04483fe35abf39399c85/58850ba65_B1DestinationUnit10Questions.docx" onSelect={onSelect} fullWidth={false} />;
}