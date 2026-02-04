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
        <h1>Portfolio App</h1>
        <p>Day 1 setup complete ✅</p>
      </main>
    </div>
  );
}

export default App;
