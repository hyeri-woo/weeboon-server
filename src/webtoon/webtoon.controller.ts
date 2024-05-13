import WebtoonService from "./webtoon.service";
import { Request, Response } from "express";

export default class WebtoonController {
  private service: WebtoonService;

  constructor(service: WebtoonService) {
    this.service = service;
  }

  public async findAllWebtoons(req: Request, res: Response) {
    try {
      const webtoons = await this.service.findAllWebtoons(req.query);
      res.status(201).send(webtoons);
    } catch (error) {
      res.status(500).send();
    }
  }

  public async findOneById(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const webtoon = await this.service.findOneById(id);
      if (!webtoon) res.status(404).send("해당 ID를 가진 웹툰은 없습니다.");
      res.status(200).send(webtoon);
    } catch (error) {
      res.status(500).send();
    }
  }

  public async createWebtoon(req: Request, res: Response) {
    try {
      const webtoon = await this.service.createWebtoon(req.body);
      await webtoon.save();
      res.status(201).send(webtoon);
    } catch (error) {
      res.status(500).send();
    }
  }

  public async updateWebtoon(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const webtoon = await this.service.updateWebtoon(id, req.body);
      res.status(201).send(webtoon);
    } catch (error) {
      res.status(500).send();
    }
  }

  public async deleteWebtoon(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const webtoon = await this.service.deleteWebtoon(id);
      res.status(201).send(`${webtoon.title}을 성공적으로 삭제했습니다.`);
    } catch (error) {
      res.status(500).send();
    }
  }
}
