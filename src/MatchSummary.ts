import { MatchAnalyzer, OutputTarget } from "./ts-utils/interfaces";
import { MatchData } from "./ts-utils/types";
import ConsoleReport from "./report-targets/ConsoleReport";
import WebReport from "./report-targets/WebReport";
import WinsAnalysis from "./analyzers/WinsAnalysis";

class MatchSummary {
  constructor(
    public analyzer: MatchAnalyzer,
    public outputTarget: OutputTarget,
  ) {}

  static winsAnalysisWithConsoleReport(teamName: string): MatchSummary {
    return new MatchSummary(new WinsAnalysis(teamName), new ConsoleReport());
  }

  static winsAnalysisWithWebReport(
    teamName: string,
    fileName: string,
  ): MatchSummary {
    return new MatchSummary(
      new WinsAnalysis(teamName),
      new WebReport(fileName),
    );
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}

export default MatchSummary;
