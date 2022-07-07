const express = require('express');
const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db1',
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

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
