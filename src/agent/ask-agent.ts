import { chat } from "../llm/chat";
import { addAssistantMessage, addUserMessage } from "./memory";
import { Message } from "../types/message";

export async function askAgent(messages: Message[], input: string) {
  addUserMessage(messages, input);

  const response = await chat(messages);

  const answer = response.choices[0].message.content ?? "";

  addAssistantMessage(messages, answer);

  return answer;
}
