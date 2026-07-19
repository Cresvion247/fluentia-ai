import React, { useState } from "react";
import AppShell from "@/components/AppShell";
import SilentLettersDocument from "@/components/lessons/SilentLettersDocument";
import TtsControls from "@/components/lessons/TtsControls";

export default function SilentLetters() {
  const [selection, setSelection] = useState("");
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><div className="mb-6"><TtsControls text={selection} /></div><SilentLettersDocument onSelect={setSelection} /></main></AppShell>;
}