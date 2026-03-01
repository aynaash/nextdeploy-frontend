import Hero from "@/components/hero";
import Features from "@/components/features";
import QuickStart from "@/components/quickstart";
import DocsPreview from "@/components/docs-preview";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <QuickStart />
      <DocsPreview />
      <Footer />
    </main>
  );
}
