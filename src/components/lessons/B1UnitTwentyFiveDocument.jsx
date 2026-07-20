import React from "react";
import DocxTableDocument from "@/components/lessons/DocxTableDocument";

export default function B1UnitTwentyFiveDocument({ onSelect }) {
  return <DocxTableDocument sourceUrl="https://media.base44.com/files/public/6a5d04483fe35abf39399c85/a85e3a552_B1DestinationUnit25Questions.docx" onSelect={onSelect} fullWidth={false} headingOverride="B1 Destination Unit 25 Questions" highlightWords={["deny", "praise", "refuse", "warn", "complain", "criticise", "gossip", "encourage", "insult", "pretend", "claim", "convince", "doubt", "get rid of", "carry out", "assume", "investigate", "sensible", "ideal", "shout out", "share out", "hang up", "pick up", "work out", "run out", "sort out", "find out", "fed up", "turn down", "without exception", "bargain", "preferable", "rely on", "disobedient", "advise against", "insist on"]} />;
}