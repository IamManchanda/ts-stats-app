import { MatchResult } from "./enums";

export type ReadFileSyncOptions = { encoding: string; flag?: string } | string;
export type StringToDate = (dateString: string) => Date;
export type FootballMatches = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string,
];
