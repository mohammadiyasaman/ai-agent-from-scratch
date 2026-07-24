import { client } from "./client";
import { env } from "../config/env";
import { Message } from "../types/message";

export async function chat(messages: Message[]) {
  return client.chat.completions.create({
    model: env.model,
    messages,
  });
}
