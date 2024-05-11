import { Schema, model, InferSchemaType } from "mongoose";
import { SerialCycleType, SerialDateType } from "../types/webtoon";

const webtoonSchema = new Schema({
  //   _id: { type: String, required: true, unique: true, trim: true },
  title: { type: String, required: true, trim: false },
  author: { type: [String], required: true, trim: false },
  platform: [String],
  keyword: [String],
  description: { type: String, required: true, trim: false },
  rating: { type: Number, required: true, default: 0 },
  reviewCount: { type: Number, required: true, default: 0 },
  episodeCount: { type: Number, required: true, default: 0 },
  heartCount: { type: Number, required: true, default: 0 },
  status: { type: String, required: true, trim: false },
  price: { type: Number, required: true },
  original_author: { type: String, required: false, trim: false },
  is_free: { type: Boolean, required: true, default: false },
  r_rated: { type: Boolean, required: true, default: false },
  thumbnail: { type: String },
  serial_date: SerialDateType,
  serialCycle: SerialCycleType,
});

export type WebtoonType = InferSchemaType<typeof webtoonSchema>;
const Webtoons = model("Webtoon", webtoonSchema);
export default Webtoons;
