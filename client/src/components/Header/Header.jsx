import React from "react";
import { FiFilter } from "react-icons/fi";
import "./Header.css";

export default function Header({ filter, setFilter }) {
  const hour = new Date().getHours();

  const getGreeting = () => {
    if (hour >= 5 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 17) return "Good Afternoon";
    if (hour >= 17 && hour < 21) return "Good Evening";
    return "Good Night";
  };

  return (
    <header className="top-bar">
      <div>
        <h1>{getGreeting()}</h1>
        <p className="subtitle">Here's what's on your agenda today.</p>
      </div>

      <div className="filter-pill">
        <FiFilter size={14} />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </header>
  );
}
