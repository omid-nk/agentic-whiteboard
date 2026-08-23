import Header from "@/components/templates/home/Header";
import Hero from "@/components/templates/home/Hero";
import Workflow from "@/components/templates/home/Workflow";
import Features from "@/components/templates/home/Features";

export default function HomePage() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Workflow />
      <Features />
    </main>
  );
}
