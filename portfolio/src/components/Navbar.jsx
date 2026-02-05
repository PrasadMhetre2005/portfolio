function Navbar({ theme, toggleTheme }) {
  return (
    <header className="navbar">
      <div className="logo">Prasad<span>.</span></div>
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#academics">Academics</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#resume" className="nav-btn">Resume</a>
        <a href="#contact">Contact</a>
      </nav>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </header>
  );
}

export default Navbar;
