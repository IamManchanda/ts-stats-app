import { MatchResult } from "./enums";

export type ReadFileSyncOptions = { encoding: string; flag?: string } | string;
export type StringToDate = (dateString: string) => Date;
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string,
];
