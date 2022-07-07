const express = require('express');
const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
});
//connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('mysql connected...');
});
const app = express();
const port = 3000;
//create new database
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE nodemysql';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('database baru berhasil dibuat');
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
