import dotenv from "dotenv";
import { Env } from "../type/env.type";

dotenv.config();

export const dbConfig: Record<Env, { url: string; options: any }> = {
  development: {
    url: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    options: {
      debug: true,
    },
  },
  production: {
    url: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    options: {
      readPreference: "secondaryPreferred",
    },
  },
};
