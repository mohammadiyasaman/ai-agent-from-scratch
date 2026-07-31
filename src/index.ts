import { registerTool } from "./tools/registry";

import { calculatorTool } from "./tools/calculator";

import { readFileTool } from "./tools/filesystem/read-file";

import { writeFileTool } from "./tools/filesystem/write-file";

import { listFilesTool } from "./tools/filesystem/list-files";

import { startLoop } from "./agent/start-loop";

registerTool(calculatorTool);

registerTool(readFileTool);

registerTool(writeFileTool);

registerTool(listFilesTool);

startLoop();
