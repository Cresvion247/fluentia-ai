const signature = [0x50, 0x4b, 0x05, 0x06];
const decode = (value) => value.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const attr = (xml, name) => (xml.match(new RegExp(`<w:${name} w:val="([^"]+)"`)) || [])[1];
const twips = (value) => value ? `${Number(value) / 15}px` : undefined;

async function unpackDocument(bytes) {
  const view = new DataView(bytes.buffer);
  let end = -1;
  for (let index = bytes.length - 4; index >= 0; index -= 1) if (signature.every((value, offset) => bytes[index + offset] === value)) { end = index; break; }
  let cursor = view.getUint32(end + 16, true), documentXml = "";
  while (view.getUint32(cursor, true) === 0x02014b50) {
    const nameSize = view.getUint16(cursor + 28, true), extra = view.getUint16(cursor + 30, true), comment = view.getUint16(cursor + 32, true), name = new TextDecoder().decode(bytes.slice(cursor + 46, cursor + 46 + nameSize)), method = view.getUint16(cursor + 10, true), size = view.getUint32(cursor + 20, true), offset = view.getUint32(cursor + 42, true), localName = view.getUint16(offset + 26, true), localExtra = view.getUint16(offset + 28, true);
    if (name === "word/document.xml") { const zipped = bytes.slice(offset + 30 + localName + localExtra, offset + 30 + localName + localExtra + size), raw = method === 8 ? await new Response(new Blob([zipped]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).arrayBuffer() : zipped.buffer; documentXml = new TextDecoder().decode(raw); }
    cursor += 46 + nameSize + extra + comment;
  }
  return documentXml;
}

const runStyle = (xml) => {
  const font = (xml.match(/<w:rFonts[^>]*w:(?:ascii|hAnsi)="([^"]+)"/) || [])[1], size = attr(xml, "sz"), fill = (xml.match(/<w:shd[^>]*w:fill="([^"]+)"/) || [])[1], underline = attr(xml, "u"), bold = /<w:b(?:\s|\/|>)/.test(xml) && attr(xml, "b") !== "0", italic = /<w:i(?:\s|\/|>)/.test(xml) && attr(xml, "i") !== "0";
  return { fontFamily: font ? `"${font}", sans-serif` : undefined, fontWeight: bold ? "700" : undefined, fontStyle: italic ? "italic" : undefined, textDecoration: underline && underline !== "none" ? "underline" : undefined, color: attr(xml, "color") ? `#${attr(xml, "color")}` : undefined, backgroundColor: fill && fill !== "FFFFFF" && fill !== "auto" ? `#${fill}` : undefined, fontSize: size ? `${Number(size) / 2}pt` : undefined, verticalAlign: attr(xml, "vertAlign") === "superscript" ? "super" : attr(xml, "vertAlign") === "subscript" ? "sub" : undefined };
};

const paragraphStyle = (xml) => {
  const properties = (xml.match(/<w:pPr>([\s\S]*?)<\/w:pPr>/) || [])[1] || "", spacing = (properties.match(/<w:spacing[^>]*>/) || [""])[0], indent = (properties.match(/<w:ind[^>]*>/) || [""])[0], alignment = attr(properties, "jc");
  return { textAlign: alignment === "both" ? "justify" : alignment, marginTop: twips(attr(spacing, "before")), marginBottom: twips(attr(spacing, "after")), marginLeft: twips(attr(indent, "left")), marginRight: twips(attr(indent, "right")), textIndent: twips(attr(indent, "firstLine")) };
};

const parseParagraphs = (xml) => [...xml.matchAll(/<w:p(?:\s[^>]*)?>([\s\S]*?)<\/w:p>/g)].map((paragraph, index) => ({ id: index, style: paragraphStyle(paragraph[1]), runs: [...paragraph[1].matchAll(/<w:r(?:\s[^>]*)?>([\s\S]*?)<\/w:r>/g)].map((run, runIndex) => ({ id: runIndex, style: runStyle(run[1]), text: decode([...run[1].matchAll(/<w:t(?:\s[^>]*)?>([\s\S]*?)<\/w:t>/g)].map((text) => text[1]).join("") + (run[1].includes("<w:tab") ? "\u00a0\u00a0\u00a0\u00a0" : "") + (run[1].includes("<w:br") ? "\n" : "")) })) }));

export async function parseDocx(url) {
  const bytes = new Uint8Array(await (await fetch(url)).arrayBuffer()), xml = await unpackDocument(bytes);
  const tables = [...xml.matchAll(/<w:tbl(?:\s[^>]*)?>([\s\S]*?)<\/w:tbl>/g)].map((table, tableIndex) => [...table[1].matchAll(/<w:tr(?:\s[^>]*)?>([\s\S]*?)<\/w:tr>/g)].map((row, rowIndex) => ({ id: `${tableIndex}-${rowIndex}`, cells: [...row[1].matchAll(/<w:tc(?:\s[^>]*)?>([\s\S]*?)<\/w:tc>/g)].map((cell, cellIndex) => ({ id: cellIndex, colSpan: Number(attr(cell[1], "gridSpan") || 1), paragraphs: parseParagraphs(cell[1]) })) })));
  return { tables, rows: tables[0] || [], paragraphs: parseParagraphs(xml.replace(/<w:tbl(?:\s[^>]*)?>[\s\S]*?<\/w:tbl>/g, "")) };
}