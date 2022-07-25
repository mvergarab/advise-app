const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

// https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'Lamaracuja123',
  database: 'advise'
});

app.post('/signup', (req,res) => {

  const email = req.body.email
  const password = req.body.password

  db.query(
    "INSERT INTO users (email, password) VALUES(?,?)",
    [email, password],
    (err, result) => {
       console.log(err);
    }
  );
})

app.listen(3001, () => {
  console.log("running server");
});
