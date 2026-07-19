import React, { useCallback, useState } from "react";
import AppShell from "@/components/AppShell";
import PronunciationDocument from "@/components/lessons/PronunciationDocument";
import TtsControls from "@/components/lessons/TtsControls";
export default function Pronunciation(){const [selection,setSelection]=useState("");return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><div className="mb-6 space-y-3"><TtsControls text={selection}/></div><PronunciationDocument onPick={setSelection}/></main></AppShell>}