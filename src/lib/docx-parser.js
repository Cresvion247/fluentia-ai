const signature = [0x50, 0x4b, 0x05, 0x06];
const decode = (value) => value.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const attr = (xml, name) => (xml.match(new RegExp(`<w:${name} w:val="([^"]+)"`)) || [])[1];
const twips = (value) => value ? `${Number(value) / 15}px` : undefined;

async function getDocumentXml(bytes) {
  const view = new DataView(bytes.buffer);
  let end = -1;
  for (let index = bytes.length - 4; index >= 0; index -= 1) if (signature.every((value, offset) => bytes[index + offset] === value)) { end = index; break; }
  let cursor = view.getUint32(end + 16, true), entry;
  while (view.getUint32(cursor, true) === 0x02014b50) {
    const nameSize = view.getUint16(cursor + 28, true), extra = view.getUint16(cursor + 30, true), comment = view.getUint16(cursor + 32, true), name = new TextDecoder().decode(bytes.slice(cursor + 46, cursor + 46 + nameSize));
    if (name === "word/document.xml") { entry = { method: view.getUint16(cursor + 10, true), size: view.getUint32(cursor + 20, true), offset: view.getUint32(cursor + 42, true) }; break; }
    cursor += 46 + nameSize + extra + comment;
  }
  const nameSize = view.getUint16(entry.offset + 26, true), extra = view.getUint16(entry.offset + 28, true), start = entry.offset + 30 + nameSize + extra, zipped = bytes.slice(start, start + entry.size);
  const raw = entry.method === 8 ? await new Response(new Blob([zipped]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).arrayBuffer() : zipped.buffer;
  return new TextDecoder().decode(raw);
}

const getRunStyle = (xml) => ({
  fontWeight: /<w:b(?:\s[^>]*)?\/>|<w:b(?:\s[^>]*)?>/.test(xml) ? "700" : undefined,
  fontStyle: /<w:i(?:\s[^>]*)?\/>|<w:i(?:\s[^>]*)?>/.test(xml) ? "italic" : undefined,
  textDecoration: /<w:u(?:\s[^>]*)?\/>|<w:u(?:\s[^>]*)?>/.test(xml) ? "underline" : undefined,
  color: attr(xml, "color") ? `#${attr(xml, "color")}` : undefined,
  fontSize: attr(xml, "sz") ? `${Number(attr(xml, "sz")) / 2}pt` : undefined,
});

const getParagraphStyle = (xml) => {
  const properties = (xml.match(/<w:pPr>([\s\S]*?)<\/w:pPr>/) || [])[1] || "", spacing = (properties.match(/<w:spacing[^>]*>/) || [""])[0], indent = (properties.match(/<w:ind[^>]*>/) || [""])[0], alignment = attr(properties, "jc");
  return { textAlign: alignment === "both" ? "justify" : alignment, marginTop: twips(attr(spacing, "before")), marginBottom: twips(attr(spacing, "after")), lineHeight: attr(spacing, "line") ? Number(attr(spacing, "line")) / 240 : undefined, marginLeft: twips(attr(indent, "left")), textIndent: twips(attr(indent, "firstLine")), breakBefore: properties.includes("w:pageBreakBefore") ? "page" : undefined };
};

export async function parseDocx(url) {
  const bytes = new Uint8Array(await (await fetch(url)).arrayBuffer()), xml = await getDocumentXml(bytes), blocks = [...xml.matchAll(/<w:p(?: [^>]*)?>([\s\S]*?)<\/w:p>/g)];
  return blocks.map((block, index) => {
    const runs = [...block[1].matchAll(/<w:r(?: [^>]*)?>([\s\S]*?)<\/w:r>/g)].map((run, runIndex) => ({ id: runIndex, style: getRunStyle(run[1]), text: decode([...run[1].matchAll(/<w:t(?:\s[^>]*)?>([\s\S]*?)<\/w:t>/g)].map((text) => text[1]).join("") + (run[1].includes("<w:tab") ? "\u00a0\u00a0\u00a0\u00a0" : "") + (run[1].includes("<w:br") ? "\n" : "")) }));
    return { id: index, style: getParagraphStyle(block[1]), runs };
  }).filter((paragraph) => paragraph.runs.length);
}