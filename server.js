const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  // console.log("hello express");
  // res.send("hello express");
  // res.sendStatus(404);
  // res.status(200).send("hello express");
  res.status(500).json({ msg: "エラーです。" });
});

app.get('/user', (req, res) => {
  res.send("ユーザーです。");
});

app.get('/user/info', (req, res) => {
  res.send("ユーザー情報です。");
});

app.listen(port, () => console.log("サーバーが起動しました。"));
