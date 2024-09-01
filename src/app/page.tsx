import Home from "@/app/home/page";
import About from "./about/page";
import Projects from "./projects/page";
import Resume from "./resume/page";
import Contact from "./contact/page";

export default function App() {
  return (
    <main>
      <section className="py-24">
        <div className="container">
          <h1 className="text-3xl font-bold">My Portfolio</h1>
        </div>
      </section>
      {/* <Home /> */}
      {/* <About />
      <Projects />
      <Resume />
      <Contact /> */}
    </main>
  );
}
