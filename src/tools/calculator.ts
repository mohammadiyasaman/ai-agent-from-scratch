import { Tool } from "./types";

export const calculatorTool: Tool = {
  definition: {
    type: "function",

    function: {
      name: "calculator",

      description: "Useful for mathematical calculations",

      parameters: {
        type: "object",

        properties: {
          expression: {
            type: "string",
          },
        },

        required: ["expression"],
      },
    },
  },

  async execute(args) {
    const expression = args.expression as string;

    return String(eval(expression));
  },
};
