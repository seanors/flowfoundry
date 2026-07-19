import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { WorkflowCard } from "@/components/workflow-card";
import { categories, getCategoryBySlug } from "@/data/categories";
import { workflows } from "@/data/workflows";

type CategoryPageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug);
  if (!category) {
    return { title: "Category not found | FlowFoundry" };
  }
  return {
    title: `${category.name} | FlowFoundry`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

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

          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-forge-black sm:text-4xl">
            {category.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {category.description}
          </p>

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
                className="mt-8 inline-flex rounded-lg bg-forge-blue px-6 py-3 text-sm font-medium text-white hover:bg-forge-blue/90"
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