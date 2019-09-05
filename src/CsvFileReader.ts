import fs from "fs";
import { ReadFileSyncOptions } from "./ts-lib/types";

abstract class CsvFileReader<FileData> {
  data: FileData[] = [];

  constructor(public filename: string) {}
  abstract iterateThroughRowItems(row: string[]): FileData;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      } as ReadFileSyncOptions)
      .split("\n")
      .map(function iterateThroughRows(row: string): string[] {
        return row.split(",");
      })
      .map(this.iterateThroughRowItems);
  }
}

export default CsvFileReader;
