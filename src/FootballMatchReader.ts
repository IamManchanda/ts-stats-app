import { DataReader } from "./ts-lib/interfaces";
import { dateStringToDate } from "./utils";
import { FootballMatches } from "./ts-lib/types";
import { MatchResult } from "./ts-lib/enums";

class FootballMatchReader {
  matches: FootballMatches[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(this.iterateThroughRowItems);
  }

  iterateThroughRowItems(row: string[]): FootballMatches {
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

export default FootballMatchReader;
