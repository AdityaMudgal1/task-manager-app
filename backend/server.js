const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/taskdb");

app.use("/auth", require("./routes/auth"));
app.use("/tasks", require("./routes/task"));

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
