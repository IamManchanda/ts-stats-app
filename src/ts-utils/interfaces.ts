import { MatchData } from "./types";

export interface DataReader {
  read(): void;
  data: string[][];
}

export interface MatchAnalyzer {
  run(matches: MatchData[]): void;
}

export interface OutputTarget {
  print(report: string): void;
}
