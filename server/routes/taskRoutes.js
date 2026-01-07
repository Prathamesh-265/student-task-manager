
import express from "express";
import Task from "../models/Task.js";
const router = express.Router();

router.get("/", async (req,res)=>{
  const { status } = req.query;
  let filter = {};
  if(status==="completed") filter.completed = true;
  if(status==="pending") filter.completed = false;
  const tasks = await Task.find(filter).sort({createdAt:-1});
  res.json(tasks);
});

router.post("/", async (req,res)=>{
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

router.put("/:id", async (req,res)=>{
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.json(task);
});

router.delete("/:id", async (req,res)=>{
  await Task.findByIdAndDelete(req.params.id);
  res.json({message:"Deleted"});
});

export default router;
