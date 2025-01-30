import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Projects
import Day1 from "./projects/Day_1_counter_app/app";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Dashboard (main page) */}
        <Route
          path="/"
          element={
            <div style={{ padding: "40px" }}>
              <h1>React 40 Series</h1>
              <ul>
                <li><Link to="/day/1">Day 1 – Counter App</Link></li>
                
              </ul>
            </div>
          }
        />

        {/* Projects */}
        <Route path="/day/1" element={<Day1 />} />
        

      </Routes>
    </BrowserRouter>
  );
}