import { FeaturedWorkflows } from "@/components/featured-workflows";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Newsletter } from "@/components/newsletter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedWorkflows />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
