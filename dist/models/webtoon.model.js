"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const webtoonSchema = new mongoose_1.Schema({
    //   _id: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: false },
    author: { type: String, required: true, trim: false },
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
});
const Webtoons = (0, mongoose_1.model)("Webtoon", webtoonSchema);
exports.default = Webtoons;
//# sourceMappingURL=webtoon.model.js.map