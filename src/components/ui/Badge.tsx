interface BadgeProps {
  variant: "featured" | "good-price" | "new-arrival";
  className?: string;
}

const badgeConfig = {
  featured: {
    label: "Destacado",
    className: "bg-amber-500/90 text-slate-900",
  },
  "good-price": {
    label: "Buen precio",
    className: "bg-green-500/90 text-white",
  },
  "new-arrival": {
    label: "Nuevo ingreso",
    className: "bg-blue-600/90 text-white",
  },
};

export default function Badge({ variant, className = "" }: BadgeProps) {
  const config = badgeConfig[variant];

  return (
    <span
      className={`inline-block rounded-md px-2.5 py-1 text-xs font-bold tracking-wide uppercase backdrop-blur-sm ${config.className} ${className}`}
    >
      {config.label}
    </span>
  );
}
