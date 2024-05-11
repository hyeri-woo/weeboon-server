import { Router } from "express";
import Webtoons from "../models/webtoon.model";

const webtoonRouter = Router();

webtoonRouter.get("/webtoons", async (req, res) => {
  try {
    const webtoons = await Webtoons.find({});
    res.send(webtoons);
  } catch (error) {
    res.status(500).send();
  }
});

webtoonRouter.get("/webtoons/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const webtoon = await Webtoons.findById(id);
    if (!webtoon) res.status(404).send();
    res.send(webtoon);
  } catch (error) {
    res.status(500).send();
  }
});

export default webtoonRouter;
