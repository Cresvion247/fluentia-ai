import React, { useRef, useState } from "react";
import { Mic, Send, Square } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function TokkerComposer({ onSend, disabled }) {
  const [text, setText] = useState("");
  const [recording, setRecording] = useState(false);
  const recorderRef = useRef(null);
  const send = () => { if (text.trim()) { onSend(text.trim()); setText(""); } };
  const toggleRecording = async () => {
    if (recorderRef.current) { recorderRef.current.stop(); recorderRef.current = null; setRecording(false); return; }
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream); const chunks = [];
    recorder.ondataavailable = (event) => chunks.push(event.data);
    recorder.onstop = async () => { stream.getTracks().forEach((track) => track.stop()); const file = new File([new Blob(chunks, { type: "audio/webm" })], "tokker-response.webm", { type: "audio/webm" }); const { file_url } = await base44.integrations.Core.UploadFile({ file }); onSend(await base44.integrations.Core.TranscribeAudio({ audio_url: file_url })); };
    recorder.start(); recorderRef.current = recorder; setRecording(true);
  };
  return <div className="mt-4 flex gap-3"><textarea value={text} onChange={(event) => setText(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); send(); } }} placeholder="Escribe tu respuesta en inglés o pulsa el micrófono…" className="min-h-12 flex-1 resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm dark:border-white/15 dark:bg-white/5" disabled={disabled} /><button onClick={toggleRecording} disabled={disabled} aria-label={recording ? "Detener grabación" : "Grabar respuesta"} className={recording ? "rounded-xl bg-red-600 px-4 text-white" : "rounded-xl border border-indigo-200 px-4 text-indigo-600 dark:border-white/15"}>{recording ? <Square size={18} /> : <Mic size={18} />}</button><button onClick={send} disabled={disabled || !text.trim()} aria-label="Enviar" className="rounded-xl bg-indigo-600 px-4 text-white disabled:opacity-50"><Send size={18} /></button></div>;
}