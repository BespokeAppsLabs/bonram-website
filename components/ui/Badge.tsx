interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "navy" | "mist";
  className?: string;
}

const variants = {
  gold: "bg-gold/10 text-gold-muted border border-gold/30",
  navy: "bg-navy text-white",
  mist: "bg-mist text-slate border border-border",
};

export default function Badge({ children, variant = "mist", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
