import { useEffect, useState } from "react";


function Navbar({ theme, toggleTheme }) {

  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <header className="navbar">
      <div className="logo">Prasad<span>.</span></div>

      <nav className="nav-links">
        <a href="#home" className={active === "home" ? "active" : ""}>
          Home
        </a>

        <a href="#academics" className={active === "academics" ? "active" : ""}>
          Academics
        </a>

        <a href="#skills" className={active === "skills" ? "active" : ""}>
          Skills
        </a>

        <a href="#projects" className={active === "projects" ? "active" : ""}>
          Projects
        </a>

        <a
          href="#resume"
          className={`nav-btn ${active === "resume" ? "active" : ""}`}
        >
          Resume
        </a>

        <a href="#contact" className={active === "contact" ? "active" : ""}>
          Contact
        </a>
      </nav>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </header>
  );
}

export default Navbar;
