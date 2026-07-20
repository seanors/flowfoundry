import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Newsletter } from "@/components/newsletter";

const description =
  "Get new practical AI workflows delivered regularly—clear, tested plays for how you work. No spam, just useful guidance.";

export const metadata: Metadata = {
  title: "Newsletter",
  description,
  openGraph: {
    title: "Newsletter",
    description,
    url: "/newsletter",
    type: "website",
    siteName: "FlowFoundry",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsletter",
    description,
  },
  alternates: { canonical: "/newsletter" },
};

export default function NewsletterPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-xl">
            <h1 className="text-3xl font-semibold tracking-tight text-forge-black sm:text-4xl">
              Newsletter
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-forge-black/80">
              Subscribe for new practical AI workflows delivered regularly —
              clear, tested plays you can use at work. No spam, no tool-of-the-week
              noise. Just useful guidance when there&apos;s something worth sharing.
            </p>
            <Newsletter showIntro={false} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}