import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Certificates />
      <Skills/>
          </main>
  );
}