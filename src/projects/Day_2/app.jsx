import { useState, useEffect } from "react";
import cookieImg from "./cookie.png"; // your cookie image

export default function App() {
  const [points, setPoints] = useState(0);
  const [levelUp, setLevelUp] = useState(false);

  const level = Math.floor(points / 100);
  const pointsToNextLevel = 100 - (points % 100);
  const progress = (points % 100) / 100 * 100;

  useEffect(() => {
    if (points % 100 === 0 && points !== 0) {
      setLevelUp(true);
      setTimeout(() => setLevelUp(false), 500); // Reset after animation
    }
  }, [points]);

  function handleClick() {
    setPoints(points + 1);
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>COOKIE CLICKER</h1>

      <img
        src={cookieImg}
        alt="cookie"
        style={{ ...styles.cookie, transform: levelUp ? "scale(1.1)" : "scale(1)" }}
        onClick={handleClick}
      />

      <div style={styles.stats}>
        <p>Points: <b>{points}</b></p>
        <p>Level: <b>{level}</b></p>
        <p>{pointsToNextLevel} points to next level!</p>
      </div>

      <div style={styles.progressBarContainer}>
        <div
          style={{
            ...styles.progressBar,
            width: `${progress}%`,
            backgroundColor: progress === 100 ? "#FFD700" : "#4CAF50", // gold color at full progress
          }}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "#000",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "monospace",
  },
  title: {
    fontSize: "32px",
    marginBottom: "30px",
    letterSpacing: "2px",
  },
  cookie: {
    width: "220px",
    cursor: "pointer",
    filter: "grayscale(100%)", // black & white cookie
    transition: "transform 0.1s",
  },
  stats: {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "20px",
  },
  progressBarContainer: {
    width: "80%",
    height: "20px",
    backgroundColor: "#555",
    borderRadius: "10px",
    marginTop: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  },
  progressBar: {
    height: "100%",
    borderRadius: "10px",
    transition: "width 0.3s ease-in-out",
  },
};
