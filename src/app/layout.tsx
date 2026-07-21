import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

const siteDescription =
  "A curated library of practical AI workflows for knowledge workers—ready-to-use plays for projects, productivity, ops, and more.";

const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "FlowFoundry — Practical AI workflows for how you work",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://goflowfoundry.com"),
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
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowFoundry — Practical AI workflows for how you work",
    description: siteDescription,
    images: [ogImage.url],
  },
  alternates: {
    canonical: "https://goflowfoundry.com",
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