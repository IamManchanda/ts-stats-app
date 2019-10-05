import { MatchAnalyzer } from "../ts-utils/interfaces";
import { MatchData } from "../ts-utils/types";
import { MatchResult } from "../ts-utils/enums";

class WinsAnalysis implements MatchAnalyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let wins: number = 0;
    for (const match of matches) {
      const homeWin = MatchResult.HomeWin;
      const awayWin = MatchResult.AwayWin;
      if (match[1] === this.teamName && match[5] === homeWin) {
        wins += 1;
      } else if (match[2] === this.teamName && match[5] === awayWin) {
        wins += 1;
      }
    }

    return `${this.teamName} won ${wins} games`;
  }
}

export default WinsAnalysis;
