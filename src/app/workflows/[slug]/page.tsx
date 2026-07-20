import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkflowBySlug, workflows } from "@/data/workflows";
import { truncateDescription } from "@/lib/seo";

const categoryStyles: Record<string, string> = {
  "Project Management": "bg-forge-blue/10 text-forge-blue",
  "Knowledge Management": "bg-flow-purple/10 text-flow-purple",
  Operations: "bg-forge-black/5 text-forge-black/70",
};

type WorkflowPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return workflows.map((workflow) => ({ slug: workflow.slug }));
}

export function generateMetadata({ params }: WorkflowPageProps): Metadata {
  const workflow = getWorkflowBySlug(params.slug);
  if (!workflow) {
    return { title: "Workflow not found" };
  }

  const description = truncateDescription(workflow.description);
  const title = workflow.title;
  const url = `/workflows/${workflow.slug}`;

  return {
    title,
    description,
    openGraph: {
      type: "article",
      siteName: "FlowFoundry",
      title,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function WorkflowPage({ params }: WorkflowPageProps) {
  const workflow = getWorkflowBySlug(params.slug);

  if (!workflow) {
    notFound();
  }

  const categoryClass =
    categoryStyles[workflow.category] ??
    "bg-forge-black/5 text-forge-black/70";

  return (
    <div className="min-h-screen bg-foundry-white">
      <header className="border-b border-black/5 bg-foundry-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 sm:px-8">
          <Link
            href="/"
            className="text-lg font-medium tracking-tight text-forge-black"
          >
            FlowFoundry
          </Link>
          <Link
            href="/#featured"
            className="text-sm text-forge-black/70 transition-colors hover:text-forge-black"
          >
            All workflows
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-20">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${categoryClass}`}
        >
          {workflow.category}
        </span>

        <h1 className="mt-6 text-3xl font-semibold tracking-tight text-forge-black sm:text-4xl lg:text-5xl">
          {workflow.title}
        </h1>

        <p className="mt-4 text-sm text-muted-foreground">
          {workflow.difficulty} · {workflow.timeSaved}
        </p>

        <section className="mt-14">
          <h2 className="text-xl font-semibold text-forge-black">Overview</h2>
          <p className="mt-4 text-base leading-relaxed text-forge-black/80">
            {workflow.description}
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold text-forge-black">Best For</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-forge-black/80">
            {workflow.audience.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold text-forge-black">Problem</h2>
          <p className="mt-4 text-base leading-relaxed text-forge-black/80">
            {workflow.problem}
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold text-forge-black">Solution</h2>
          <p className="mt-4 text-base leading-relaxed text-forge-black/80">
            {workflow.solution}
          </p>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold text-forge-black">
            Workflow Steps
          </h2>
          <ol className="mt-6 space-y-5">
            {workflow.steps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forge-blue/10 text-sm font-medium text-forge-blue">
                  {index + 1}
                </span>
                <p className="pt-1 text-base leading-relaxed text-forge-black/80">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold text-forge-black">
            Recommended Tools
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {workflow.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md bg-white px-3 py-1.5 text-sm text-forge-black/80 ring-1 ring-black/10"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold text-forge-black">
            Example Prompt
          </h2>
          <pre className="mt-4 overflow-x-auto rounded-xl border border-black/10 bg-white p-5 text-left text-sm leading-relaxed text-forge-black/90 whitespace-pre-wrap font-mono select-all">
            {workflow.prompt}
          </pre>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold text-forge-black">Resources</h2>
          <ul className="mt-4 space-y-3">
            {workflow.resources.map((resource) => (
              <li key={resource.url}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3"
                >
                  <span className="text-base font-medium text-forge-blue group-hover:underline">
                    {resource.title}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {resource.type}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-16 border-t border-black/5 pt-8">
          <Link
            href="/"
            className="text-sm font-medium text-forge-blue hover:underline"
          >
            ← Back to FlowFoundry
          </Link>
        </div>
      </article>
    </div>
  );
}