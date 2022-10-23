import express from "express";

const app = express();
const port = 4000

app.get("/", function (req, res) {
  res.send("<h2>Hello World</h2>");
});

app.listen(4000, () => {
  console.log(`Server has started on port ${port}`)
});
