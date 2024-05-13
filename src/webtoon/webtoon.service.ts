import { ObjectId } from "mongoose";
import { getQueries } from "../utils/helper";
import WebtoonRepository from "./webtoon.repository";
import { WebtoonDTO } from "./webtoon.dto";
import { WebtoonDoc } from "./webtoon.schema";

export default class WebtoonService {
  private repository: WebtoonRepository;

  constructor(repository: WebtoonRepository) {
    this.repository = repository;
  }

  public async findAllWebtoons(
    params: Partial<WebtoonDTO>
  ): Promise<WebtoonDTO[]> {
    const webtoons = await this.repository.findAllWebtoons(getQueries(params));
    return webtoons;
  }

  public async findOneById(webtoonId: string | ObjectId): Promise<WebtoonDTO> {
    const webtoon = await this.repository.findOneById(webtoonId);
    return webtoon;
  }

  public async createWebtoon(body: WebtoonDTO): Promise<WebtoonDoc> {
    const webtoon = await this.repository.createWebtoon(body);
    return webtoon;
  }

  public async updateWebtoon(
    webtoonId: string | ObjectId,
    body: Partial<WebtoonDTO>
  ): Promise<WebtoonDTO> {
    const webtoon = await this.repository.updateWebtoon(
      webtoonId,
      getQueries(body)
    );
    return webtoon;
  }

  public async deleteWebtoon(
    webtoonId: string | ObjectId
  ): Promise<WebtoonDTO> {
    const webtoon = await this.repository.deleteWebtoon(webtoonId);
    return webtoon;
  }
}
