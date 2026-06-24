// Renders a JSON-LD <script> tag. Server component.
// Escapes `<` so data containing "</script>" can't break out of the tag (XSS).
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
