import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
    );
    console.log("MongoDB connected");
  } catch (err) {
    console.error("DB connection error:", err);
  }
};

connectDB();
