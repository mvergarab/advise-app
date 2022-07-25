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


app.listen(3001, () => {
  console.log("running server");
});
