import { useState } from "react";
import "./App.css";

const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Success is not final; failure is not fatal: it is the courage to continue that counts.",
  "It always seems impossible until it's done.",
  "If you want to lift yourself up, lift up someone else.",
  "Dream big and dare to fail.",
  "What you do today can improve all your tomorrows.",
  "Simplicity is the ultimate sophistication.",
  "The only limit to our realization of tomorrow is our doubts of today."
];

export default function App() {
  const [quote, setQuote] = useState(quotes[0]);
  const [fade, setFade] = useState(false);

  const newQuote = () => {
    setFade(true);
    const random = quotes[Math.floor(Math.random() * quotes.length)];

    setTimeout(() => {
      setQuote(random);
      setFade(false);
    }, 300);
  };

  return (
     
    <div className="app">
       <h1>Rndm Quote Gen LOcal</h1>
      <div className="card">
        <p className={`quote ${fade ? "fade" : ""}`}>{quote}</p>
        <button onClick={newQuote} className="btn">New Quote</button>
      </div>
    </div>
  );
}
