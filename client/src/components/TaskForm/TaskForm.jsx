import React from "react";
import { FiPlus } from "react-icons/fi";
import "./TaskForm.css";

export default function TaskForm({ form, setForm, addTask }) {
  return (
    <div className="composer">
      <input
        className="composer-input"
        placeholder="Add a new task..."
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />

      <div className="composer-controls">
        <div className="control-group">
          {/* CLEAN priority select */}
          <div className="select-wrapper">
            <select
              className="pill-select"
              value={form.priority}
              onChange={(e) =>
                setForm({ ...form, priority: e.target.value })
              }
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
            <span className="select-arrow">▾</span>
          </div>

          <input
            type="date"
            className="pill-date"
            value={form.dueDate}
            onChange={(e) =>
              setForm({ ...form, dueDate: e.target.value })
            }
          />
        </div>

        <button
          className="btn-primary"
          onClick={addTask}
          aria-label="Add task"
        >
          <FiPlus size={18} />
        </button>
      </div>
    </div>
  );
}
