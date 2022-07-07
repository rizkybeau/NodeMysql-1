const express = require('express');
const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodemysql',
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
//create table mysql
app.get('/createpoststable', (req, res) => {
  let sql =
    'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id)    )';
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('post table created');
  });
});
//insert post 1
app.get('/addpost1', (req, res) => {
  let post = { title: 'post one', body: 'this is post number one' };
  let sql = 'INSERT INTO posts SET ?';
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('post 1 added...');
  });
});
//add post 2
app.get('/addpost2', (req, res) => {
  let post = { title: 'post two', body: 'this is post number two' };
  let sql = 'INSERT INTO posts SET ?';
  let query = db.query(sql, post, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('post 2 added...');
  });
});
//select posts
app.get('/getposts', (req, res) => {
  //let post = { title: 'post two', body: 'this is post number two' };
  let sql = 'SELECT * FROM posts';
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('post fetched');
  });
});
//select single posts
app.get('/getposts/:id', (req, res) => {
  let sql = `SELECT * FROM posts WHERE id =${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('post fetched...');
  });
});
//update posts
app.get('/updateposts/:id', (req, res) => {
  let newTitle = 'updated title';
  let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('post updated...');
  });
});
//DELETE posts
app.get('/deletepost/:id', (req, res) => {
  let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('post deleted... id : ' + req.params.id);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
