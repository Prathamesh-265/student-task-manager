import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();
connectDB();

const app = express();

/* =====================
   CORS FIX (IMPORTANT)
===================== */
app.use(
  cors({
    origin: [
      "https://student-task-manager-1-bnji.onrender.com", // frontend URL
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

/* =====================
   API ROUTES
===================== */
app.use("/api/tasks", taskRoutes);

/* =====================
   HEALTH CHECK
===================== */
app.get("/", (req, res) => {
  res.send("Task Manager API is running");
});

/* =====================
   SERVER
===================== */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
