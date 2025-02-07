import React from "react";
import Carousel from "./components/Carousel";
import "./App.css";

function App() {
  // Example: could be from DiceBear API or any image URLs
  const imageUrls = [
    "https://api.dicebear.com/9.x/pixel-art/svg?seed=Alice",
    "https://api.dicebear.com/9.x/lorelei/svg?seed=Bob",
    "https://api.dicebear.com/9.x/bottts/svg?seed=Charlie",
    "https://api.dicebear.com/9.x/avataaars/svg?seed=Dave",
    "https://api.dicebear.com/9.x/identicon/svg?seed=Eve",
  ];

  return (
    <div className="App">
      <h1>Reusable Image Carousel</h1>
      <Carousel images={imageUrls} />
    </div>
  );
}

export default App;
