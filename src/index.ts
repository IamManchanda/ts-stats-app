import CsvFileReader from "./CsvFileReader";

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

const reader = new CsvFileReader("football.csv");
reader.read();

let manUnitedWins: number = 0;
for (const match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins += 1;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins += 1;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
