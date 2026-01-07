import React from "react";
import { FiX } from "react-icons/fi";
import "./EditTaskModal.css";

export default function EditTaskModal({ task, onClose, onSave }) {
  if (!task) return null;

  const [form, setForm] = React.useState({
    title: task.title,
    priority: task.priority,
    dueDate: task.dueDate || "",
  });

  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        <header className="modal-header">
          <h3>Edit Task</h3>
          <button onClick={onClose}>
            <FiX />
          </button>
        </header>

        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <select
          value={form.priority}
          onChange={(e) => setForm({ ...form, priority: e.target.value })}
        >
          <option value="low">🟢 Low</option>
          <option value="medium">🟡 Medium</option>
          <option value="high">🔴 High</option>
        </select>

        <input
          type="date"
          value={form.dueDate}
          onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
        />

        <button className="save-btn" onClick={() => onSave(form)}>
          Save Changes
        </button>
      </div>
    </div>
  );
}
