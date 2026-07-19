import { CategoryCard } from "@/components/category-card";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { categories } from "@/data/categories";
import { workflows } from "@/data/workflows";

export const metadata = {
  title: "Explore | FlowFoundry",
  description: "Browse AI workflows by category.",
};

export default function ExplorePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
          <h1 className="text-3xl font-semibold tracking-tight text-forge-black sm:text-4xl">
            Explore workflows
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Browse by category to find practical AI workflows for how you work.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => {
              const count = workflows.filter(
                (workflow) => workflow.category === category.name
              ).length;

              return (
                <CategoryCard
                  key={category.id}
                  name={category.name}
                  description={category.description}
                  slug={category.slug}
                  icon={category.icon}
                  count={count}
                />
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}