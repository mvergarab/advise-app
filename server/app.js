const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({


});

app.listen(3001, () => {
  console.log("running server");
});
