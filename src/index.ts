import { registerTool } from "./tools/registry";
import { calculatorTool } from "./tools/calculator";
import { readFileTool } from "./tools/filesystem/read-file";
import { writeFileTool } from "./tools/filesystem/write-file";
import { listFilesTool } from "./tools/filesystem/list-files";
import { startLoop } from "./agent/start-loop";
import { webSearchTool } from "./tools/web/web-search";

registerTool(calculatorTool);

registerTool(readFileTool);

registerTool(writeFileTool);

registerTool(listFilesTool);

registerTool(webSearchTool);

startLoop();
