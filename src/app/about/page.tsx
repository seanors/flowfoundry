import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const description =
  "FlowFoundry is a curated library of practical AI workflows—helping project managers, ops leaders, consultants, and knowledge workers work better.";

export const metadata: Metadata = {
  title: "About",
  description,
  openGraph: {
    title: "About",
    description,
    url: "/about",
    type: "website",
    siteName: "FlowFoundry",
  },
  twitter: {
    card: "summary_large_image",
    title: "About",
    description,
  },
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <article className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-20">
          <h1 className="text-3xl font-semibold tracking-tight text-forge-black sm:text-4xl">
            About FlowFoundry
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            FlowFoundry is a curated library of practical AI workflows. Each one
            is a clear, step-by-step play you can use today—so you spend less
            time figuring out AI and more time discovering better ways to work.
          </p>

          <section className="mt-14" aria-labelledby="what-we-believe">
            <h2
              id="what-we-believe"
              className="text-xl font-semibold tracking-tight text-forge-black"
            >
              What we believe
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-forge-black/80">
              <p>
                The product isn&apos;t AI. It&apos;s helping people discover
                better ways to work.
              </p>
              <p>
                AI is the engine. The workflow is the value—the sequence of
                steps, prompts, and judgment that turns a tool into a reliable
                practice. We care less about the latest model hype and more
                about what actually ships: status reports that executives can
                scan, SOPs teams reuse, and research that lands as decisions.
              </p>
              <p>
                FlowFoundry exists to collect those plays in one place: practical,
                real-world workflows forged for how knowledge work actually
                happens.
              </p>
            </div>
          </section>

          <section className="mt-14" aria-labelledby="who-its-for">
            <h2
              id="who-its-for"
              className="text-xl font-semibold tracking-tight text-forge-black"
            >
              Who it&apos;s for
            </h2>
            <p className="mt-4 text-base leading-relaxed text-forge-black/80">
              Project managers, operations leaders, consultants, and knowledge
              workers who already know AI can help—and want practical, actionable
              guidance instead of another abstract tip list.
            </p>
          </section>

          <p className="mt-14 text-base leading-relaxed text-forge-black/80">
            Ready to find a better way to work?{" "}
            <Link
              href="/explore"
              className="font-medium text-forge-blue underline-offset-4 hover:underline"
            >
              Explore the library
            </Link>{" "}
            or{" "}
            <Link
              href="/submit"
              className="font-medium text-forge-blue underline-offset-4 hover:underline"
            >
              submit an idea
            </Link>{" "}
            for a workflow we should forge next.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}