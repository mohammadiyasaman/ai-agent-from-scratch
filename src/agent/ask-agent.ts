import { chat } from "../llm/chat";
import { Message } from "../types/message";

import {
  addAssistantMessage,
  addAssistantToolCall,
  addToolMessage,
  addUserMessage,
} from "./memory";

import { executeTool } from "../tools/executor";

export async function askAgent(messages: Message[], input: string) {
  addUserMessage(messages, input);

  while (true) {
    const response = await chat(messages);

    const assistantMessage = response.choices[0].message;

    //  If Tool is not needed, return final answer
    if (!assistantMessage.tool_calls) {
      const answer = assistantMessage.content ?? "";

      addAssistantMessage(messages, answer);

      return answer;
    }

    // The assistant message itself, which contains tool_calls must be added to history
    // addAssistantToolCall(messages,)
    addAssistantToolCall(messages, {
      role: "assistant",
      content: assistantMessage.content,
      tool_calls: assistantMessage.tool_calls,
    });

    // Running the Tools
    for (const toolCall of assistantMessage.tool_calls) {
      if (toolCall.type !== "function") {
        continue;
      }

      const toolName = toolCall.function.name;

      const args = JSON.parse(toolCall.function.arguments);

      const result = await executeTool(toolName, args);

      addToolMessage(messages, toolCall.id, result);
    }
  }
}
