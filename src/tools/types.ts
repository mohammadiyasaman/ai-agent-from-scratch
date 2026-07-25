import OpenAI from "openai";

export type Tool = {
  definition: OpenAI.Chat.ChatCompletionFunctionTool;

  execute(args: Record<string, unknown>): Promise<string>;
};
