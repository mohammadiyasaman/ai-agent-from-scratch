import { client } from "./client";
import { env } from "../config/env";

export async function askLLM(prompt: string): Promise<string> {
  const response = await client.responses.create({
    model: env.model,
    input: prompt,
  });

  return response.output_text;
}