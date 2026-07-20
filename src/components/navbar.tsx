import Link from "next/link";
import FlowFoundryLogo from "@/components/FlowFoundryLogo";

const navLinks = [
  { label: "Explore", href: "/explore" },
  { label: "Categories", href: "/explore" },
  { label: "Resources", href: "/resources" },
  { label: "Submit an idea", href: "/submit" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "About", href: "#" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-foundry-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <Link href="/" className="inline-flex items-center" aria-label="FlowFoundry home">
          <FlowFoundryLogo height={28} />
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-forge-black/70 transition-colors hover:text-forge-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}