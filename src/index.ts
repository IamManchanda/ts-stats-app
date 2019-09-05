import FootballMatchReader from "./FootballMatchReader";
import CsvFileReader from "./CsvFileReader";
import { MatchResult } from "./ts-lib/enums";

const csvFileReader = new CsvFileReader("football.csv");
const footballMatchReader = new FootballMatchReader(csvFileReader);

footballMatchReader.load();

let manUnitedWins: number = 0;
for (const match of footballMatchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins += 1;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins += 1;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
