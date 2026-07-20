import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { resourceCategories, resources } from "@/data/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Curated guides, tools, templates, and consultants to help you put FlowFoundry workflows into practice.",
  openGraph: {
    title: "Resources",
    description:
      "Curated guides, tools, templates, and consultants to help you put FlowFoundry workflows into practice.",
    url: "/resources",
    type: "website",
    siteName: "FlowFoundry",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources",
    description:
      "Curated guides, tools, templates, and consultants to help you put FlowFoundry workflows into practice.",
  },
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
          <h1 className="text-3xl font-semibold tracking-tight text-forge-black sm:text-4xl">
            Resources
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Guides, tools, templates, and people who can help you go deeper on
            the systems behind these workflows.
          </p>

          <div className="mt-14 space-y-14">
            {resourceCategories.map((category) => {
              const items = resources.filter(
                (resource) => resource.category === category
              );
              if (items.length === 0) return null;

              return (
                <div key={category}>
                  <h2 className="text-xl font-semibold text-forge-black">
                    {category}
                  </h2>
                  <ul className="mt-6 space-y-5">
                    {items.map((resource) => (
                      <li key={resource.id}>
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group block"
                        >
                          <p className="text-base font-medium text-forge-blue group-hover:underline">
                            {resource.name}
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {resource.type} · {resource.source}
                          </p>
                          <p className="mt-1 max-w-3xl text-sm leading-relaxed text-forge-black/70">
                            {resource.notes}
                          </p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}