export const SerialDateType = [
  "MON",
  "TUE",
  "WED",
  "THUR",
  "FRI",
  "SAT",
  "SUN",
] as const;
export type SerialDateType = (typeof SerialDateType)[number];

export const WebtoonStatusType = ["연재 중", "연재 중단", "휴재", "완결"];
export type WebtoonStatusType = (typeof WebtoonStatusType)[number];
