import { useState } from "react";
import "./day1.css";

export default function Day1() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2>Day 1 – Counter App</h2>
      <p className="count-display">{count}</p>
      <div className="button-group">
        <button className="btn" onClick={() => setCount(count - 1)}>
          -
        </button>
        <button className="btn" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}
