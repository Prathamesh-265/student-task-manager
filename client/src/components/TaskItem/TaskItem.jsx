import React, { useState } from "react";
import {
  FiCheckCircle,
  FiCircle,
  FiCalendar,
  FiTrash2,
  FiEdit2
} from "react-icons/fi";
import EditTaskModal from "../EditTaskModal/EditTaskModal";
import "./TaskItem.css";

export default function TaskItem({ t, index, toggleTask, deleteTask, updateTask }) {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <>
      <li
        className={`task-row ${t.completed ? "completed" : ""}`}
        style={{ animationDelay: `${index * 40}ms` }}
      >
        <button
          className="checkbox-wrapper"
          onClick={() => toggleTask(t)}
        >
          {t.completed ? (
            <FiCheckCircle className="icon-checked" />
          ) : (
            <FiCircle className="icon-unchecked" />
          )}
        </button>

        <div className="task-details" onClick={() => setShowEdit(true)}>
          <span className="task-title">{t.title}</span>
          <div className="task-meta">
            <span className={`priority-dot ${t.priority}`} />
            <span>{t.priority}</span>

            {t.dueDate && (
              <>
                <span className="divider">•</span>
                <span className="date-text">
                  <FiCalendar size={11} />
                  {t.dueDate.slice(0, 10)}
                </span>
              </>
            )}
          </div>
        </div>

        <button className="action-btn" onClick={() => setShowEdit(true)}>
          <FiEdit2 />
        </button>

        <button className="action-btn delete-btn" onClick={() => deleteTask(t._id)}>
          <FiTrash2 />
        </button>
      </li>

      {showEdit && (
        <EditTaskModal
          task={t}
          onClose={() => setShowEdit(false)}
          onSave={(data) => {
            updateTask(t._id, data);
            setShowEdit(false);
          }}
        />
      )}
    </>
  );
}
