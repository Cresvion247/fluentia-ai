import React, { useState } from "react";
import AppShell from "@/components/AppShell";
import CommonProblemsDocument from "@/components/lessons/CommonProblemsDocument";
import TtsControls from "@/components/lessons/TtsControls";

export default function CommonProblems() {
  const [selection, setSelection] = useState("");
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><div className="mb-6"><TtsControls text={selection} /></div><CommonProblemsDocument onSelect={setSelection} /></main></AppShell>;
}