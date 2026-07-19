import Link from "next/link";

const navLinks = [
  { label: "Explore", href: "/explore" },
  { label: "Categories", href: "/explore" },
  { label: "Resources", href: "#" },
  { label: "Newsletter", href: "#newsletter" },
  { label: "About", href: "#" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-foundry-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <Link
          href="/"
          className="text-lg font-medium tracking-tight text-forge-black"
        >
          FlowFoundry
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