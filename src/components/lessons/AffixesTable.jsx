import React from "react";

export default function AffixesTable({ group }) {
  return <section className="mb-10"><h2 className="mb-2 text-xl font-bold">{group.title}</h2><div className="space-y-1">{group.rows.map(([affix, meaning, examples]) => <div key={affix} className="grid grid-cols-[1.1fr_1fr_0.45fr_1.4fr] gap-x-3 text-[15px] leading-6 sm:text-[17px]"><strong>{affix}</strong><span className="italic">{meaning}</span><span>e.g.</span><span className="italic">{examples}</span></div>)}</div></section>;
}