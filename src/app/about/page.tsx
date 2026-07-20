import type { Metadata } from "next";
import Image from "next/image";
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

const linkClass =
  "font-medium text-forge-blue underline-offset-4 transition-colors hover:text-flow-purple hover:underline";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <article className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
          <h1 className="text-3xl font-semibold tracking-tight text-forge-black sm:text-4xl">
            About FlowFoundry
          </h1>
          <div className="mt-6 max-w-3xl space-y-5 text-lg leading-relaxed text-forge-black/80">
            <p>
              FlowFoundry is a curated library of practical AI workflows —
              real, specific ways to use AI to do your actual work better.
            </p>
            <p>
              Not another list of AI tools. Not prompt dumps or hype about
              what&apos;s coming next. Just clear, tested workflows for the
              things you already do: planning projects, writing reports,
              building SOPs, staying on top of your inbox, making sense of
              messy data.
            </p>
          </div>

          <section
            className="mt-16 max-w-3xl"
            aria-labelledby="what-we-believe"
          >
            <h2
              id="what-we-believe"
              className="text-xl font-semibold tracking-tight text-forge-black sm:text-2xl"
            >
              What we believe
            </h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-forge-black/80 sm:text-lg">
              <p>
                The product isn&apos;t AI. The product is helping you discover
                better ways to work.
              </p>
              <p>
                AI is the engine. The workflow is the value. Anyone can tell you
                &ldquo;AI will transform your productivity&rdquo; — that&apos;s
                the easy, empty version. The harder, more useful thing is
                showing you exactly how to turn a rough brief into a project
                plan, or a transcript into decisions and owners, in a way you
                can apply this afternoon.
              </p>
              <p>
                So that&apos;s what we build: practical workflows, real use
                cases, and honest guidance about where AI genuinely helps —
                and where it doesn&apos;t. Every workflow here is meant to be
                used, not admired.
              </p>
            </div>
          </section>

          <section className="mt-16 max-w-3xl" aria-labelledby="who-its-for">
            <h2
              id="who-its-for"
              className="text-xl font-semibold tracking-tight text-forge-black sm:text-2xl"
            >
              Who it&apos;s for
            </h2>
            <p className="mt-5 text-base leading-relaxed text-forge-black/80 sm:text-lg">
              FlowFoundry is for the people doing the work: project managers,
              operations leaders, consultants, and knowledge workers who know
              AI can help but are tired of wading through hype to figure out
              how. If you&apos;ve ever thought &ldquo;I&apos;m sure AI could
              help with this, I just don&apos;t know where to start&rdquo; —
              this is for you.
            </p>
          </section>

          <section
            className="mt-16 max-w-3xl rounded-r-xl border-l-4 border-flow-purple bg-flow-purple/[0.06] px-6 py-8 sm:px-8 sm:py-10"
            aria-labelledby="note-from-founder"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              <Image
                src="/founder.jpg"
                alt="FlowFoundry founder"
                width={96}
                height={96}
                className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-flow-purple/20 sm:h-24 sm:w-24"
                priority
              />
              <div className="min-w-0 flex-1">
                <h2
                  id="note-from-founder"
                  className="text-xl font-semibold tracking-tight text-forge-black sm:text-2xl"
                >
                  A note from the founder
                </h2>
                <div className="mt-5 space-y-5 text-base leading-relaxed text-forge-black/80 sm:text-lg">
                  <p>
                    I&apos;ve spent my career turning messy, sprawling processes
                    into systems that actually hold — the kind of work where the
                    difference between a good week and a terrible one is whether
                    someone bothered to build a repeatable workflow.
                  </p>
                  <p>
                    Somewhere along the way I started using AI the same way: not
                    for the hype, but to take the tedious, repeatable parts of
                    knowledge work and make them faster. What struck me was how
                    many capable people knew AI could help them — and had no idea
                    where to start. The advice out there was either breathless
                    (&ldquo;AI will 10x everything!&rdquo;) or a firehose of tools
                    with no sense of what to actually do.
                  </p>
                  <p>
                    FlowFoundry is my answer to that gap. I don&apos;t want you
                    impressed by AI — I want you finding the one workflow that
                    gives you some time back for the things that really matter to
                    you.
                  </p>
                  <p>
                    No hype. No tool-of-the-week. Just practical workflows that
                    earn their place.
                  </p>
                  <p className="font-medium text-forge-black">— Sean Santana</p>
                </div>
              </div>
            </div>
          </section>

          <section
            className="mt-16 max-w-3xl"
            aria-labelledby="explore-the-library"
          >
            <h2
              id="explore-the-library"
              className="text-xl font-semibold tracking-tight text-forge-black sm:text-2xl"
            >
              Explore the library
            </h2>
            <p className="mt-5 text-base leading-relaxed text-forge-black/80 sm:text-lg">
              Ready to find a workflow? Browse the library at{" "}
              <Link href="/explore" className={linkClass}>
                /explore
              </Link>{" "}
              — or if there&apos;s something you wish existed, suggest it at{" "}
              <Link href="/submit" className={linkClass}>
                /submit
              </Link>
              . FlowFoundry gets better with every idea.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}