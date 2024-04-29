import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = () => {
  const url = process.env.MONGODB_URL || "";
  const connect = () => {
    mongoose.connect(url, { dbName: "weeboon" });
    const connection = mongoose.connection;

    connection.on("error", () => {
      console.log("MongoDB database connection failed");
    });

    connection.once("open", () => {
      console.log("MongoDB database connection success");
    });
  };
  connect();
  mongoose.connection.on("disconnected", connect);
};

export default connectDB;
