import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// =====================
// API ROUTES ONLY
// =====================
app.use("/api/tasks", taskRoutes);

// Health check (important for Render)
app.get("/", (req, res) => {
  res.send("Task Manager API is running");
});

// =====================
// SERVER
// =====================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
