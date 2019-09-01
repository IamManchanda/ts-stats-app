import { MatchResult } from "./enums";

export type ReadFileSyncOptions = { encoding: string; flag?: string } | string;
export type StringToDate = (dateString: string) => Date;
export type SingleRowItems = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string,
];
