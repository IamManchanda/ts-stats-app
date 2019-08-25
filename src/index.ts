import fs from "fs";
import { ReadFileSyncOptions } from "./ts-lib/types";

const matches: string[][] = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  } as ReadFileSyncOptions)
  .split("\n")
  .map(function iterateThroughRows(row: string): string[] {
    return row.split(",");
  });

let manUnitedWins = 0;
for (const match of matches) {
  if (match[1] === "Man United" && match[5] === "H") {
    manUnitedWins += 1;
  } else if (match[2] === "Man United" && match[5] === "A") {
    manUnitedWins += 1;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
