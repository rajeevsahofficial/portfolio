import Hero from "@/components/home/hero";
import Statement from "@/components/home/statement";
import About from "@/components/home/about";
import Marquee from "@/components/home/marquee";
import Experience from "@/components/home/experience";
import Work from "@/components/home/work";
import Skills from "@/components/home/skills";
import Expertise from "@/components/home/expertise";
import Education from "@/components/home/education";
import Contact from "@/components/home/contact";

export default function Home() {

  return (
    <main className="relative overflow-hidden bg-[#070707] text-[#f2eee7]">
      <Hero />
      <Statement />
      <About />
      <Marquee />
      <Work />
      <Experience />
      <Skills />
      <Expertise />
      <Education />
      <Contact />
    </main>
  );
}
