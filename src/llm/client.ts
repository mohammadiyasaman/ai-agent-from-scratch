import OpenAI from "openai";
import { env } from "../config/env";

export const client = new OpenAI({
  apiKey: env.apiKey,
  baseURL: env.baseURL,
});