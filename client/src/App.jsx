import React, { useEffect, useState } from "react";
import Layout from "./layouts/Layout";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    priority: "medium",
    dueDate: "",
  });
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);

  /* ======================
     LOAD TASKS
  ====================== */
  const loadTasks = async () => {
    try {
      setLoading(true);
      const q = filter === "all" ? "" : `?status=${filter}`;
      const res = await fetch(`/api/tasks${q}`);
      if (res.ok) {
        const data = await res.json();
        setTasks(data);
      }
    } catch (err) {
      console.error("Failed to load tasks", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [filter]);

  /* ======================
     ADD TASK
  ====================== */
  const addTask = async () => {
    if (!form.title.trim()) return;

    try {
      await fetch("/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setForm({ title: "", priority: "medium", dueDate: "" });
      loadTasks();
    } catch (err) {
      console.error("Failed to add task", err);
    }
  };

  /* ======================
     TOGGLE COMPLETE
  ====================== */
  const toggleTask = async (task) => {
    // Optimistic UI
    setTasks((prev) =>
      prev.map((t) =>
        t._id === task._id ? { ...t, completed: !t.completed } : t
      )
    );

    try {
      await fetch(`/api/tasks/${task._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !task.completed }),
      });
    } catch (err) {
      console.error("Toggle failed", err);
      loadTasks();
    }
  };

  /* ======================
     DELETE TASK
  ====================== */
  const deleteTask = async (id) => {
    // Optimistic delete
    setTasks((prev) => prev.filter((t) => t._id !== id));

    try {
      await fetch(`/api/tasks/${id}`, { method: "DELETE" });
    } catch (err) {
      console.error("Delete failed", err);
      loadTasks();
    }
  };

  /* ======================
     UPDATE TASK (EDIT MODAL)
  ====================== */
  const updateTask = async (id, updatedData) => {
    try {
      await fetch(`/api/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });
      loadTasks();
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  /* ======================
     DERIVED STATE
  ====================== */
  const pendingCount = tasks.filter((t) => !t.completed).length;

  /* ======================
     UI
  ====================== */
  return (
    <Layout>
      <Sidebar pendingCount={pendingCount} />

      <main className="main-content">
        <Header filter={filter} setFilter={setFilter} />

        <TaskForm
          form={form}
          setForm={setForm}
          addTask={addTask}
        />

        <div className="task-scroll-area">
          <TaskList
            tasks={tasks}
            loading={loading}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        </div>
      </main>
    </Layout>
  );
}
