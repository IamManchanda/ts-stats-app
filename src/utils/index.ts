import { StringToDate } from "../ts-lib/types";

export const dateStringToDate: StringToDate = dateString => {
  const dateParts: number[] = dateString
    .split("/")
    .map(function iterateThroughDateStrings(value: string): number {
      return parseInt(value, 10);
    });
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
