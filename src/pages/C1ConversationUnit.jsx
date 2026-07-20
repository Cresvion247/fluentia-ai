import React from "react";
import { Link } from "react-router-dom";
import AppShell from "@/components/AppShell";

export default function C1ConversationUnit() {
  const unit = window.location.pathname.split("/").pop()?.replace("unit-", "");
  return <AppShell><main className="mx-auto max-w-4xl px-5 py-10"><article className="rounded-xl border border-slate-200 bg-white/80 p-8 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"><p className="mb-2 text-sm font-medium text-indigo-600">C1 Conversation</p><h1 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">Unit {unit}</h1><p className="mt-5 leading-7">El contenido de esta unidad se añadirá próximamente.</p><Link to="/c1-conversation" className="mt-8 inline-block font-medium text-indigo-600 hover:text-indigo-700">← Volver a las unidades</Link></article></main></AppShell>;
}