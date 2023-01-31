const express = require('express');
const app = express();
const userRouter = require("./routes/user");

const port = 8000;

// app.use(mylogger);
// app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // console.log("hello express");
  // res.send("hello express");
  // res.sendStatus(404);
  // res.status(200).send("hello express");
  // res.status(500).json({ msg: "エラーです。" });
  res.render('index', { text: "こんにちは" });
  // renderでストップ
});

app.use("/user", userRouter);

app.listen(port, () => console.log("サーバーが起動しました。"));
