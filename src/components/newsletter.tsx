export function Newsletter() {
  return (
    <section id="newsletter" className="px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-forge-black sm:text-3xl">
          Get new workflows weekly
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Practical AI workflows, tool recommendations, and step-by-step guides
          delivered to your inbox every week.
        </p>
        <div className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row">
          <input
            type="email"
            placeholder="you@company.com"
            className="h-12 flex-1 rounded-lg border border-black/10 bg-white px-4 text-base text-forge-black placeholder:text-muted-foreground focus:border-forge-blue focus:outline-none focus:ring-2 focus:ring-forge-blue/20"
          />
          <button
            type="button"
            className="h-12 rounded-lg bg-forge-blue px-8 text-sm font-medium text-white transition-colors hover:bg-forge-blue/90 sm:shrink-0"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}