import React from "react";
import AppShell from "@/components/AppShell";
import Hero from "@/components/home/Hero";
import Methodology from "@/components/home/Methodology";
import Benefits from "@/components/home/Benefits";
import AiTools from "@/components/home/AiTools";
import Control from "@/components/home/Control";
export default function Home(){return <AppShell><main><Hero/><Methodology/><Benefits/><AiTools/><Control/></main><footer className="border-t border-slate-200 px-5 py-7 text-center text-sm text-slate-500 dark:border-white/10">EnglishPath · Aprendizaje personalizado de inglés</footer></AppShell>}