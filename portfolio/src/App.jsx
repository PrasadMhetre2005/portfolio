import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main style={{ padding: "40px" }}>
  <section id="home" style={{ minHeight: "100vh" }}>
    <h1>Home</h1>
  </section>

  <section id="academics" style={{ minHeight: "100vh" }}>
    <h1>Academics</h1>
  </section>

  <section id="skills" style={{ minHeight: "100vh" }}>
    <h1>Skills</h1>
  </section>

  <section id="projects" style={{ minHeight: "100vh" }}>
    <h1>Projects</h1>
  </section>

  <section id="resume" style={{ minHeight: "100vh" }}>
    <h1>Resume</h1>
  </section>

  <section id="contact" style={{ minHeight: "100vh" }}>
    <h1>Contact</h1>
  </section>
</main>

    </div>
  );
}

export default App;
