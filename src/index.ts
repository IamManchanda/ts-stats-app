import fs from "fs";
import { ReadFileSyncOptions } from "./ts-lib/types";

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  } as ReadFileSyncOptions)
  .split("\n")
  .map(function iterateThroughRows(row: string): string[] {
    return row.split(",");
  });

console.log(matches);
