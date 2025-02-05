import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [quote, setQuote] = useState("Loading...");
  const [fade, setFade] = useState(false);

  const fetchQuote = async () => {
    try {
      const res = await fetch("https://api.kanye.rest");
      const data = await res.json();
      return data.quote; // Kanye quote
    } catch {
      return "Could not fetch Kanye quote.";
    }
  };

  const newQuote = async () => {
    setFade(true);

    const q = await fetchQuote();

    setTimeout(() => {
      setQuote(q);
      setFade(false);
    }, 300);
  };


  useEffect(() => {
    newQuote();
  }, []);

  return (
    <div className="app">
      <h1>Rndm Quote Gen API 2.0 <br /><span className="subtext">powered with Kanye Rest API 😁</span> </h1>
      <div className="card">
        <p className={`quote ${fade ? "fade" : ""}`}>{quote}</p>
        <button onClick={newQuote} className="btn">New Quote</button>
      </div>
    </div>
  );
}
