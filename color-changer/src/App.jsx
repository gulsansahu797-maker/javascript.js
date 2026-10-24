
import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("#eef2ff");

  const colors = [
    { name: "Purple", value: "#ede9fe" },
    { name: "Blue", value: "#dbeafe" },
    { name: "Green", value: "#dcfce7" },
    { name: "Pink", value: "#fce7f3" },
    { name: "Orange", value: "#ffedd5" },
  ];

  return (
    <main className="app" style={{ backgroundColor: color }}>
      <section className="card">
        <div className="logo">R</div>

        <p className="tagline">MY FIRST REACT PROJECT</p>

        <h1>Color Studio</h1>

        <p className="description">
          Choose a color and transform your background instantly.
        </p>

        <div className="color-options">
          {colors.map((item) => (
            <button
              key={item.name}
              className={`color-button ${
                color === item.value ? "active" : ""
              }`}
              style={{ backgroundColor: item.value }}
              onClick={() => setColor(item.value)}
              aria-label={`Select ${item.name}`}
              title={item.name}
            />
          ))}
        </div>

        <p className="selected-color">
          Selected color: <strong>{color}</strong>
        </p>

        <button
          className="reset-button"
          onClick={() => setColor("#eef2ff")}
        >
          Reset Background
        </button>

        <p className="footer">Built with React + Vite</p>
      </section>
    </main>
  );
}

export default App;
