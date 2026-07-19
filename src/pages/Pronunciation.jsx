import React from "react";
import AppShell from "@/components/AppShell";
import FormattedDocument from "@/components/lessons/FormattedDocument";
import { pronunciationBook } from "@/content/pronunciationBook";
import { AudioLines } from "lucide-react";
export default function Pronunciation(){return <AppShell><main className="mx-auto max-w-4xl px-5 py-14"><div className="mb-9 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo-100 text-indigo-700 dark:bg-indigo-500/15"><AudioLines size={23}/></span><div><p className="text-sm font-bold uppercase tracking-[.15em] text-indigo-600">Material de aprendizaje</p><p className="text-sm text-slate-500 dark:text-slate-400">Pronunciación inglesa</p></div></div><FormattedDocument content={pronunciationBook}/></main></AppShell>}