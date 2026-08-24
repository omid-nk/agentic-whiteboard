import Header from "@/components/modules/home/Header";
import Hero from "@/components/modules/home/Hero";
import Workflow from "@/components/modules/home/Workflow";
import Features from "@/components/modules/home/Features";

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
