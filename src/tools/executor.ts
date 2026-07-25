import { findTool } from "./registry";

export async function executeTool(name: string, args: Record<string, unknown>) {
  const tool = findTool(name);

  if (!tool) {
    throw new Error(`Tool ${name} not found`);
  }

  try {
    return await tool.execute(args);
  } catch (error) {
    return `Tool Error: ${
      error instanceof Error ? error.message : "Unknown Error"
    }`;
  }
}
