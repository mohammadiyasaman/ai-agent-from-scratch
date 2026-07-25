import OpenAI from "openai";
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

export function addToolMessage(
  messages: Message[],
  toolCallId: string,
  content: string,
) {
  messages.push({
    role: "tool",
    tool_call_id: toolCallId,
    content,
  });
}

export function addAssistantToolCall(messages: Message[], message: Message) {
  messages.push(message);
}
