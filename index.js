import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello harsh");
});

app.listen(3000, () => {
  console.log("this is listening on port 3000");
});
