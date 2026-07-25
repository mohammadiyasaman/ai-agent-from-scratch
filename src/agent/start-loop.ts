import readline from "node:readline/promises";
import { stdin, stdout } from "node:process";

import { askAgent } from "./ask-agent";
import { createMemory } from "./memory";
import { SYSTEM_PROMPT } from "./system-prompt";

export async function startLoop() {
  const rl = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  const messages = createMemory(SYSTEM_PROMPT);

  while (true) {
    const input = await rl.question("\nYou > ");

    if (input === "exit" || input === "quit") {
      break;
    }

    const answer = await askAgent(messages, input);

    console.log("\nAgent >", answer);
  }

  rl.close();
}
