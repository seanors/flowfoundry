"use client";

import { useMemo, useState } from "react";
import { WorkflowCard } from "@/components/workflow-card";
import { workflows } from "@/data/workflows";

const examplePills = [
  "Create a project plan",
  "Summarize meeting notes",
  "Build an SOP",
  "Automate reporting",
] as const;

function normalizeToken(token: string) {
  return token.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function tokenMatches(haystack: string, token: string) {
  if (!token) return false;
  if (haystack.includes(token)) return true;
  if (token.endsWith("ing") && haystack.includes(token.slice(0, -3))) return true;
  if (token.endsWith("s") && haystack.includes(token.slice(0, -1))) return true;
  if (haystack.includes(`${token}s`)) return true;
  return false;
}

function matchesQuery(query: string) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return [];

  const tokens = normalized
    .split(/\s+/)
    .map(normalizeToken)
    .filter((token) => token.length >= 3);

  return workflows.filter((workflow) => {
    const haystack = [
      workflow.title,
      workflow.description,
      workflow.category,
      ...workflow.tools,
    ]
      .join(" ")
      .toLowerCase();

    if (haystack.includes(normalized)) return true;
    if (tokens.length === 0) return false;

    // Prefer full-token matches; require most words so short queries stay useful
    const hitCount = tokens.filter((token) =>
      tokenMatches(haystack, token)
    ).length;

    if (tokens.length <= 2) return hitCount === tokens.length;
    return hitCount >= Math.ceil(tokens.length * 0.6);
  });
}

export function Hero() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => matchesQuery(query), [query]);
  const isSearching = query.trim().length > 0;

  function runSearch(value: string) {
    setQuery(value);
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-forge-black sm:text-5xl lg:text-6xl">
          Where AI workflows are forged.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Discover practical AI workflows, tools, and resources that help you
          work smarter.
        </p>

        <div className="mx-auto mt-10 flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
          <input
            type="search"
            value={query}
            onChange={(event) => runSearch(event.target.value)}
            placeholder="What are you trying to accomplish?"
            className="h-12 flex-1 rounded-lg border border-black/10 bg-white px-4 text-base text-forge-black placeholder:text-muted-foreground focus:border-forge-blue focus:outline-none focus:ring-2 focus:ring-forge-blue/20"
            aria-label="Search workflows"
          />
          <button
            type="button"
            onClick={() => runSearch(query)}
            className="h-12 rounded-lg bg-forge-blue px-8 text-sm font-medium text-white transition-colors hover:bg-forge-blue/90 sm:shrink-0"
          >
            Search
          </button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {examplePills.map((pill) => (
            <button
              key={pill}
              type="button"
              onClick={() => runSearch(pill)}
              className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-forge-black/80 transition-colors hover:border-forge-blue/30 hover:text-forge-black"
            >
              {pill}
            </button>
          ))}
        </div>
      </div>

      {isSearching && (
        <div className="mx-auto mt-14 max-w-6xl text-left">
          <p className="text-sm font-medium text-forge-black/60">
            {results.length === 0
              ? `No workflows match "${query.trim()}"`
              : `${results.length} ${results.length === 1 ? "result" : "results"} for "${query.trim()}"`}
          </p>

          {results.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {results.map((workflow) => (
                <WorkflowCard
                  key={workflow.id}
                  title={workflow.title}
                  category={workflow.category}
                  benefit={workflow.timeSaved}
                  tools={workflow.tools}
                  href={`/workflows/${workflow.slug}`}
                />
              ))}
            </div>
          ) : null}
        </div>
      )}
    </section>
  );
}