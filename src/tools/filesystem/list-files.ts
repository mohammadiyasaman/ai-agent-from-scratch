import { readdir } from "node:fs/promises";
import path from "node:path";

import { Tool } from "../types";

export const listFilesTool: Tool = {
  definition: {
    type: "function",

    function: {
      name: "list_files",

      description: "List files inside a directory",

      parameters: {
        type: "object",

        properties: {
          path: {
            type: "string",
          },
        },

        required: ["path"],
      },
    },
  },

  async execute(args) {
    const dir = args.path as string;

    const absolutePath = path.resolve(process.cwd(), dir);

    const files = await readdir(absolutePath);

    return JSON.stringify(files);
  },
};
