const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const jwt = require("jsonwebtoken");

const SECRET = "mysecretkey";

// Middleware for Auth
function auth(req, res, next) {
  const header = req.headers["authorization"];
  if (!header) return res.status(401).json({ error: "No token" });
  const token = header.split(" ")[1];
  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.user = user;
    next();
  });
}

// Get all tasks
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
});

// Add task
router.post("/", auth, async (req, res) => {
  const { title } = req.body;
  const task = new Task({ title, user: req.user.id });
  await task.save();
  res.json(task);
});

// Update task (toggle status)
router.put("/:id", auth, async (req, res) => {
  const { status } = req.body;
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true }
  );
  res.json(task);
});

// Delete task
router.delete("/:id", auth, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

module.exports = router;
