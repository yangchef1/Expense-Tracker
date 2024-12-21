import mongoose from "mongoose";
import dotenv from "dotenv";
import { dbConfig } from "./db.config";
import { Env } from "../type/env.type";

dotenv.config();

export const connectDb = async () => {
  const env: Env = (process.env.NODE_ENV as Env) || "development"; // 기본값: 개발 환경
  const { url, options } = dbConfig[env];

  try {
    await mongoose.connect(url, options);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("DB connection error:", err);
  }
};
