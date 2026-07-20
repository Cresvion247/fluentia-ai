import React from "react";
import DocxTableDocument from "@/components/lessons/DocxTableDocument";

const sourceUrl = "https://media.base44.com/files/public/6a5d04483fe35abf39399c85/a09200e0b_DIFFERENCEBETWEENDOANDMAKE.docx";

export default function DoVsMakeDocument({ onSelect }) {
  return <DocxTableDocument sourceUrl={sourceUrl} onSelect={onSelect} showParagraphs={false} />;
}