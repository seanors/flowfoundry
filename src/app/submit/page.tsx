import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SubmitForm } from "@/components/submit-form";

export const metadata: Metadata = {
  title: "Submit an idea",
  description:
    "Suggest a practical AI workflow for the FlowFoundry library, or get in touch with feedback and partnership ideas.",
  openGraph: {
    title: "Submit an idea",
    description:
      "Suggest a practical AI workflow for the FlowFoundry library, or get in touch with feedback and partnership ideas.",
    url: "/submit",
    type: "website",
    siteName: "FlowFoundry",
  },
  twitter: {
    card: "summary_large_image",
    title: "Submit an idea",
    description:
      "Suggest a practical AI workflow for the FlowFoundry library, or get in touch with feedback and partnership ideas.",
  },
  alternates: { canonical: "/submit" },
};

export default function SubmitPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="mx-auto max-w-2xl px-6 py-16 sm:px-8 sm:py-20">
          <h1 className="text-3xl font-semibold tracking-tight text-forge-black sm:text-4xl">
            Submit an idea or get in touch
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Have a workflow we should forge for the library? Feedback,
            partnership ideas, or a general question — we&apos;d love to hear
            from you.
          </p>

          <div className="mt-10">
            <SubmitForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
