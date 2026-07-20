import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const siteDescription =
  "A curated library of practical AI workflows for knowledge workers—ready-to-use plays for projects, productivity, ops, and more.";

export const metadata: Metadata = {
  metadataBase: new URL("https://flowfoundry-eight.vercel.app"),
  title: {
    default: "FlowFoundry — Practical AI workflows for how you work",
    template: "%s | FlowFoundry",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    siteName: "FlowFoundry",
    title: "FlowFoundry — Practical AI workflows for how you work",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowFoundry — Practical AI workflows for how you work",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
