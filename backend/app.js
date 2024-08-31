const express = require("express");

const app = express();

const port = 3010;
/*
  get, post, put, delete 요청 만들기
*/

app.get('/', (req, res) => {
  res.send("hello express");
});

app.post('/', (req, res) => {
  res.send("Post Request");
});

app.put('/', (req,res) => {
  res.send("Put Request");
});

app.delete('/', (req, res) => {
  res.send("Delete Request");
});

app.listen(port, () => {
  console.log(`Server Listening on Port: ${port}`);
});



