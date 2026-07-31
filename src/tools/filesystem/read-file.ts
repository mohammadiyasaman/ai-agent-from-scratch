import { readFile } from "node:fs/promises";
import path from "node:path";

import { Tool } from "../types";

export const readFileTool: Tool = {
  definition: {
    type: "function",

    function: {
      name: "read_file",

      description: "Read the content of a file",

      parameters: {
        type: "object",

        properties: {
          path: {
            type: "string",
            description: "File path to read",
          },
        },

        required: ["path"],
      },
    },
  },

  async execute(args) {
    const filePath = args.path as string;

    const absolutePath = path.resolve(process.cwd(), filePath);

    const content = await readFile(absolutePath, "utf-8");

    return content;
  },
};
