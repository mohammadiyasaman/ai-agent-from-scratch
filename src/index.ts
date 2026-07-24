import { askLLM } from "./llm/chat";

async function main() {
  const answer = await askLLM("Who are you?");

  console.log(answer);
}

main();
