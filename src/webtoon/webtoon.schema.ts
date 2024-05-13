import { Document, Model, Schema, model } from "mongoose";
import { SerialDateType, WebtoonStatusType } from "./webtoon.type";
import { WebtoonDTO } from "./webtoon.dto";

const webtoonSchema = new Schema({
  // _id: { type: String, required: true, unique: true, trim: true },
  title: { type: String, required: true, trim: false },
  author: { type: [String], required: true, trim: false },
  platform: [String],
  keyword: [String],
  description: { type: String, required: true, trim: false },
  rating: { type: Number, required: true, default: 0 },
  reviewCount: { type: Number, required: true, default: 0 },
  episodeCount: { type: Number, required: true, default: 0 },
  heartCount: { type: Number, required: true, default: 0 },
  status: { type: WebtoonStatusType, required: true, trim: false },
  price: { type: Number, required: true },
  is_free: { type: Boolean, required: true, default: false },
  is_r_rated: { type: Boolean, required: true, default: false },
  thumbnail: { type: String },
  serial_date: { type: SerialDateType, required: false },
  serial_cycle: { type: Number },
});

export interface WebtoonDoc extends Document, WebtoonDTO {}
export interface WebtoonModelInterface extends Model<any> {
  build(attr: WebtoonDTO): WebtoonDoc;
}

const Webtoon = model<any, WebtoonModelInterface>("Webtoon", webtoonSchema);
webtoonSchema.statics.build = (attr: WebtoonDTO) => new Webtoon(attr);
export default Webtoon;
