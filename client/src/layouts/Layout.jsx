import React, { useState } from "react";
import "./Layout.css";

export default function Layout({ children }) {
  const [animating, setAnimating] = useState(false);
  const [isDark, setIsDark] = useState(
    document.body.classList.contains("dark")
  );

  const toggleTheme = () => {
    if (animating) return;

    setAnimating(true);
    const reveal = document.querySelector(".theme-transition");

    // mark direction
    reveal.dataset.mode = isDark ? "light" : "dark";
    reveal.classList.add("active");

    // switch theme mid-animation
    setTimeout(() => {
      document.body.classList.toggle("dark");
      setIsDark(prev => !prev);
    }, 70);

    // cleanup
    setTimeout(() => {
      reveal.classList.remove("active");
      setAnimating(false);
    }, 450);
  };

  return (
    <div className="app-layout">
      <div className="theme-transition" />

      <div className="blob blob-1" />
      <div className="blob blob-2" />

      <div className="glass-panel">{children}</div>

      <button className="theme-toggle" onClick={toggleTheme}>
        {isDark ? "☀️" : "🌙"}
      </button>
    </div>
  );
}
