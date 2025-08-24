import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import Anim from "./database/anim.model.js";  // Note the .js extension
import connect from "./database/connect.js";   // Note the .js extension

dotenv.config();
colors.enable();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  console.log("Hello World!".rainbow);

  res.send("Hello World!");
});

app.get("/api/anime", async (req, res) => {
  const anime = await Anim.find();
  res.json(anime);
});

app.post("/api/anime", async (req, res) => {
  const anime = new Anim(req.body);
  await anime.save();
  res.json(anime);
});

app.listen(8000, () => {
  console.log("server listening on port 8000");

  // connect to the database
  connect();
});