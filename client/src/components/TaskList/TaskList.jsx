import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";

export default function TaskList({
  tasks,
  loading,
  toggleTask,
  deleteTask,
  updateTask, // ✅ added
}) {
  if (loading) {
    return (
      <div className="empty-state">
        <p>Loading tasks…</p>
      </div>
    );
  }

  if (!tasks || tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks found.</p>
        <span>You're all caught up 🎉</span>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((t, i) => (
        <TaskItem
          key={t._id}
          t={t}
          index={i}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          updateTask={updateTask} // ✅ pass down
        />
      ))}
    </ul>
  );
}
