import React from "react";
import { FiLayout, FiActivity } from "react-icons/fi";
import "./Sidebar.css";

export default function Sidebar({ pendingCount }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">
          <FiLayout />
        </div>
        <h2>TaskFlow</h2>
      </div>

      <div className="stats-card">
        <FiActivity className="stats-icon" />
        <div className="stats-text">
          <span className="stats-num">{pendingCount}</span>
          <span className="stats-label">Pending Tasks</span>
        </div>
      </div>
    </aside>
  );
}
