import Link from "next/link";

const categoryStyles: Record<string, string> = {
  "Project Management": "bg-forge-blue/10 text-forge-blue",
  "Knowledge Management": "bg-flow-purple/10 text-flow-purple",
  Operations: "bg-forge-black/5 text-forge-black/70",
};

type WorkflowCardProps = {
  title: string;
  category: string;
  benefit: string;
  tools: string[];
  href: string;
};

export function WorkflowCard({
  title,
  category,
  benefit,
  tools,
  href,
}: WorkflowCardProps) {
  const categoryClass =
    categoryStyles[category] ?? "bg-forge-black/5 text-forge-black/70";

  return (
    <Link href={href} className="group block h-full">
      <article className="flex h-full flex-col rounded-xl border border-black/8 bg-white p-6 transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-black/5">
        <span
          className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium ${categoryClass}`}
        >
          {category}
        </span>
        <h3 className="mt-4 text-lg font-medium leading-snug text-forge-black">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {benefit}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-md bg-foundry-white px-2.5 py-1 text-xs text-forge-black/70 ring-1 ring-black/5"
            >
              {tool}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}