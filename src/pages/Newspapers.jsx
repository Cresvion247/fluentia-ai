import React from "react";
import { Newspaper } from "lucide-react";
import AppShell from "@/components/AppShell";
import ReadingBenefits from "@/components/read/ReadingBenefits";
import NewspaperCard from "@/components/read/NewspaperCard";

const newspapers = [
  { name: "El País", region: "España · English Edition", blurb: "Actualidad española e internacional en inglés.", url: "https://english.elpais.com/" },
  { name: "Euronews", region: "Europa", blurb: "Noticias y análisis de Europa desde una mirada multilingüe.", url: "https://www.euronews.com/" },
  { name: "The Guardian", region: "Reino Unido", blurb: "Periodismo independiente sobre el Reino Unido y el mundo.", url: "https://www.theguardian.com/" },
  { name: "NPR", region: "Estados Unidos", blurb: "Noticias, cultura y reportajes de la radio pública estadounidense.", url: "https://www.npr.org/" },
  { name: "China Daily", region: "China", blurb: "Actualidad china y global desde una perspectiva local.", url: "https://www.chinadaily.com.cn/" },
  { name: "The Moscow Times", region: "Rusia", blurb: "Noticias independientes sobre Rusia y la región.", url: "https://www.themoscowtimes.com/" },
  { name: "The Times of India", region: "India", blurb: "Actualidad, sociedad y cultura del mayor país anglófono de Asia.", url: "https://timesofindia.indiatimes.com/" },
  { name: "Al Jazeera English", region: "Oriente Medio · Global", blurb: "Cobertura internacional con foco en el Sur Global y Oriente Medio.", url: "https://www.aljazeera.com/" }
];

export default function Newspapers() {
  return <AppShell><main className="mx-auto max-w-6xl px-5 py-10"><section className="rounded-3xl bg-gradient-to-br from-indigo-600 to-cyan-500 px-7 py-12 text-white shadow-xl shadow-indigo-500/20 sm:px-12"><div className="inline-flex rounded-xl bg-white/10 p-3 text-emerald-300"><Newspaper size={28}/></div><p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Read · Newspapers</p><h1 className="mt-3 max-w-3xl font-heading text-4xl font-bold tracking-tight sm:text-5xl">El mundo en inglés, tu próxima lección.</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Leer noticias internacionales en inglés transforma cada titular en una oportunidad para mejorar tu nivel y comprender el mundo con más profundidad.</p></section><section className="mt-10"><ReadingBenefits /></section><section className="mt-14"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600 dark:text-indigo-400">Directorio</p><h2 className="mt-2 font-heading text-3xl font-bold tracking-tight">Periódicos para explorar</h2><p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">Elige una fuente, lee un artículo breve y vuelve mañana para descubrir una nueva perspectiva.</p></div><div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{newspapers.map((newspaper) => <NewspaperCard key={newspaper.name} newspaper={newspaper}/>)}</div></section></main></AppShell>;
}