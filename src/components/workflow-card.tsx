import Link from "next/link";
import { getCategoryAccent } from "@/lib/categoryColors";

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
  const accent = getCategoryAccent(category);

  return (
    <Link href={href} className="group block h-full">
      <article className="flex h-full flex-col rounded-xl border border-black/8 bg-white p-6 transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-black/5">
        <span
          className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${accent.bgClass} ${accent.textClass}`}
        >
          <span
            className={`h-1.5 w-1.5 shrink-0 rounded-full ${accent.dotClass}`}
            aria-hidden="true"
          />
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