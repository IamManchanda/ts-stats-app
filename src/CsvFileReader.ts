import fs from "fs";
import { ReadFileSyncOptions } from "./ts-utils/types";

class CsvFileReader {
  data: string[][] = [];

  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      } as ReadFileSyncOptions)
      .split("\n")
      .map(function iterateThroughRows(row: string): string[] {
        return row.split(",");
      });
  }
}

export default CsvFileReader;
