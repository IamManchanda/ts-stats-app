import MatchReader from "./MatchReader";
import MatchSummary from "./MatchSummary";

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const manUnitedConsoleSummary = MatchSummary.winsAnalysisWithConsoleReport(
  "Man United",
);
manUnitedConsoleSummary.buildAndPrintReport(matchReader.matches);

const manUnitedWebSummary = MatchSummary.winsAnalysisWithWebReport(
  "Man United",
  "man-united.html",
);
manUnitedWebSummary.buildAndPrintReport(matchReader.matches);
