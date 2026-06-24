// Renders a JSON-LD <script> tag. Server component.
// Escapes characters that could break out of the <script> block or an inline
// JS context: `<` `>` `&` and the U+2028/U+2029 line separators (XSS-safe).
function safeJsonLd(data: object): string {
  let out = "";
  for (const ch of JSON.stringify(data)) {
    const code = ch.codePointAt(0)!;
    if (code === 0x3c || code === 0x3e || code === 0x26 || code === 0x2028 || code === 0x2029) {
      out += "\\u" + code.toString(16).padStart(4, "0");
    } else {
      out += ch;
    }
  }
  return out;
}

export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}
