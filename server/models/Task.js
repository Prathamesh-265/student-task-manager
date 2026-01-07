
import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  priority: { type: String, enum: ["low","medium","high"], default: "low" },
  dueDate: Date,
  completed: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model("Task", TaskSchema);
