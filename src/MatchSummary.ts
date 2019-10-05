import { MatchAnalyzer, OutputTarget } from "./ts-utils/interfaces";
import { MatchData } from "./ts-utils/types";

class MatchSummary {
  constructor(
    public analyzer: MatchAnalyzer,
    public outputTarget: OutputTarget,
  ) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}

export default MatchSummary;
