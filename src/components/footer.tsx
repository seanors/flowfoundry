const navLinks = [
  "Explore",
  "Categories",
  "Resources",
  "Newsletter",
  "About",
] as const;

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-foundry-white px-6 py-12 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center sm:items-start sm:text-left">
        <div className="flex w-full flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-lg font-medium tracking-tight text-forge-black">
            FlowFoundry
          </span>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:justify-end">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm text-forge-black/70 transition-colors hover:text-forge-black"
              >
                {link}
              </a>
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