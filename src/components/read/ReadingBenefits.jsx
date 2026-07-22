import React from "react";
import { Brain, Globe2, Lightbulb } from "lucide-react";

const benefits = [
  { icon: Brain, title: "Impulsa tu inglés", items: ["Amplía tu vocabulario con palabras en contexto.", "Observa gramática compleja y estilos periodísticos reales.", "Entrena skimming para la idea general y scanning para localizar datos."] },
  { icon: Globe2, title: "Abre tu perspectiva", items: ["Reconoce cómo el contexto cultural puede influir en una noticia.", "Desarrolla pensamiento crítico al comparar diferentes enfoques.", "Cultiva empatía al conocer experiencias y realidades diversas."] },
  { icon: Lightbulb, title: "Consejos para estudiantes", items: ["No busques cada palabra: infiere el significado por el contexto.", "Varía las fuentes para contrastar perspectivas.", "Empieza con tus secciones favoritas: cultura, deportes o tecnología."] }
];

export default function ReadingBenefits() {
  return <section className="grid gap-5 md:grid-cols-3">{benefits.map(({ icon: Icon, title, items }) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"><div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300"><Icon size={22}/></div><h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">{title}</h2><ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{items.map((item) => <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500"/>{item}</li>)}</ul></article>)}</section>;
}