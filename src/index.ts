import FootballMatchReader from "./FootballMatchReader";
import { MatchResult } from "./ts-lib/enums";

const reader = new FootballMatchReader("football.csv");
reader.read();

const dateOfFirstMatch: Date = reader.data[0][0];
console.log(dateOfFirstMatch);

let manUnitedWins: number = 0;
for (const match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins += 1;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins += 1;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
