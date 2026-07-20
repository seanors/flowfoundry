import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { WorkflowCard } from "@/components/workflow-card";
import { categories, getCategoryBySlug } from "@/data/categories";
import { workflows } from "@/data/workflows";
import { getCategoryAccent } from "@/lib/categoryColors";
import { truncateDescription } from "@/lib/seo";

type CategoryPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = getCategoryBySlug(params.slug);
  if (!category) {
    return { title: "Category not found" };
  }

  const description = truncateDescription(
    `${category.description} Browse practical AI workflows for ${category.name} on FlowFoundry.`
  );
  const title = category.name;
  const url = `/categories/${category.slug}`;

  return {
    title,
    description,
    openGraph: {
      type: "website",
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

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const accent = getCategoryAccent(category.name);
  const categoryWorkflows = workflows.filter(
    (workflow) => workflow.category === category.name
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
          <Link
            href="/explore"
            className="text-sm font-medium text-forge-blue hover:underline"
          >
            ← All categories
          </Link>

          <div className="mt-6">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${accent.bgClass} ${accent.textClass}`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${accent.dotClass}`}
                aria-hidden="true"
              />
              Category
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-forge-black sm:text-4xl">
              {category.name}
            </h1>
            <div
              className={`mt-4 h-1 w-16 rounded-full ${accent.dotClass}`}
              aria-hidden="true"
            />
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {category.description}
            </p>
          </div>

          {categoryWorkflows.length > 0 ? (
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categoryWorkflows.map((workflow) => (
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
          ) : (
            <div className="mt-16 rounded-xl border border-dashed border-black/10 bg-white px-8 py-16 text-center">
              <p className="text-lg font-medium text-forge-black">
                No workflows in this category yet
              </p>
              <p className="mt-2 text-muted-foreground">
                We are forging new ones — check back soon, or explore other
                categories.
              </p>
              <Link
                href="/explore"
                className="mt-8 inline-flex rounded-lg bg-brand-gradient px-6 py-3 text-sm font-medium text-white shadow-sm transition-opacity hover:opacity-90"
              >
                Browse categories
              </Link>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}