import { useState } from "react";
import "./App.css";

export default function App() {
  const [color, setColor] = useState("#ff6b6b");

  return (
    <div className="app">
      <h1 className="title">Retro Color Picker</h1>

      <div className="picker-box">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="color-input"
        />

        <div className="color-display" style={{ background: color }}>
          <p>{color.toUpperCase()}</p>
        </div>
      </div>

      <button
        className="copy-btn"
        onClick={() => {
          navigator.clipboard.writeText(color);
        }}
      >
        COPY HEX
      </button>
    </div>
  );
}
