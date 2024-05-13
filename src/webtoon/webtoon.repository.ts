import { ObjectId } from "mongoose";
import Webtoon, { WebtoonDoc, WebtoonModelInterface } from "./webtoon.schema";
import { WebtoonDTO } from "./webtoon.dto";

export default class WebtoonRepository {
  private model: WebtoonModelInterface;

  constructor() {
    this.model = Webtoon;
  }

  public async findAllWebtoons(
    params: Partial<WebtoonDTO>
  ): Promise<WebtoonDTO[]> {
    return await this.model.find(params);
  }

  public async findOneById(webtoonId: string | ObjectId): Promise<WebtoonDTO> {
    return await this.model.findById(webtoonId);
  }

  public async createWebtoon(body: WebtoonDTO): Promise<WebtoonDoc> {
    return await this.model.build(body);
  }

  public async updateWebtoon(
    webtoonId: string | ObjectId,
    body: Partial<WebtoonDTO>
  ): Promise<WebtoonDTO> {
    return await this.model.findOneAndUpdate(
      { _id: webtoonId },
      { $set: body },
      { new: true }
    );
  }

  public async deleteWebtoon(
    webtoonId: string | ObjectId
  ): Promise<WebtoonDTO> {
    return await this.model.findOneAndDelete({ _id: webtoonId });
  }
}
