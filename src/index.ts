import { registerTool } from "./tools/registry";
import { calculatorTool } from "./tools/calculator";
import { startLoop } from "./agent/start-loop";


registerTool(calculatorTool);


startLoop();