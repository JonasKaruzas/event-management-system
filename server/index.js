const express = require("express");
const app = express();
const port = 5000;

const { getAll, addAttendee, deleteAttendee, updateAttendee } = require("./db_handler");

app.get("/users", async (req, res) => {
  const data = await getAll();
  res.send(data);
});

app.post("/users", (req, res) => {
  addAttendee(req.body.firstName, req.body.lastName, req.body.email, req.body.age);
  res.send("ok");
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  const data = await deleteAttendee(id);
  res.send(data);
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  updateAttendee(id, body.firstName, body.lastName, body.email, body.age);
  res.send("ok");
});

app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
