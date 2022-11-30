const sqlite3 = require("sqlite3");
const path = require("path");

const db = new sqlite3.Database(path.join(__dirname, "./attendees.sqlite"));

function getAll() {
  return new Promise((res, rej) => {
    db.all("SELECT rowid AS id, * FROM Attendees", [], (err, rows) => {
      if (err) {
        rej(err);
      }
      res(rows);
    });
  });
}

function addAttendee(firstName, lastName, email, age) {
  db.run("INSERT INTO Attendees (firstName, lastName, email, age) VALUES (?,?,?,?)", [firstName, lastName, email, age], (err, row) => {
    if (err) {
      return console.log(err.message);
    }
    return row;
  });
}

function deleteAttendee(rowid) {
  db.run("DELETE FROM Attendees WHERE rowid = (?)", [rowid], (err, row) => {
    if (err) {
      return err.message;
    }
    return row;
  });
}

function updateAttendee(rowid, firstName, lastName, email, age) {
  const sql = `UPDATE Attendees SET firstName = '${firstName}', lastName = '${lastName}', email = '${email}', age = '${age}' WHERE rowid = ${rowid}`;
  db.run(sql, [], (err, row) => {
    if (err) {
      return err.message;
    }
    return row;
  });
}

module.exports = { getAll, addAttendee, deleteAttendee, updateAttendee };
