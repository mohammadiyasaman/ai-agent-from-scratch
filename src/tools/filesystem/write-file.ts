import { writeFile } from "node:fs/promises";
import path from "node:path";

import { Tool } from "../types";

export const writeFileTool: Tool = {
  definition: {
    type: "function",

    function: {
      name: "write_file",

      description: "Create or write content into a file",

      parameters: {
        type: "object",

        properties: {
          path: {
            type: "string",
          },

          content: {
            type: "string",
          },
        },

        required: ["path", "content"],
      },
    },
  },

  async execute(args) {
    const filePath = args.path as string;

    const content = args.content as string;

    const absolutePath = path.resolve(process.cwd(), filePath);

    await writeFile(absolutePath, content, "utf-8");

    return "File written successfully";
  },
};
