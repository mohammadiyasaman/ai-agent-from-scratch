import { Tool } from "./types";

const tools: Tool[] = [];

export function registerTool(tool: Tool) {
  tools.push(tool);
}

export function getTools() {
  return tools;
}

export function getDefinitions() {
  return tools.map((tool) => tool.definition);
}

export function findTool(name: string) {
  return tools.find((tool) => tool.definition.function.name === name);
}
