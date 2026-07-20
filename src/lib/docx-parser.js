const signature = [0x50, 0x4b, 0x05, 0x06];
const decode = (value) => value.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const attr = (xml, name) => (xml.match(new RegExp(`<w:${name} w:val="([^"]+)"`)) || [])[1];
const twips = (value) => value ? `${Number(value) / 15}px` : undefined;

async function unpackDocx(bytes) {
  const view = new DataView(bytes.buffer);
  let end = -1;
  for (let index = bytes.length - 4; index >= 0; index -= 1) if (signature.every((value, offset) => bytes[index + offset] === value)) { end = index; break; }
  let cursor = view.getUint32(end + 16, true), files = {};
  while (view.getUint32(cursor, true) === 0x02014b50) {
    const nameSize = view.getUint16(cursor + 28, true), extra = view.getUint16(cursor + 30, true), comment = view.getUint16(cursor + 32, true), name = new TextDecoder().decode(bytes.slice(cursor + 46, cursor + 46 + nameSize)), method = view.getUint16(cursor + 10, true), size = view.getUint32(cursor + 20, true), offset = view.getUint32(cursor + 42, true), localName = view.getUint16(offset + 26, true), localExtra = view.getUint16(offset + 28, true), zipped = bytes.slice(offset + 30 + localName + localExtra, offset + 30 + localName + localExtra + size);
    if (name === "word/document.xml" || name === "word/styles.xml") { const raw = method === 8 ? await new Response(new Blob([zipped]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).arrayBuffer() : zipped.buffer; files[name] = new TextDecoder().decode(raw); }
    cursor += 46 + nameSize + extra + comment;
  }
  return files;
}

const getRunStyle = (xml) => {
  const font = (xml.match(/<w:rFonts[^>]*w:(?:ascii|hAnsi)="([^"]+)"/) || [])[1], size = attr(xml, "sz"), fill = (xml.match(/<w:shd[^>]*w:fill="([^"]+)"/) || [])[1], underline = attr(xml, "u"), bold = /<w:b(?:\s|\/|>)/.test(xml) && attr(xml, "b") !== "0", italic = /<w:i(?:\s|\/|>)/.test(xml) && attr(xml, "i") !== "0";
  return { fontFamily: font ? `"${font}", sans-serif` : undefined, fontWeight: bold ? "700" : undefined, fontStyle: italic ? "italic" : undefined, textDecoration: underline && underline !== "none" ? "underline" : undefined, color: attr(xml, "color") ? `#${attr(xml, "color")}` : undefined, backgroundColor: fill && fill !== "FFFFFF" && fill !== "auto" ? `#${fill}` : undefined, fontSize: size ? `${Number(size) / 2}pt` : undefined, verticalAlign: attr(xml, "vertAlign") === "superscript" ? "super" : attr(xml, "vertAlign") === "subscript" ? "sub" : undefined };
};

const getParagraphStyle = (xml) => {
  const properties = (xml.match(/<w:pPr>([\s\S]*?)<\/w:pPr>/) || [])[1] || "", spacing = (properties.match(/<w:spacing[^>]*>/) || [""])[0], indent = (properties.match(/<w:ind[^>]*>/) || [""])[0], alignment = attr(properties, "jc");
  return { textAlign: alignment === "both" ? "justify" : alignment, marginTop: twips(attr(spacing, "before")), marginBottom: twips(attr(spacing, "after")), marginLeft: twips(attr(indent, "left")), marginRight: twips(attr(indent, "right")), textIndent: twips(attr(indent, "firstLine")), breakBefore: properties.includes("w:pageBreakBefore") ? "page" : undefined };
};

export async function parseDocx(url) {
  const bytes = new Uint8Array(await (await fetch(url)).arrayBuffer()), files = await unpackDocx(bytes), blocks = [...files["word/document.xml"].matchAll(/<w:p(?: [^>]*)?>([\s\S]*?)<\/w:p>/g)];
  return blocks.map((block, index) => {
    const runs = [...block[1].matchAll(/<w:r(?: [^>]*)?>([\s\S]*?)<\/w:r>/g)].map((run, runIndex) => ({ id: runIndex, style: getRunStyle(run[1]), text: decode([...run[1].matchAll(/<w:t(?:\s[^>]*)?>([\s\S]*?)<\/w:t>/g)].map((text) => text[1]).join("") + (run[1].includes("<w:tab") ? "\u00a0\u00a0\u00a0\u00a0" : "") + (run[1].includes("<w:br") ? "\n" : "")) }));
    return { id: index, style: getParagraphStyle(block[1]), runs };
  });
}