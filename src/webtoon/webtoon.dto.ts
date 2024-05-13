import { SerialDateType, WebtoonStatusType } from "./webtoon.type";

export type WebtoonDTO = {
  title: string;
  author: string[];
  platform: string[];
  keyword: string[];
  description: string;
  rating: string;
  reviewCount: number;
  episodeCount: number;
  heartCount: number;
  status: WebtoonStatusType;
  price: number;
  is_free: boolean;
  is_r_rated: boolean;
  thumbnail: string;
  serial_date: SerialDateType;
  serial_cycle: number;
};
