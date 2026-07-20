// FlowFoundry logo — Option A "flow-forge" mark.
// Drop this file into src/components/FlowFoundryLogo.tsx
// Usage: <FlowFoundryLogo />  or  <FlowFoundryLogo showWordmark={false} /> for just the mark.

type FlowFoundryLogoProps = {
  showWordmark?: boolean;
  height?: number;
  className?: string;
};

export default function FlowFoundryLogo({
  showWordmark = true,
  height = 32,
  className = "",
}: FlowFoundryLogoProps) {
  const markSize = height;
  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: height * 0.4 }}
    >
      <svg
        width={markSize}
        height={markSize}
        viewBox="0 0 64 64"
        role="img"
        aria-label="FlowFoundry"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ff-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7C3AED" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="64" height="64" rx="14" fill="url(#ff-grad)" />
        <path
          d="M18 20 H46 M18 32 H40 M18 44 H34"
          stroke="#FFFFFF"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="44" cy="44" r="6" fill="#FFFFFF" />
      </svg>
      {showWordmark && (
        <span
          style={{
            fontWeight: 600,
            fontSize: height * 0.7,
            letterSpacing: "-0.01em",
            color: "#111111",
          }}
        >
          Flow
          <span
            style={{
              background: "linear-gradient(135deg,#7C3AED,#2563EB)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Foundry
          </span>
        </span>
      )}
    </span>
  );
}
