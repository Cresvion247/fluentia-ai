import React, { useEffect, useRef } from "react";

export default function TokkerMessages({ messages, loading }) {
  const endRef = useRef(null);
  useEffect(() => endRef.current?.scrollIntoView({ behavior: "smooth" }), [messages, loading]);
  return <div className="min-h-[390px] space-y-4 overflow-y-auto rounded-2xl border border-indigo-100 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
    {messages.map((message, index) => <div key={index} className={message.role === "user" ? "ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-indigo-600 px-4 py-3 text-white" : "max-w-[85%] rounded-2xl rounded-bl-sm bg-indigo-50 px-4 py-3 text-slate-800 dark:bg-white/10 dark:text-slate-100"}><p className="mb-1 text-xs font-bold uppercase tracking-wider opacity-70">{message.role === "user" ? "Tú" : "Tokker"}</p><p className="whitespace-pre-wrap text-sm leading-6">{message.content}</p></div>)}
    {loading && <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-indigo-50 px-4 py-3 text-sm font-medium text-indigo-700 dark:bg-white/10 dark:text-indigo-200">Tokker está preparando tu siguiente paso…</div>}
    <div ref={endRef} />
  </div>;
}