import React, { useEffect, useState } from "react";
import { Languages, Volume2, Wand2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function TextSelectionMenu() {
  const [menu, setMenu] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const openMenu = (event) => {
      const text = window.getSelection().toString().trim();
      if (!text) return;
      event.preventDefault();
      setResult("");
      setMenu({ text, x: event.clientX, y: event.clientY, levels: false });
    };
    const closeMenu = () => setMenu(null);
    document.addEventListener("contextmenu", openMenu);
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("contextmenu", openMenu);
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  const speak = async () => {
    setLoading(true);
    const { url } = await base44.integrations.Core.GenerateSpeech({ text: menu.text, voice: "honey", language_code: "en" });
    const audio = new Audio(url);
    await audio.play();
    setLoading(false);
    setMenu(null);
  };

  const ask = async (prompt) => {
    setLoading(true);
    setResult(await base44.integrations.Core.InvokeLLM({ prompt }));
    setLoading(false);
  };

  if (!menu) return null;
  const position = { left: Math.min(menu.x, window.innerWidth - 280), top: Math.max(12, Math.min(menu.y, window.innerHeight - 300)) };
  return <div onClick={(event) => event.stopPropagation()} style={position} className="fixed z-50 max-h-72 w-64 overflow-y-auto rounded-xl border border-slate-200 bg-white p-2 shadow-xl dark:border-white/15 dark:bg-slate-900">
    <button onClick={speak} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-white/10"><Volume2 size={16}/>Escuchar</button>
    <button onClick={() => ask(`Detect whether this text is in English or Spanish. If it is English, translate it into natural Spanish. If it is Spanish, translate it into natural English. Return only the translation: ${menu.text}`)} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-white/10"><Languages size={16}/>Traducir</button>
    <button onClick={() => setMenu({ ...menu, levels: !menu.levels })} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm hover:bg-slate-100 dark:hover:bg-white/10"><Wand2 size={16}/>Sinónimo</button>
    {menu.levels && <div className="flex gap-1 px-2 pb-2"><button onClick={() => ask(`Paraphrase this English text at A2 level. Return only the paraphrase: ${menu.text}`)} className="rounded bg-slate-100 px-2 py-1 text-xs dark:bg-white/10">A2</button><button onClick={() => ask(`Paraphrase this English text at B1 level. Return only the paraphrase: ${menu.text}`)} className="rounded bg-slate-100 px-2 py-1 text-xs dark:bg-white/10">B1</button><button onClick={() => ask(`Paraphrase this English text at B2 level. Return only the paraphrase: ${menu.text}`)} className="rounded bg-slate-100 px-2 py-1 text-xs dark:bg-white/10">B2</button><button onClick={() => ask(`Paraphrase this English text at C1 level. Return only the paraphrase: ${menu.text}`)} className="rounded bg-slate-100 px-2 py-1 text-xs dark:bg-white/10">C1</button></div>}
    {(loading || result) && <div className="border-t px-3 py-2 text-xs leading-5 text-slate-600 dark:text-slate-300">{loading ? "Procesando…" : result}</div>}
  </div>;
}