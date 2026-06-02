interface SectionHeaderProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  heading,
  subheading,
  align = "center",
  light = false,
  className = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const headingColor = light ? "text-white" : "text-navy";
  const subColor = light ? "text-white/75" : "text-slate";

  return (
    <div className={`flex flex-col ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-widest text-gold mb-3">{eyebrow}</p>
      )}
      <h2 className={`text-3xl lg:text-4xl font-bold ${headingColor} leading-tight`}>{heading}</h2>
      {subheading && (
        <p className={`mt-4 text-lg max-w-2xl leading-relaxed ${subColor}`}>{subheading}</p>
      )}
    </div>
  );
}
