import { MatchAnalyzer, OutputTarget } from "./ts-utils/interfaces";

class FootballMatchSummary {
  constructor(
    public analyzer: MatchAnalyzer,
    public outputTarget: OutputTarget,
  ) {}
}

export default FootballMatchSummary;
