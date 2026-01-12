import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Footer />
    </main>
  );
}
