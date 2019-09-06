import { DataReader } from "./ts-utils/interfaces";
import { dateStringToDate } from "./utils";
import { MatchData } from "./ts-utils/types";
import { MatchResult } from "./ts-utils/enums";

class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(this.iterateThroughRowItems);
  }

  iterateThroughRowItems(row: string[]): MatchData {
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

export default MatchReader;
