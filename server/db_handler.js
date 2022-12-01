const sqlite3 = require("sqlite3");
const path = require("path");

const db = new sqlite3.Database(path.join(__dirname, "./attendees.sqlite"));

function getAll() {
  return new Promise((res, rej) => {
    db.all("SELECT rowid AS id, * FROM Attendees", [], (err, rows) => {
      if (err) {
        rej(err.message);
      }
      res(rows);
    });
  });
}

function addAttendee(firstName, lastName, email, age) {
  return new Promise((res, rej) => {
    db.run("INSERT INTO Attendees (firstName, lastName, email, age) VALUES (?,?,?,?)", [firstName, lastName, email, age], (err, row) => {
      if (err) {
        rej(err.message);
      }
      res(getAll());
    });
  });
}

function deleteAttendee(rowid) {
  return new Promise((res, rej) => {
    db.run("DELETE FROM Attendees WHERE rowid = (?)", [rowid], (err, row) => {
      if (err) {
        rej(err.message);
      }
      res(getAll());
    });
  });
}

function updateAttendee(id, firstName, lastName, email, age) {
  return new Promise((res, rej) => {
    const sql = `UPDATE Attendees SET firstName = '${firstName}', lastName = '${lastName}', email = '${email}', age = '${age}' WHERE rowid = ${id}`;
    db.run(sql, [], (err, row) => {
      if (err) {
        rej(err.message);
      }
      res(getAll());
    });
  });
}

module.exports = { getAll, addAttendee, deleteAttendee, updateAttendee };
