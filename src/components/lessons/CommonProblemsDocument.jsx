import React from "react";

const sourceUrl = "https://media.base44.com/files/public/6a5d04483fe35abf39399c85/448597b30_Commonproblems.docx";
const viewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(sourceUrl)}`;

export default function CommonProblemsDocument() {
  return <iframe title="Documento Common Problems" src={viewerUrl} className="h-[80vh] w-full rounded-xl border border-slate-200 bg-white shadow-sm dark:border-white/15" />;
}