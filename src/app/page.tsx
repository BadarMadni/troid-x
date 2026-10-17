import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Services />
      <Products />
      <About />
      <Contact />
    </>
  );
}
