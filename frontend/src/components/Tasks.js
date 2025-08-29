import { useEffect, useState } from "react";
import axios from "axios";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const token = localStorage.getItem("token");

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/tasks", {
        headers: { Authorization: "Bearer " + token }
      });
      setTasks(res.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  // Add task
  const addTask = async () => {
    if (!title.trim()) return alert("Task title cannot be empty!");
    try {
      await axios.post(
        "http://localhost:5000/tasks",
        { title },
        { headers: { Authorization: "Bearer " + token } }
      );
      setTitle("");
      fetchTasks();
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  // Toggle task status
  const toggleTask = async (task) => {
    const newStatus = task.status === "Pending" ? "Completed" : "Pending";
    try {
      await axios.put(
        `http://localhost:5000/tasks/${task._id}`,
        { status: newStatus },
        { headers: { Authorization: "Bearer " + token } }
      );
      fetchTasks();
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${id}`, {
        headers: { Authorization: "Bearer " + token }
      });
      fetchTasks();
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="task-container">
      <h2>My Tasks</h2>

      {/* Input Box */}
      <div className="task-input">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New Task"
        />
        <button onClick={addTask}>Add</button>
      </div>

      {/* Task List */}
      <ul>
        {tasks.map((task) => (
          <li
            key={task._id}
            className={task.status === "Completed" ? "completed" : ""}
          >
            <span>{task.title}</span>
            <div>
              <button onClick={() => toggleTask(task)}>
                {task.status === "Completed" ? "Mark Pending" : "Mark Done"}
              </button>
              <button
                className="delete"
                onClick={() => deleteTask(task._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
