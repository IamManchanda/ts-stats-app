import fs from "fs";
import { dateStringToDate } from "./utils";
import { ReadFileSyncOptions, SingleRowItems } from "./ts-lib/types";
import { MatchResult } from "./ts-lib/enums";

class CsvFileReader {
  data: SingleRowItems[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      } as ReadFileSyncOptions)
      .split("\n")
      .map(function iterateThroughRows(row: string): string[] {
        return row.split(",");
      })
      .map(this.iterateThroughSingleRowItems);
  }

  iterateThroughSingleRowItems(row: string[]): SingleRowItems {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}

export default CsvFileReader;
