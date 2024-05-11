"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const webtoon_model_1 = __importDefault(require("../models/webtoon.model"));
const webtoonRouter = (0, express_1.Router)();
webtoonRouter.get("/webtoons", async (req, res) => {
    try {
        const webtoons = await webtoon_model_1.default.find({});
        res.send(webtoons);
    }
    catch (error) {
        res.status(500).send();
    }
});
webtoonRouter.get("/webtoons/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const webtoon = await webtoon_model_1.default.findById(id);
        if (!webtoon)
            res.status(404).send();
        res.send(webtoon);
    }
    catch (error) {
        res.status(500).send();
    }
});
exports.default = webtoonRouter;
//# sourceMappingURL=webtoon.controller.js.map