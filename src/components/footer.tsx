import Link from "next/link";
import FlowFoundryLogo from "@/components/FlowFoundryLogo";

const navLinks = [
  { label: "Explore", href: "/explore" },
  { label: "Categories", href: "/explore" },
  { label: "Resources", href: "#" },
  { label: "Newsletter", href: "/#newsletter" },
  { label: "About", href: "#" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-foundry-white px-6 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center sm:items-start sm:text-left">
        <div className="flex w-full flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" aria-label="FlowFoundry home">
            <FlowFoundryLogo height={28} />
          </Link>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-end">
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
        <p className="w-full text-sm text-muted-foreground">
          © {new Date().getFullYear()} FlowFoundry. All rights reserved.
        </p>
      </div>
    </footer>
  );
}