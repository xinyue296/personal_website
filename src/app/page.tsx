import Home from "@/app/home/page";
import About from "./about/page";
import Projects from "./projects/page";
import Resume from "./resume/page";
import Contact from "./contact/page";

export default function App() {
  return (
    <main>    
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
}
