const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let todos = [];
let idCounter = 1;

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" });

  const newTodo = { id: idCounter++, title, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const todo = todos.find((t) => t.id === parseInt(id));
  if (!todo) return res.status(404).json({ error: "Todo not found" });

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;

  const index = todos.findIndex((t) => t.id === parseInt(id));
  if (index === -1) return res.status(404).json({ error: "Todo not found" });

  const deletedTodo = todos.splice(index, 1);
  res.json(deletedTodo[0]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
