"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const connectDB = () => {
    const url = process.env.MONGODB_URL || "";
    const connect = () => {
        mongoose_1.default.connect(url, { dbName: "weeboon" });
        const connection = mongoose_1.default.connection;
        connection.on("error", () => {
            console.log("MongoDB database connection failed");
        });
        connection.once("open", () => {
            console.log("MongoDB database connection success");
        });
    };
    connect();
    mongoose_1.default.connection.on("disconnected", connect);
};
exports.default = connectDB;
//# sourceMappingURL=db.js.map