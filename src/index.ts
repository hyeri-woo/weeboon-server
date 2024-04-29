import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./server/db";
import webtoonRouter from "./controller/webtoon.controller";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

db();

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("connected to weeboon server!");
});

app.use(webtoonRouter);

app.listen(port);
