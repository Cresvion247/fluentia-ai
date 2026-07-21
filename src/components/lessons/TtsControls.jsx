import React, { useState } from "react";
import { Pause, Play, RotateCcw, Volume2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function TtsControls({ text }) {
  const [audio, setAudio] = useState(null);
  const [speed, setSpeed] = useState("1");
  const [isLoading, setIsLoading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const speak = async () => {
    if (!text.trim()) return;
    audio?.pause();
    setIsLoading(true);
    const { url } = await base44.integrations.Core.GenerateSpeech({ text, voice: "honey", language_code: "en" });
    const nextAudio = new Audio(url);
    nextAudio.playbackRate = Number(speed);
    nextAudio.onended = () => setIsPaused(false);
    await nextAudio.play();
    setAudio(nextAudio);
    setIsPaused(false);
    setIsLoading(false);
  };

  const togglePause = () => {
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPaused(false);
    } else {
      audio.pause();
      setIsPaused(true);
    }
  };

  const changeSpeed = (event) => {
    const nextSpeed = event.target.value;
    setSpeed(nextSpeed);
    if (audio) audio.playbackRate = Number(nextSpeed);
  };

  return <div className="flex flex-wrap items-center gap-2 rounded-xl border border-slate-200 bg-white/80 p-3 font-body text-sm dark:border-white/10 dark:bg-white/5"><Volume2 size={18} className="text-indigo-600"/><span className="text-slate-500">Voz natural premium · selecciona texto para escucharlo</span><button onClick={speak} disabled={!text.trim() || isLoading} className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-3 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"><Play size={14}/>{isLoading ? "Generando…" : "Reproducir"}</button><button onClick={togglePause} disabled={!audio || isLoading} className="rounded-lg border px-3 py-2 disabled:cursor-not-allowed disabled:opacity-50">{isPaused ? <Play size={14}/> : <Pause size={14}/>}</button><button onClick={speak} disabled={!text.trim() || isLoading} aria-label="Reiniciar" className="rounded-lg border p-2 disabled:cursor-not-allowed disabled:opacity-50"><RotateCcw size={14}/></button><select value={speed} onChange={changeSpeed} className="rounded-lg border bg-transparent px-2 py-2">{["0.5", "0.75", "1", "1.25", "1.5", "2"].map((item) => <option key={item} value={item}>{item}x</option>)}</select></div>;
}