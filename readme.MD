# Create mysql with node js

1. npm init
2. setting
3. npm install mysql express
4. npm install nodemon
5. coding.....

## Results

1. create database with code /createdb
2. create table with code /createpoststable

### create CRUD with node express

1. create post /addpost1
2. Update post /updateposts/:id
3. Delete post /deletepost/:id
4. fetch post /getposts
5. get single posts /getposts/:id


- get single posts
- //select single posts
- app.get('/getposts/:id', (req, res) => {
  let sql = `SELECT * FROM posts WHERE id =${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send('post fetched...');
  });
});
