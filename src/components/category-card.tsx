import Link from "next/link";
import {
  BookOpen,
  Bot,
  ClipboardList,
  Settings,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  ClipboardList,
  BookOpen,
  Zap,
  Settings,
  Workflow,
  Bot,
};

type CategoryCardProps = {
  name: string;
  description: string;
  slug: string;
  icon: string;
  count: number;
};

export function CategoryCard({
  name,
  description,
  slug,
  icon,
  count,
}: CategoryCardProps) {
  const Icon = icons[icon] ?? ClipboardList;

  return (
    <Link href={`/categories/${slug}`} className="group block h-full">
      <article className="flex h-full flex-col rounded-xl border border-black/8 bg-white p-6 transition-all duration-200 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-black/5">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forge-blue/10 text-forge-blue">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <h3 className="mt-4 text-lg font-medium text-forge-black">{name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <p className="mt-6 text-sm font-medium text-forge-black/60">
          {count} {count === 1 ? "workflow" : "workflows"}
        </p>
      </article>
    </Link>
  );
}