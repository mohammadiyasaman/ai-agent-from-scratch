import dotenv from "dotenv";

dotenv.config();

export const env = {
  apiKey: process.env.OPENAI_API_KEY ?? "",
  model: process.env.OPENAI_MODEL ?? "openai/gpt-3.5-turbo",
  baseURL: process.env.OPENAI_BASE_URL,
};

if (!env.apiKey) {
  throw new Error("OPENAI_API_KEY is missing.");
}
