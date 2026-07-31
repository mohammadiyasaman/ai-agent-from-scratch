import axios from "axios";
import { Tool } from "../types";
import { env } from "../../config/env";

export const webSearchTool: Tool = {
  definition: {
    type: "function",

    function: {
      name: "web_search",

      description: "Search the internet",

      parameters: {
        type: "object",

        properties: {
          query: {
            type: "string",
          },
        },

        required: ["query"],
      },
    },
  },

  async execute(args) {
    const query = args.query as string;

    const response = await axios.post("https://api.tavily.com/search", {
      api_key: env.tavilyApiKey,

      query,

      search_depth: "basic",
    });

    return JSON.stringify(response.data);
  },
};
