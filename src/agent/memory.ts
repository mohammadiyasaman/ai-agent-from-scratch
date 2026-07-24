import { Message } from "../types/message";

export function createMemory(systemPrompt: string): Message[] {
  return [
    {
      role: "system",
      content: systemPrompt,
    },
  ];
}

export function addUserMessage(messages: Message[], content: string) {
  messages.push({
    role: "user",
    content,
  });
}

export function addAssistantMessage(messages: Message[], content: string) {
  messages.push({
    role: "assistant",
    content,
  });
}
