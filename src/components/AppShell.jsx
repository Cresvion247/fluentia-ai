import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { GraduationCap, Menu, Moon, Sun, X } from "lucide-react";

export default function AppShell({ children }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const location = useLocation();
  const toggleTheme = () => { document.documentElement.classList.toggle("dark"); setDark(!dark); };
  const links = [["Inicio", "/"], ["Pronunciación", "/pronunciacion"], ["Letras Mudas", "/letras-silenciosas"], ["Common Problems", "/common-problems"], ["EngSpan", "/engspan"], ["Phrasal Verbs", "/phrasal-verbs"], ["Verbs + Prepositions", "/verbs-prepositions"], ["Idioms and Expressions", "/idioms-expressions"], ["Ing or Infinitive", "/ing-or-infinitive"], ["Do vs. Make", "/do-vs-make"], ["Inversion with Conditionals", "/inversion-conditionals"], ["Similes and Metaphors", "/similes-metaphors"], ["Affixes", "/affixes"], ["Soft Skills", "/soft-skills"], ["Business", "/business"], ["B1 Conversation", "/b1-conversation"], ["B2 Conversation", "/b2-conversation"], ["C1 Conversation", "/c1-conversation"], ["Escritura", "/escritura"], ["Expresión oral", "/expresion-oral"]];
  return <div className="min-h-screen bg-[#f7f9ff] text-slate-900 dark:bg-[#09111f] dark:text-slate-100">
    <header className="sticky top-0 z-30 border-b border-white/50 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-[#09111f]/70"><div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3">
      <Link to="/" className="flex shrink-0 items-center gap-2 font-bold tracking-tight"><span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white"><GraduationCap size={20}/></span><span>FIx<span className="text-indigo-600">-Ing</span></span></Link>
      <nav className="hidden max-w-3xl flex-wrap justify-center gap-x-7 gap-y-2 text-sm font-medium md:flex">{links.map(([name,path]) => <NavLink key={path} to={path} className={({isActive}) => isActive ? "text-indigo-600" : "text-slate-600 hover:text-indigo-600 dark:text-slate-300"}>{name}</NavLink>)}</nav>
      <div className="flex items-center gap-2"><button onClick={toggleTheme} aria-label="Cambiar tema" className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-white/10">{dark ? <Sun size={18}/> : <Moon size={18}/>}</button><button onClick={() => setOpen(!open)} aria-label="Abrir menú" className="rounded-lg p-2 md:hidden">{open ? <X size={20}/> : <Menu size={20}/>}</button></div>
    </div>{open && <nav className="space-y-1 border-t px-5 py-3 md:hidden">{links.map(([name,path]) => <Link onClick={() => setOpen(false)} key={path} to={path} className="block rounded-lg px-3 py-2 text-sm hover:bg-indigo-50 dark:hover:bg-white/10">{name}</Link>)}</nav>}</header>
    {location.pathname !== "/" && <div className="mx-auto max-w-4xl px-5 pt-6"><Link to="/" className="inline-block font-medium text-indigo-600 hover:text-indigo-700">← Volver al inicio</Link></div>}
    {children}
    {location.pathname !== "/" && <div className="mx-auto max-w-4xl px-5 pb-10 pt-6"><Link to="/" className="inline-block font-medium text-indigo-600 hover:text-indigo-700">← Volver al inicio</Link></div>}
  </div>;
}