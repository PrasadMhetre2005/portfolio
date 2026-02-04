function Navbar({ theme, toggleTheme }) {
  return (
    <header className="navbar">
      <div className="logo">Prasad<span>.</span></div>

      <button className="theme-btn" onClick={toggleTheme}>
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
    </header>
  );
}

export default Navbar;
