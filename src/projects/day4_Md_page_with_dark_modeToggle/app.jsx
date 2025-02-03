import { useState } from "react";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      {/* Hero Section */}
      <div className="hero">
        <h1 className="hero-title">
          Single- <br /> Page <br /> Markdown <br /> Website Day-4
        </h1>
        <p className="hero-subtitle">
          Create a nice single-page documentation website from one or more
          Markdown files easy test 
        </p>
      </div>

      {/* Content Section */}
      <div className="content">
        <h2>Features</h2>
        <ul>
          <li>Zero configuration</li>
          <li>
            Render a table of contents, shortcuts to the top-level sections, and
            custom links AND WTEVR IDC
          </li>
          <li>
            Include the contents of other Markdown files using a special syntax ;)
          </li>
        </ul>
      </div>

      {/* Floating Dark Mode Toggle */}
      <button
        className="toggle-btn"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
}
