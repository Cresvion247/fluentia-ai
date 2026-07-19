import React, { useCallback, useState } from "react";
import AppShell from "@/components/AppShell";
import PronunciationDocument from "@/components/lessons/PronunciationDocument";
import TtsControls from "@/components/lessons/TtsControls";
import TranslationPanel from "@/components/lessons/TranslationPanel";
export default function Pronunciation(){const [selection,setSelection]=useState("");const [text,setText]=useState("");const ready=useCallback(value=>setText(value),[]);return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><div className="mb-6 space-y-3"><TtsControls text={text}/><TranslationPanel text={selection}/></div><PronunciationDocument onPick={setSelection} onReady={ready} selected={selection}/></main></AppShell>}