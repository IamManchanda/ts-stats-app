import { MatchAnalyzer, OutputTarget } from "./ts-utils/interfaces";

class MatchSummary {
  constructor(
    public analyzer: MatchAnalyzer,
    public outputTarget: OutputTarget,
  ) {}
}

export default MatchSummary;
