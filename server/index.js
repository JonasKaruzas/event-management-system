const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

app.use(bodyParser.json());
const { getAll, addAttendee, deleteAttendee, updateAttendee, login } = require("./db_handler");

app.get("/attendees", async (req, res) => {
  const data = await getAll();
  res.send(data);
});

app.post("/attendees", async (req, res) => {
  const body = req.body;
  const data = await addAttendee(body.firstName, body.lastName, body.email, body.age);
  res.send(data);
});

app.delete("/attendees/:id", async (req, res) => {
  const { id } = req.params;
  const data = await deleteAttendee(id);
  res.send(data);
});

app.put("/attendees/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const data = await updateAttendee(id, body.firstName, body.lastName, body.email, body.age);
  res.send(data);
});

app.post("/users", async (req, res) => {
  const body = req.body;
  const ats = await login(body);
  if (ats === undefined) {
    res.status(401);
    res.send("User or password not found");
  } else {
    res.send(ats);
  }
});

app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
