import { Router } from "express";
import WebtoonController from "./webtoon.controller";
import WebtoonRepository from "./webtoon.repository";
import WebtoonService from "./webtoon.service";

const router = Router();
const WEBTOON_PATH = {
  DEFAULT: "/webtoons",
  ID: () => `${WEBTOON_PATH.DEFAULT}/:id`,
};

const webtoonRepository = new WebtoonRepository();
const webtoonService = new WebtoonService(webtoonRepository);
const webtoonController = new WebtoonController(webtoonService);

// GET
router.get(
  WEBTOON_PATH.DEFAULT,
  webtoonController.findAllWebtoons.bind(webtoonController)
);
router.get(
  WEBTOON_PATH.ID(),
  webtoonController.findOneById.bind(webtoonController)
);

// POST
router.post(
  WEBTOON_PATH.DEFAULT,
  webtoonController.createWebtoon.bind(webtoonController)
);

// PATCH
router.patch(
  WEBTOON_PATH.ID(),
  webtoonController.updateWebtoon.bind(webtoonController)
);

// DELELTE
router.delete(
  WEBTOON_PATH.ID(),
  webtoonController.deleteWebtoon.bind(webtoonController)
);

export default router;
