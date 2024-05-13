"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const webtoon_model_1 = __importDefault(require("../models/webtoon.model"));
const router = (0, express_1.Router)();
router.get("/webtoons", async (req, res) => {
    try {
        const setQuery = {};
        for (const key in req.query) {
            setQuery[key] = req.query[key];
        }
        const webtoons = await webtoon_model_1.default.find(setQuery);
        return res.status(201).send(webtoons);
    }
    catch (error) {
        res.status(500).send();
    }
});
router.get("/webtoons/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const webtoon = await webtoon_model_1.default.findById(id);
        if (!webtoon)
            res.status(404).send();
        return res.status(201).send(webtoon);
    }
    catch (error) {
        res.status(500).send();
    }
});
router.post("/webtoons", async (req, res) => {
    try {
        const webtoon = webtoon_model_1.default.build(req.body);
        await webtoon.save();
        return res.status(201).send(webtoon);
    }
    catch (error) {
        res.status(500).send();
    }
});
router.patch("/webtoons/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const setQuery = {};
        for (const key in req.body) {
            setQuery[key] = req.body[key];
        }
        const updatedWebtoon = await webtoon_model_1.default.findOneAndUpdate({ _id: id }, { $set: setQuery }, { new: true });
        return res.status(201).send(updatedWebtoon);
    }
    catch (error) {
        res.status(500).send();
    }
});
router.delete("/webtoons/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const deletedWebtoon = await webtoon_model_1.default.findOneAndDelete({ _id: id });
        return res.status(201).send(deletedWebtoon);
    }
    catch (error) {
        res.status(500).send();
    }
});
exports.default = router;
//# sourceMappingURL=webtoon.route.js.map